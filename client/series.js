import React from 'react'

const Series = (props) => {

  return (
    <div class='series'>
      {
        props.type == "configure" ? (
          <div class = "configure">
            <a class = "configure-refuse"></a>
            <a class = "configure-accept"></a>
          </div>
        ): ""
      }
      <a href = {props.href?props.href:""} onClick = {props.action?props.action:()=>{}}>
        <img src={props.series.image} />
        <p>{props.series.title}</p>
        {
          props.type == "episode_notification" ? (
          <small>{`Episode ${props.ep_num}`}</small>
          ):""
        }
      </a>

    </div>
  )
}

export default Series;

