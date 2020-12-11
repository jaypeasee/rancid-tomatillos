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
      error: ""
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
    })
  }

  searchMovies = (input) => {
    const filteredMovies = this.state.movies.filter(movie => {
      return movie.title.includes(input)
    })
    this.setState({
      filteredMovies
    })
  }

  render() {
    return (
      <main>
        <nav>
          <NavBar
          returnToHome={this.returnToHome}
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
                  movies={this.state.movies}
                  filteredMovies= { this.state.filteredMovies }
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