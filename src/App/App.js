import React, { Component } from 'react';
import Movies from '../Movies/Movies'
import NavBar from '../NavBar/NavBar'
import MovieView from '../MovieView/MovieView'
import { getAllMovies } from '../apiCalls.js'
import '../App/App.scss';
import Error from '../Error/Error.js'
import { Route } from 'react-router-dom'

class App extends Component {
  constructor (){
    super () 
    this.state = {
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

  render() {
    return (
      <main>
        <nav>
          <NavBar
          returnToHome={this.returnToHome}
          />
        </nav>
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
                />
            }}/>
          }
          <Route 
            exact 
            path='/movie-review/:id'
            render={({match}) => {
              console.log(match.params.id)
              return <MovieView
                id={match.params.id}
              />
            }}
          />
      </main>
    )
  }
}

export default App;