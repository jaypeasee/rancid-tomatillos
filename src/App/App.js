import React, { Component } from 'react';
import Movies from '../Movies/Movies'
import NavBar from '../NavBar/NavBar'
import MovieView from '../MovieView/MovieView'
import Error from '../Error/Error'
import { getAllMovies } from '../apiCalls.js'
import './App.scss';
import { Route, Switch } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

class App extends Component {
  constructor (){
    super () 
    this.state = {
      filteredMovies: [],
      movies: [],
      error: "",
      moviesSearched: false
    } 
  }

  componentDidMount() {
    getAllMovies()
      .then(data => this.setState({
        movies: data.movies
      }))
      .catch(error => this.setState({
        error: error,
    }))
  }

  returnToHome = () => {
    this.setState({
      moviesSearched: false
    })
  }

  searchMovies = (input) => {
    const filteredMovies = this.state.movies.filter(movie => {
      return movie.title.toLowerCase().includes(input.toLowerCase())
    })
    this.setState({
      filteredMovies,
      moviesSearched: true
    })
  }

  render() {
    return (
      <main>
        <nav>
          <NavBar
          returnToHome={ this.returnToHome }
          />
        </nav>
        <Switch> 
          <Route 
            exact 
            path="/" 
            render={() => {
              return (
              <div>
                <SearchBar 
                searchMovies = { this.searchMovies }
                />
                <Movies 
                  movies={ this.state.movies }
                  filteredMovies={ this.state.filteredMovies }
                  moviesSearched= { this.state.moviesSearched }
                />
              </div>
              )
            }}/>
          <Route 
            exact 
            path='/movie-review/:id'
            render={({match}) => {
              return <MovieView
                id={match.params.id}
              />
            }}
          />
          <Route
            render={() => {
              return <Error />
            }}
          />
        </Switch>
      </main>
    )
  }
}

export default App;