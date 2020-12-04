import React, { Component } from 'react';
import Movies from '../Movies/Movies'
import NavBar from '../NavBar/NavBar'
import MovieView from '../MovieView/MovieView'
import {getAllMovies, getMovieByID} from '../apiCalls.js'
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

  toggleView = (ID) => {
    if (ID) {
      getMovieByID(ID)
        .then(data => this.setState({
          currentMovie: data.movie
        }))
        .catch(error => console.log(error))
    }
    this.setState({
      toggled: !this.toggled
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

