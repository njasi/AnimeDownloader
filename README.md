
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
  - Page to configure anime connections ie what anime is the same anime on a diferent site and integrate with mal stuff


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
## Routers:
- Api routes for each site
  - ie "api/gogoanime" "api/animefreak")
- have a currentlywatching route that references the json file that houses everything instead of somthing site specific


### Functions on the routers:
  - watching
    - get the shows you're watching
  - new
    - get any shows in the user's list that have a new episode on that site

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
        - only need the username to check your watch-list
        - but it shoiuld be possible to update someone's information with puppeteer
      - Local tracking (a json file somewhere - easier but eh)
    - will allow suggestion of shows when a new ep is uploaded
1. Recently watched shows
    - ie use to continue "binge"
    - save time you stopped watching?
      - resume watching feature on homepage

## How I should deal with it:
These are both very closely related, but the watching progress is more like a permanent track of how much of an anime youve watched while recently watched will only include the shows that you have recently watched and at what point you were watching when you left off idrk its confusing because it could all be in one file but that'd probably be bad.
1. Watching Progress
    - myanimelist
      - make an "api" to get data
    - json
      -
1. Recently Watched

maybe i should use both for the watching progress because we have to account for offline mode.


# Making things look not shit

## react.js
should use a fair bit of react to make the page interactive
things that will need react:

- Use for most of the times when we have to load in data? os ajax just as good for those fetch waits.

1. The list of currently watched and recently watched
1. Searches
    - Load in searches using react
    - allow the series to be clicked for more information (like a popup of viewscreen not a new route)
    -
1. Video server changing could use react

## Don't forget:
- prop key for .map additions

# General Styling:
## Colors:
[coolors.co](https://coolors.co/0b0c10-1f2833-c5c6c7-66fcf1-45a29e)
- #0B0C10
- #1F2833
- #C5C6C7
- #66FCF1
- #45A29E


## Things to remember:
- nth-child(2)
  - make video lists alternating colors
