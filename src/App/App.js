import React, { Component } from 'react';
import Movies from '../Movies/Movies'
import movieData from '../movieData'
import NavBar from '../NavBar/NavBar'
import MovieView from '../MovieView/MovieView'
import '../App/App.scss';

class App extends Component {
  constructor (){
    super () 
    this.state = {
      movies: movieData.movies,
      toggled: false,
      currentMovie: {}
    } 
  }

  showMovieView = (movieID) => {
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
          <NavBar/>
        </nav>
        <main>
          {!this.state.toggled && 
          <Movies 
            movies={this.state.movies}
            showMovieView={this.showMovieView}
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

