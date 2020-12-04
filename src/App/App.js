import React, { Component } from 'react';
import Movies from '../Movies/Movies'
import NavBar from '../NavBar/NavBar'
import MovieView from '../MovieView/MovieView'
import {getAllMovies, getMovieByID, getMovieTrailerByID} from '../apiCalls.js'
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

  showChosenMovie = (ID) => {
    if (ID) {
      getMovieByID(ID)
        .then(data => this.setState({
          currentMovie: data.movie,
          toggled: true
        }))
        .then(() => getMovieTrailerByID(ID))
        .then(data => data.videos)
        .then(videos => this.setState({
          currentMovie: {...this.state.currentMovie, videos}
        }))
        .catch(error => console.log(error))
    }
  }

  returnToHome = () => {
    this.setState({
      toggled: false
    })
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <NavBar
          //
          toggled={this.state.toggled}
          returnToHome={this.returnToHome}
          />
        </nav>
        <main>
          {!this.state.toggled && this.state.movies.length && 
          <Movies 
            movies={this.state.movies}
            showChosenMovie={this.showChosenMovie}
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

