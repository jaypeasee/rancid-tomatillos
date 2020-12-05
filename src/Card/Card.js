import React, {Component} from 'react'
import './Card.scss'
import '../App/App.js'

class Card extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const {id, image, alt, showChosenMovie} = this.props
    return (
    <img className="movie-card"
      aria-label={alt + " movie cover"}
      id={id} 
      src={image} 
      alt={alt + " movie cover"}
      onClick={() => showChosenMovie(id)}
    />
    )
  }
}

export default Card;