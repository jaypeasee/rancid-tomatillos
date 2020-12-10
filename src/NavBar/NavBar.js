import React from 'react'
import './NavBar.scss'
import { NavLink } from 'react-router-dom';
import tomsFace from '../images/tom-front.png'

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <div className="nav-title">
        <NavLink
          className="home-link"
          to="/">
          <h1>Rancid Tomatillos</h1>
        </NavLink>
        
        <h3>A page to view detailed movie reviews and their trailers</h3>
      </div>
      <div className="btn-container">
        <NavLink 
          to="/">
            <img
              src={tomsFace}
              alt='rancid tomatillo logo'
              role="button"
              className="home-btn"
              onClick={props.returnToHome}
            />
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar