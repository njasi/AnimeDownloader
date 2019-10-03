const MP4Downloader = require("../mp4downloader");
const slugify = require("../../utils/slugify")
const FileStuff = require("../../utils/files");
const getSize = FileStuff.fileSize;

class Downloader{
  /**
   * @param {Object} webPageObject  One of the objects from the downloaders dir (excepting this and mp4downloader)
   */
  constructor(webPageObject){
    this.search = webPageObject.search;
    this.getSeries = webPageObject.getSeries;
    this.getSeriesEpisodes = webPageObject.getSeriesEpisodes;
    this.getEpisodeLinks = webPageObject.getEpisodeLinks;
    this.getDownloadLink = webPageObject.getDownloadLink;
  }
}

/**
 * controls the quailty of video selected for downloading
 */
Downloader.Quality = {
  WORST:function(current,newer){
    return newer < current;
  },
  BEST:function(current,newer){
    return current < newer;
  },
  ANY:function(){
    return true;
  }
}

/**
 * filters out and returns the links that can be downloaded, rather than the simply viewable ones
 * @param {Object} links       array of strings (urls) to be filtered
 */
Downloader.filterDownloadableLinks = function(links){
  return links.filter((link=>{
    return ["mp4"].indexOf(link.split('.').pop().split("?")[0]) != -1;
  }))
}

/**
 * downloads the series in the specified range
 *
 * @param {Object} series      Series object that can be obtained from ExampleLayout.search()
 * @param {int} start          first episode you want downloaded (inclusive)
 * @param {int} quality        what you want the quality to be (view ExampleLayout.Quailty (.BEST,.WORST,.ANY))
 * @param {int} end            last episode you want downloaded (inclusive)
 */
Downloader.prototype.downloadSeries = function(series, start = 0, end = null, quality = Downloader.Quality.BEST){
  const episodes = this.getSeriesEpisodes(series);
  const keys = Object.keys(episodes);
  let promises = [];
  // just loop through all of them to find the range we want (it wont be very inefficient as the longest anime is only like 1000 eps)
  for(let i = 0; i < keys.length; i++){
    const current = episodes[keys[i]];
    let num = current.num[0]
    if(num < start){
      continue;
    }else if(end && num > end){
      break;
    }else{ // must be num > start && num < end
      promises.push(this.downloadEpisode(current));
    }
    return promises;
  }
}

/**
 * @param {Object} episode      the episode you want to download, can be obtained from getSeriesEpisodes.
 * @param {int} quality         what you want the quality to be (view ExampleLayout.Quailty (.BEST, .WORST, .ANY))
 * @return {Promise}            the promise of the video downloading
 */
Downloader.prototype.downloadEpisode = async function(episode, quality = Downloader.Quality.BEST){
  const links = Downloader.filterDownloadableLinks(this.getEpisodeLinks(episode));
  if(links.length === 0){
    throw new Error(`No Downloadable Sources Found for ${episode.number}`)
  }
  let selected = links[0];
  let selSize = await getSize(selected)
  for(let i = 0; i < links.length; i++){
    const curSize = await getSize(links[i])
    if(quality(selSize, curSize)){
      selected = links[i];
      selSize = curSize;
    }
  }
  const name = episode.num.join("-")
  const dir = slugify(episode.seriesName)
  return MP4Downloader(selected,name,dir);
}

module.exports = Downloader;
