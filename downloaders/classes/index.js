/**
 * this file is just to make requires in other files easier because the node require will load indexes if given a folder name
 */
module.exports = {
  Downloader :  require("./Downloader"),
  Episode :     require("./Episode"),
  Series :      require("./Series")
}
