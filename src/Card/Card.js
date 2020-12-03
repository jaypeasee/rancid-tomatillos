import React, {Component} from 'react'
import './Card.scss'
import '../App/App.js'

class Card extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const {id, image, alt, toggleView} = this.props
    return (
    <img className="movie-card"
      id={id} 
      src={image} 
      alt={alt + " movie cover"}
      onClick={() => toggleView(id)}
    />
    )
  }
}

export default Card;