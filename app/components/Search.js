import React from 'react'
import ReactDOM from 'react-dom'
import SeriesList from './SeriesList'
import Axios from "axios"
import { connect } from 'react-redux'

const servers = ['gogoanime.se','gogoanimes.tv','animefreak']

class Search extends React.Component {
  constructor(props){
    super()

    this.state = {
      series: [],
      selectedServer: servers[0],
      term:props.term,
      searching: false,
    }

    this.render = this.render.bind(this)
    this.getSeries = this.getSeries.bind(this)
    this.toggleView = this.toggleView.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount(){
    if(this.state.term){
      this.getSeries()
      document.getElementById("search-input").value = this.state.term
    }
  }


  handleSearch(event){
      if (event.keyCode === 13) {
        event.preventDefault();
        if(document.getElementById("search-input").value != ''){
          this.getSeries();
        }
      }
  }

  render () {
    return (
      <div id='main'>
        <div className = "search-bar wide-bar">
          <form onSubmit = {this.handleSearch}>
            <input id = "search-input" name = "term" type = "text" placeholder = "search..." />
          </form>
        </div>
        {this.toggleView()}
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return ({

  })
}

export default connect(mapStateToProps)(Search)