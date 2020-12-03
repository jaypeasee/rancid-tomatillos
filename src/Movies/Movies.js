import React from 'react'
import Card from '../Card/Card.js'
import './Movies.scss'


const Movies = (props) => {
  const movieCards = props.movies.map(movie => {
    return (
      <Card
        id={movie.id}
        image={movie.poster_path}
        alt={movie.title}
        key={movie.id}  
        toggleView={props.toggleView}
      />
    )
  })
  return (
    <section className="movies-container">
      {movieCards}
    </section>
  )
}












export default Movies;