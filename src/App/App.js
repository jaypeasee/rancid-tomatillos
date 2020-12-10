import React, { Component } from 'react';
import Movies from '../Movies/Movies'
import NavBar from '../NavBar/NavBar'
import MovieView from '../MovieView/MovieView'
import { getAllMovies } from '../apiCalls.js'
import '../App/App.scss';
import { Route, Switch } from 'react-router-dom'

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
        <Switch> 
          <Route 
            exact 
            path="/" 
            render={() => {
              return <Movies 
                movies={this.state.movies}
                />
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
            render={() => <h1 className="error-message">Oops! This page was not found</h1>}
          />
        </Switch>
      </main>
    )
  }
}

export default App;