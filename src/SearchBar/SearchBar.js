import React, { Component } from 'react';
import './SearchBar.scss'
import searchBtn from '../images/search-icon.svg'



class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  updateInput = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  enterSearchTerm = (e) => {
    e.preventDefault()
    this.props.searchMovies(this.state.searchTerm)
  }

  render () {
    return (
      <form>
        <h2>Search Movies by Title</h2>
        <div className="search">
          <input 
            placeholder='ex. Dead Pool'
            name='searchTerm'
            type='text'
            onChange={ this.updateInput }
            value= { this.state.searchTerm }>
          </input>
          <img
          className="searchImg"
          alt="search image"
          src={ searchBtn }
          role="button"
          onClick= { this.enterSearchTerm }
          />
        </div>
      </form>
    )
  }
}

export default SearchBar;

    