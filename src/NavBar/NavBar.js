import React from 'react'
import './NavBar.scss'
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  const currentMovieKeys = Object.keys(props.currentMovie)
  return (
    <div className="nav-bar">
      <div className="nav-title">
        <h1>Welcome to Rancid Tomatillos!</h1>
        <h3>A page to view detailed movie reviews and their trailers</h3>
      </div>
      {currentMovieKeys.length > 0 && <div className="btn-container">
        <Link 
          to="/">
          <button
          role="button"
          className="home-btn"
          onClick={props.returnToHome}
        >Home</button>
        </Link>
      </div>}
    </div>
  )
}






export default NavBar