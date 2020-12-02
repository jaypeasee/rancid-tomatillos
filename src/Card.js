import React from 'react'
import './Card.css'

const Card = (props) => {
  console.log(props)
  return (
    <img className="movie-card" src={props.image} alt={props.alt + " movie cover"}/>
  )
}








export default Card;