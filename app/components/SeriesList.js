import React from 'react'
import Series from './Series'

const SeriesList = (props)=>{
  return(
    <div className='series-container wrap'>
    {
      props.series.map((series)=>{
        return (<Series key = {series.title} series = {series}/>);
      })
    }
    </div>
  )
}
export default SeriesList