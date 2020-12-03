import React, {Component} from 'react'
import './Card.scss'
import '../App/App.js'

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.showMovieView)
    return (
    <img className="movie-card"
    id={this.props.id} 
    src={this.props.image} 
    alt={this.props.alt + " movie cover"}
    onClick={() => this.showMovieView(this.props.id)}
    />
    )
  }
}

export default Card;