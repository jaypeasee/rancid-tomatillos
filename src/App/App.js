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
  // showChosenMovie = async (ID) => {
  //     const movieDetails = await getMovieByID(ID)
  //     const movieTrailer = await getMovieTrailerByID(ID)
  //     this.setState({
  //       currentMovie: {...movieDetails.movie, ...movieTrailer},
  //       toggled: true
  //     })
    const movieDetails = getMovieByID(ID)
    const movieTrailer = getMovieTrailerByID(ID)
    Promise.all([movieDetails, movieTrailer])
      .then(data => {
        this.setState({
          currentMovie: {...data[0].movie, ...data[1]},
          toggled: true
        })
      })
      .catch(error => console.log(error))
  }

  returnToHome = () => {
    this.setState({
      toggled: false,
      currentMovie: {}
    })
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <NavBar
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
