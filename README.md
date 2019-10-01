
# Pages Setup
## Actual Pages:
  - Home Page:
    - has the layout (nav bar stuff) (like most of the pages)
    - content in the page:
      - resume watching section
        - list of shows you've started watching that have not necessarily been updated (make watching json file? or the json in the folders that have the epsiodes)
      - updated anime you're watching
        - new episode is listed somewhere then it will show up here
        - do not include resume watching entries?
      - big buttons/links to
  - About:
  - How to use


## Site structure:
  - router stuff
    - do things
  - views:
    - make layout wrapper
    - make homepage
    - make error page
    - make viewer page
      - make download viewer page
    - make search page
      - make download search page

# Sites:
  ### Gogoanime.io / Gogoanimes.tv
  TODO: decide on final format of data
  ### Animefreak.tv:
  Wse the network interception thing I did for gogo or use the original approach and look in that one badly programmed script tag that they have for whatever reason.

  **Todo**
  1. Search
  1. getSeries
  1. getSeriesEpisodes
  1. getEpisodeLinks
  1. getDownloadLink
  ### Kissanime.ru

  **Todo**
  1. Search
  1. getSeries
  1. getSeriesEpisodes
  1. getEpisodeLinks
  1. *getDownloadLink* (no way to download from here can only use getEpisodeLinks)

  Kissanime has this think that checks if you are a bot or not by matching images to descriptions (not an actual captcha though)
  - seems like it can only be used to online viewing atm
  - getting past the verification
    - https://www.youtube.com/watch?v=8rcVcH4OTdo
    - when I get there search hamming distance and shit
      - distance to pre downloaded images that will be in a dir
        - lots of downloading though
      - change pictures to black and white ish (do some kind of edge detection?)



# Saving watch data:
## Different Types of data that will be stored
1. What shows you are watching and how far you are.
    - storage options:
      - [myanimelist](https://myanimelist.net/) integration?
      - Local tracking (a json file somewhere - easier but eh)
    - will allow suggestion of shows when a new ep is uploaded
1. Recently watched shows
    - ie use to continue "binge"
    - save time you stopped watching?
      - resume watching feature

## How I should deal with it:
oof
