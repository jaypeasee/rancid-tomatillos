import React from 'react'
import './NavBar.scss'

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <div className="nav-title">
        <h1>Welcome to Rancid Tomatillos!</h1>
        <p>A page to view detailed movie reviews and their trailers</p>
      </div>
      <div className="btn-container">
        {props.toggled && 
        <button
          role="button"
          className="home-btn"
          onClick={props.returnToHome}
        >Home</button>}
      </div>
    </div>
  )
}






export default NavBar