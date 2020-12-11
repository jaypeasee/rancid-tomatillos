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
          <h1
          className="nav-h1"
          onClick= { props.returnToHome }
          >Rancid Tomatillos
          <div className="title-animation"></div>
          </h1>
        </NavLink>
      <div className="btn-container">
        <NavLink 
          className="btn-animation"
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
      <h3>A page to view detailed movie reviews and their trailers</h3>
    </div>
  )
}

export default NavBar