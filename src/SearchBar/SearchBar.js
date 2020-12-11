import React, { Component } from 'react';
import './SearchBar'



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
        <h2>search for movie by title</h2>
        <input 
          placeholder='ex. Dead Pool'
          name='searchTerm'
          type='text'
          onChange={ this.updateInput }
          value= { this.state.searchTerm }>
        </input>
        <button
        onClick= { this.enterSearchTerm }
        >search</button>
      </form>
    )
  }
}

export default SearchBar;

    