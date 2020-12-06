import React from 'react'
import './NavBar.scss'

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <div className="nav-title">
        <h1>Welcome to Rancid Tomatillos</h1>
        <p>View Movie Reviews and Give Your Own Rating</p>
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