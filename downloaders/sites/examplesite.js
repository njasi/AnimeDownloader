/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-unused-vars */
const mp4Downloader = require("./mp4downloader")

// yes i know this should have been done as a subclass of a downloader class or somthing but i didnt want that

const ExampleLayout = {
  /**
   * Gets the results of searching for the searchStringand returns a list of series Objects
   * @param {string} searchString     the search query
   */
  search: function(searchString){
    // do the stuff
  },

  /**
   *  gets the series object at the url
   * @param {string} url
   */
  getSeries: function(url){

  },

  /**
   *  gets the episode objects from this page
   * @param {Object} Series    series object that is returned from the search
   */
  getSeriesEpisodes: function(series){
    // do the stuff
  },

  /**
   *
   * @param {Object} episode
   */
  getEpisodeLinks: function(episode){
    // do the stuff
  }
}

`
SeriesObjectLayout = {
  icon: // picture for the series(image url)
  url: // the url of the page that displays this information
  title: // series title
  description: // if a site gives the series a description it will be loaded here as text
  episodeCount: // num of episodes
}

EpisodeObjectLayout = {
  number: number of that ep [int]  if double ([int,int])
  special: bool that indicates if its a special
  url: page that has the ep on it (where you would watch) (probably parse from series page)
  seriesname: name of the series
  epname: name of the episode if it is mentioned otherwise itll be ep1 whatever
}

{
  1 : EpisodeObj,
  2-3: EpisodeObj,
}
`
// module.exports = ExampleLayout
