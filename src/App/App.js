import React, { Component } from 'react';
import Movies from '../Movies/Movies'
import movieData from '../movieData'
import NavBar from '../NavBar/NavBar'
import MovieView from '../MovieView/MovieView'
import {getAllMovies} from '../apiCalls.js'
import '../App/App.scss';

class App extends Component {
  constructor (){
    super () 
    this.state = {
      movies: [],
      toggled: false,
      currentMovie: {}
    } 
  }

  componentDidMount() {
    getAllMovies()
      .then(data => this.setState({
        movies: data.movies
      }))
      .catch(error => console.log(error))
  }

  //change this.state.movies to empty array
  //add componentDidMount method that calls fetch request in separate file
    //fetch request return a parsed array
    //reassign this.state.movies

  toggleView = (movieID) => {
    const matchedMovie = movieData.movies.find(movie => {
      return movie.id === parseInt(movieID)
    })
       this.setState({
        toggled: !this.state.toggled,
        currentMovie: matchedMovie
    })
  }
  render() {
    return (
      <React.Fragment>
        <nav>
          <NavBar
          toggled={this.state.toggled}
          toggleView={this.toggleView}
          />
        </nav>
        <main>
          {!this.state.toggled && this.state.movies.length && 
          <Movies 
            movies={this.state.movies}
            toggleView={this.toggleView}
          />}
          {this.state.toggled && 
          <MovieView
            currentMovie={this.state.currentMovie}
          />}
        </main>
      </React.Fragment>
    )
  }
}

export default App;

