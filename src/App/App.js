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
  render() {
    return (
      <React.Fragment>
        <nav>
          <NavBar/>
        </nav>
        <main>
          <Movies movies={this.state.movies}/>
        </main>
      </React.Fragment>
    )
  }
}

export default App;
