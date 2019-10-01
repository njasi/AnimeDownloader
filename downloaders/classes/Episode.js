const slugify = require("../../utils/slugify")

class Episode{
  /**
   * @param {[int]} number          what episode(s) the video contains
   * @param {string} url            the url you would watch the video at
   * @param {string} seriesname     the name of the seires the episode is from
   * @param {string} epname         the name of the episode if the site has one
   * @param {boolean} special       weather or not the episode is a special (sometimes listed as n.5 where n is an ep num)
   * @param {string}                a slug representing the series
   */
  constructor(number, url, seriesName, epname = "", special = false, seriesSlug = null){
    this.number = number;
    this.url = url;
    this.seriesName = seriesName;
    this.epName = epname;
    this.special = special;
    if(seriesSlug){
      this.seriesSlug = seriesSlug;
    }else{
      this.seriesSlug = slugify(seriesName);
    }
  }
}

module.exports = Episode;
