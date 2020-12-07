import React, {Component} from 'react'
import './Card.scss'
import '../App/App.js'

class Card extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const {id, image, title, average_rating, showChosenMovie} = this.props
    return (
    <section 
      role="button"
      onClick={() => showChosenMovie(id)}
      data-testid={id}
      className="movie-card">
      <img
        className="movie-img"
        src={image} 
        alt={title + " movie cover"}
        />
        <h2>{title}</h2>
        <p>Rating: {Math.round(average_rating * 10) / 10}</p>
    </section>
    )
  }
}

export default Card;