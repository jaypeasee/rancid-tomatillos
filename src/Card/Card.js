import './Card.scss'
import tomsBack from '../images/toms-back.png'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const { id, image, title, average_rating } = props
  return (
    <Link 
    to={ `/movie-review/${ id }` }
    className="movie-card">
      <section 
        role="button"
        data-testid={ id }
        >
        <img
          className="movie-img"
          src={ image } 
          alt={ title + " movie cover" }
        />
        <article>
          <h2>{ title }</h2>
            <div className="tomato-rating">
              <p>{ Math.round(average_rating * 10) }%</p>
              <img src={ tomsBack } className="toms-back" height="70px" width="70px"/>
            </div>
        </article>
      </section>
    </Link>
  )
}

export default Card