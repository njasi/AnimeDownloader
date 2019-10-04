import React from 'react'
import Series from './series.js'

const SeriesList = (props)=>{
  return(
    <div className='series-container'>
    {
      props.series.map((series)=>{
        return (<Series key = {series.title} series = {series}/>);
      })
    }
    </div>
  )
}
export default SeriesList