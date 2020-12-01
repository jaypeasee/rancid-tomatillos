import React, { Component } from 'react';
import logo from './logo.svg';
import Movies from './Movies'
import './App.css';

class App extends Component {
  constructor (){
    super () 
    
  }
  render() {
    return (
      <React.Fragment>
        <nav></nav>
        <main>
          <Movies/>
        </main>
      </React.Fragment>
    )
  }
}

export default App;
