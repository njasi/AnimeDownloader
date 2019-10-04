// the wrapper layout navbar and footer and stuff
const html = require("html-template-tag");

module.exports = (content,reactScript,hideNavSearch) => html`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Anime Downloader</title>
      <link rel="stylesheet" type="text/css" href="stylesheets/style.css">
      $${reactScript? html`<script src = ${reactScript} defer></script>`:""}
    </head>
    <body>
      <div class="wrapper-wrapper">
        <div class = "wrapper">
          <div class = "wrapper-bg">
            <div class = "navbar">
              <a class = "navbar-logo" href = "/">
                <img class = "logo" src = "https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg" alt = "Anime Downloader watch anime offline">
              </a>
              <div class = "navbar-links-holder">
                <ul class = "navbar-links">
                  <li class = "navbar-link-holder">
                    <a class = "navbar-link " href = "/">Home</a>
                  </li>
                  <li class = "navbar-link-holder">
                    <a class = "navbar-link" href = "#">Downloaded</a>
                  </li>
                  <li class = "navbar-link-holder">
                    <a class = "navbar-link" href = "#">Watching</a>
                  </li>
                  <li class = "navbar-link-holder">
                    <a class = "navbar-link" href = "#">Settings</a>
                  </li>
                  <li class = "navbar-link-holder">
                    <a class = "navbar-link" href = "#">About</a>
                  </li>
                </ul>
              </div>
              $${hideNavSearch?"":html`
              <div class = "search-holder">
                <form action = "/search">
                  <input id = "search-bar" type="search" name = "term" placeholder="Search...">
                  <button id = "search-button" type="submit">Search</button>
                </form>
              </div>`}
            </div>
            <div class = "content">
              $${reactScript? html`<div id = app></div>`:""}
              $${content}
            </div>
            <div id="footer">
              <div>
                Anime Downloader by Nick Jasinski
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>`



  // <img src = "#" alt= "Anime Downloader watch anime offline">

  // <link rel="stylesheet" type="text/css" href="stylesheets/bootstrap.min.css">