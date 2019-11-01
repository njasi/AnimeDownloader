const puppeteer = require('puppeteer');
const {Downloader, Episode, Series} =  require("../classes")
const request = require("request")

const gogoanime = {
  search: async function(searchString){
    const query = `https://www.gogoanime.io//search.html?keyword=${searchString}`

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(query);

    const stuff = await page.evaluate(() => {
      const results = document.getElementsByClassName("items")[0].getElementsByTagName("li");
      let out = [];
      for(let i = 0; i < results.length; i++){
        let aTags = results[i].getElementsByTagName("a");
        out.push({
          icon: results[i].getElementsByTagName("img")[0].src,
          url: aTags[0].href,
          title: aTags[1].innerText,
          date: results[i].getElementsByClassName("released")[0].innerText
        })
      }
      return out
    });

    await browser.close();
    return stuff.map((series)=>{
      let temp =  new Series(series.icon,series.url,series.title)
      temp.date = series.date;
      return temp;
    });
  },
  getSeries : async function(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const stuff = await page.evaluate(() => {
      const info = document.getElementsByClassName("anime_info_body_bg")[0]
      const pTags = info.getElementsByTagName("p")

      const page = document.getElementById("episode_page");
      const first = page.firstElementChild.firstElementChild.getAttribute("ep_start")
      const last = page.lastElementChild.firstElementChild.getAttribute("ep_end")

      return {
        icon: info.getElementsByTagName("img")[0].src,
        title: info.getElementsByTagName("h1")[0].innerText,
        type: pTags[1].innerText.replace("Type: ",""),
        description: pTags[2].innerText.replace("Plot Summary: ", ""),
        date: pTags[4].innerText,
        status: pTags[5].innerText.replace("Status: ",""),
        episoderange: first + "-"+ last,
        episodecount: parseInt(last)
      }
    });

    await browser.close();

    let temp = new Series(stuff.icon,url,stuff.title)
    temp.type = stuff.type;
    temp.description = stuff.description;
    temp.date = stuff.date;
    temp.status = stuff.status;
    temp.episoderange = stuff.episoderange
    temp.episodecount = stuff.episodecount
    temp.slug = url.replace("https://www4.gogoanime.io/category/", "")
    return temp;
  },

  getSeriesEpisodes: async function(seriesUrl, seriesTitle){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(seriesUrl);

    const stuff = await page.evaluate(() => {
      const oof = async function(){
        let out = []
        const page = document.getElementById("episode_page");
        const tabs = [...page.children]
        for(let i = 0; i < tabs.length;i++){
          tabs[i].children[0].click();
          await new Promise(resolve => setTimeout(resolve, 1000));
          [...document.getElementById("episode_related").children].forEach(li =>{
            out.push({
              num:[parseInt(li.firstElementChild.firstElementChild.innerText.replace("EP ",""))],
              url: li.firstChild.href
            })
          })
        }
        return out;
      }
      return oof();
    })

    // TODO: stuff
    await browser.close();
    let episodes = stuff.map(ep=>{
      return new Episode(ep.num,ep.url,seriesTitle);
    })

    episodes.sort((a,b)=>(a.number[0]>b.number[0])?1:-1)
    return episodes;
  },

  getEpisodeLinks: async function(episodeURL){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(episodeURL);

    const stuff = await page.evaluate(() => {
      let out = {}
      const lis = [...document.getElementsByClassName("anime_muti_link")[0].firstElementChild.children]
      lis.forEach(li=>{
          let name = li.firstElementChild.innerText.replace("\nCHOOSE THIS SERVER","")
          out[name] = ({
            dataVideo: li.firstElementChild.getAttribute("data-video"),
            serverName: name
          })
      })
      return out;
    })
    await browser.close();
    return stuff;
  },

  getDownloadLink: async function(link){ // formatted like what get episode links returns
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    switch(link.serverName){
      case "MP4UPLOAD":
        await page.goto(link.dataVideo);
        let src = await page.evaluate(()=>{
          return document.getElementById("vid").firstElementChild.src;
        })
        await browser.close()
        return src;
      case "STREAMANGO":
      case "OLOAD":
      case "OPENUPLOAD":
        let source = null
        await page.setRequestInterception(true);
        page.on('request', async interceptedRequest => {
          try{
            if (interceptedRequest.url().split("?")[0].endsWith(".mp4")){
              await browser.close()
              source =  interceptedRequest.url()
            }
            interceptedRequest.continue();
          }catch(error){
            interceptedRequest.continue();
          }
        });

        try{
          await page.goto(link.dataVideo)
          await page.click("body")
          if(link.serverName == "STREAMANGO"){
            // for whatever reason you have to click three times to for the page to actually request the video for STREAMANGO
            await page.click("body")
            await page.click("body")
          }
          let checks = 0;
          while(!source&&checks<100){
            checks++
            await new Promise(resolve => setTimeout(resolve, 100));
          }
        }catch(error){
          // console.log(error)
        }
        return source
    }
  }
}

module.exports = new Downloader(gogoanime);
