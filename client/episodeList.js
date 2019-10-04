/**
 * View a list of episode numbers on the series page
 */

import React from 'react'

const EpisodeList = (props) => {

  return (
    <ul class = "episode-list">
      {props.episodes.map(ep=>{
        return (
          <li>
            <a href = {`/watch?episode=${ep.url}`}>
              EP {ep.number.join("-")}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default EpisodeList;

