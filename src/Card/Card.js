import React, {Component} from 'react'
import './Card.scss'
import '../App/App.js'
import {Link} from 'react-router-dom';
import tomsBack from '../images/toms-back.png'

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, image, title, average_rating } = this.props
    return (
    <Link 
    to={`/movie-review/${id}`}
    className="movie-card">
      <section 
        role="button"
        data-testid={id}
        >
        <img
          className="movie-img"
          src={image} 
          alt={title + " movie cover"}
        />
        <article>
          <h2>{title}</h2>
            <div className="tomato-rating">
              <p>{Math.round(average_rating * 10)}%</p>
              <img src={tomsBack} className="toms-back" height="70px" width="70px"/>
            </div>
        </article>
      </section>
    </Link>
    )
  }
}

export default Card;