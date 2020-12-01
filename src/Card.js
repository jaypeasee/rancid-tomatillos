import React from 'react'
import './Card.css'

const Card = (props) => {
  console.log(props)
  return (
    <img className="movie-card" src={props.image} />
  )
}








export default Card;