import React, { Component } from 'react';
import Movies from '../Movies/Movies'
import movieData from '../movieData'
import NavBar from '../NavBar/NavBar'
import '../App/App.scss';

class App extends Component {
  constructor (){
    super () 
    this.state = {movies: movieData.movies} 
  }

  showMovieView = (movieID) => {
    const matchedMovie = movieData.movies.find(movie => {
      return movie.id === parseInt(movieID)
    })
    console.log(matchedMovie);
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <NavBar/>
        </nav>
        <main>
          <Movies movies={this.state.movies}
          showMovieView={this.showMovieView}
          />
        </main>
      </React.Fragment>
    )
  }
}

export default App;

