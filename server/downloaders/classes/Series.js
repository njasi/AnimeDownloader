class Series{
  /**
   * @param {string} icon          picture for the series(image url)
   * @param {string} url           the url of the page that displays this information
   * @param {string} title         the title of the series
   */
  constructor(icon, url, title){
    this.icon = icon;
    this.url = url;
    this.title = title;

    this.episodecount = null;
    this.description = null;
    this.slug =  null;
    this.date = null;
    this.episoderange = null;
    this.type = null;
    this.status = "unknown"
  }
}

module.exports = Series;
