import React from 'react'
import ReactDOM from 'react-dom'
import SeriesList from './seriesList.js'
import Axios from "axios"

const servers = ['gogoanime.se','gogoanimes.tv','animefreak']

class Search extends React.Component {
  constructor(){
    super()

    this.state = {
      series: [],
      selectedServer: servers[0],
      term:"",
      searching: false
    }

    this.render = this.render.bind(this)
    this.getSeries = this.getSeries.bind(this)
    this.toggleView = this.toggleView.bind(this)
  }

  async getSeries(){
    this.setState({
      searching:true,
      series:[]
    })
    let response = await Axios.get(`/api/${this.state.selectedServer}/search?term=${this.state.term}`);
    let series = response.data;
    if(series.length === 0){
      series = null;
    }
    this.setState({
      searching:false,
      series:series
    })
  }

  setServer(){
    this.setState()
  }

  toggleView(){
    if(this.state.searching){
      return (
        <div className = "searching">
          <h2 id = "status">Searching</h2>
          <div className = "loadingIcon"></div>
        </div>
      )
    }else if (this.state.series === null){
      return(
        <div className = "searching">
          <h2 id = "status">There were no results for "{this.state.term}"</h2>
          {/* <div className = "loadingIcon"></div> */}
        </div>
      )
    }else{
      return (
        <SeriesList series = {this.state.series}/>)
    }
  }

  render () {
    return (
      <div id='main'>
        <div className = "search-bar-wide">
          <input id = "search-input" type = "text" placeholder = "search..." onKeyDown = {async (event)=>{
            if (event.keyCode === 13) {
              event.preventDefault();
              await this.setState({
                term:document.getElementById("search-input").value
              });
              this.getSeries()
            }
          }
          }/>
          <input id = "search-button" type = "submit"/>
        </div>
        {this.toggleView()}
      </div>
    )
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('app')
)
