import React from 'react'

const Series = (props) => {
  const styling = {
    "background-image": `url(${props.series.icon})`
  }

  return (
    <div style = {styling} className='series'>
      {
        props.type == "configure" ? (
          <div className = "configure">
            <a className = "configure-refuse"></a>
            <a className = "configure-accept"></a>
          </div>
        ): ""
      }
      <a href = {props.href?props.href:""} onClick = {props.action?props.action:()=>{}}>
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


{/* <img src={props.series.icon} /> */}