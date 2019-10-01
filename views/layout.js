const html = require("html-template-tag");

module.exports = (content) => html`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Anime Downloader</title>
      <link rel="stylesheet" type="text/css" href="stylesheets/style.css">
    </head>
    <body>
      <div class = "navbar">
        <div class = "nav-left">
          <a href = "#">
            <img src = "#" alt= "Anime Downloader watch anime offline">
          </a>
        </div>
        <div class = "nav-mid>
        </div>
        <div class = "nav-left">
      </div>
      <div class="container content">
        $${content}
      </div>
      <hr/>
      <div id="footer">
        Anime Downloader by Nick Jasinski
      </div>
    </body>
  </html>`
