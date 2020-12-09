import React from 'react'
import './NavBar.scss'
import { NavLink } from 'react-router-dom';
// import tomsFace from '../images/toms-face'

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <div className="nav-title">
        <h1>Welcome to Rancid Tomatillos!</h1>
        <h3>A page to view detailed movie reviews and their trailers</h3>
      </div>
      <div className="btn-container">
        <NavLink 
          to="/">
            <button 
            role="button"
            className="home-btn"
            onClick={props.returnToHome}
            >Home</button>
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar