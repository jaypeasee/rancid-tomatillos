import React, { Component } from 'react';
import Movies from '../Movies/Movies'
import NavBar from '../NavBar/NavBar'
import MovieView from '../MovieView/MovieView'
import {getAllMovies, getMovieByID, getMovieTrailerByID} from '../apiCalls.js'
import '../App/App.scss';
import Error from '../Error/Error.js'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  constructor (){
    super () 
    this.state = {
      movies: [],
      currentMovie: {},
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
        currentMovie: {},
      }))
  }

  showChosenMovie = (ID) => {
    const movieDetails = getMovieByID(ID)
    const movieTrailer = getMovieTrailerByID(ID)
    Promise.all([movieDetails, movieTrailer])
      .then(data => {
        this.setState({
          currentMovie: {...data[0].movie, ...data[1]},
          error:""
        })
      })
      .catch(error => this.setState({
        error: error,
        currentMovie: {},
      }))
  }

  returnToHome = () => {
    this.setState({
      currentMovie: {}
    })
  }

  render() {
    return (
      <body>
        <nav>
          <NavBar
          returnToHome={this.returnToHome}
          currentMovie={this.state.currentMovie}
          />
        </nav>
        <main>
          {this.state.error && <Error 
            errorMessage={this.state.error.message}
          />}
          {this.state.movies.length > 0 && 
          <Route 
            exact 
            path ="/" 
            render={() => {
              return <Movies 
                movies={this.state.movies}
                showChosenMovie={this.showChosenMovie}
                />
            }}/>
          }
          <Route 
            exact 
            path='/movie-review/:id'
            render={() => {
              return <MovieView
                currentMovie={this.state.currentMovie}
              />
            }}
          />
        </main>
      </body>
    )
  }
}

export default App;

