import React, {Component} from 'react'
import './Card.scss'
import '../App/App.js'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    }
  }

  handleClick = (event) => {
    this.setState({isHidden: true})
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