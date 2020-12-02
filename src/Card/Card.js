import React, {Component} from 'react'
import './Card.scss'
import '../App/App.js'

class Card extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (event) => {
    this.props.showMovieView(event.target.id)
  }

  render() {
    return (
    <img className="movie-card"
    id={this.props.id} 
    src={this.props.image} 
    alt={this.props.alt + " movie cover"}
    onClick={this.handleClick}
    />
    )
  }
}


export default Card;