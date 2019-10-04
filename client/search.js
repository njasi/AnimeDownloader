import React from 'react'
import ReactDOM from 'react-dom'
import Series from './series.js'
import Axios from "axios"

const servers = ['gogoanime.se','gogoanimes.tv','animefreak']

class Search extends React.Component {
  constructor(){
    super()

    this.state = {
      series: [],
      selectedServer: servers[0],
      term:"naruto"
    }

    this.render = this.render.bind(this)
    this.getSeries = this.getSeries.bind(this)
  }

  async getSeries(){
    let response = await Axios.get(`/api/${this.state.selectedServer}/search?term=${this.state.term}`);
    let series = response.data;
    this.setState({
      series:series
    })
  }

  setServer(){
    this.setState()
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
        <div className='series-container'>
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

ReactDOM.render(
  <Search />,
  document.getElementById('app')
)
