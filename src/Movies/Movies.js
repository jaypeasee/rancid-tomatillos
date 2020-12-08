import React from 'react'
import Card from '../Card/Card.js'
import './Movies.scss'


const Movies = (props) => {
  const movieCards = props.movies.map(movie => {
    return (
      <Card
        id={movie.id}
        image={movie.poster_path}
        title={movie.title}
        key={movie.id}  
        average_rating={movie.average_rating}
        showChosenMovie={props.showChosenMovie}
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