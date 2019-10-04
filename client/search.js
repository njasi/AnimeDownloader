import React from 'react'
import Series from './series.js'
import Axios from "axios"

const servers = ['gogoanime.se','gogoanimes.tv','animefreak']

export default class Search extends React.Component {
  constructor(){
    super()

    this.state = {
      series: [],
      selectedServer: 'GOGOANIME.SE'
    }

    this.render = this.render.bind(this)
  }

  async componentDidMount(){
    let data = await Axios.get("/api/{}/search");
    let series = data.data;
    this.setState({
      series:series
    })
    console.log(series)
  }

  setServer(){
    this.state.update
  }

  render () {
    return (
      <div id='main'>
        <div class='container'>
          {
            this.state.series.map((series)=>{
              return (<Series series = {series}/>);
            })
          }
        </div>
      </div>
    )
  }
}



{/* <div id='albums' class='row wrap'>
{this.state.albums.map(album=>{
  return (<Album artistName = {album.artist.name} albumName = {album.name} imageUrl = {album.artworkUrl}/>)
})}
</div> */}
