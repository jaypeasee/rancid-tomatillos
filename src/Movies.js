import React from 'react'
import Card from './Card.js'
import './Movies.css'


const Movies = (props) => {
  const movieCards = props.movies.map(movie => {
    return (
      <Card
        image={movie.poster_path}
        alt={movie.title}
        key={movie.id}  
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