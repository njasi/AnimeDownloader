const puppeteer = require('puppeteer');

async function gotoAndExecute(url, code){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const stuff = await page.evaluate(() => {
    return code();
  });

  await browser.close();
  return stuff;
}

module.exports = gotoAndExecute
