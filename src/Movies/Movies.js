import React from 'react'
import Card from '../Card/Card.js'
import './Movies.scss'
import Error from '../Error/Error'


const Movies = (props) => {
  let moviesToDisplay = []
  if (props.movies.length === 0) {
    return (
      <h1 className="loading-message">Loading...</h1>
    )
  }
  if (props.filteredMovies.length > 0 && props.moviesSearched) {
     moviesToDisplay = props.filteredMovies
  } else if (props.filteredMovies.length === 0 &&  props.moviesSearched) {
    return (
      <Error />
    )
  }
  else {
   moviesToDisplay = props.movies
  }
  const movieCards = moviesToDisplay.map(movie => {
    return (
      <Card
        id={movie.id}
        image={movie.poster_path}
        title={movie.title}
        key={movie.id}  
        average_rating={movie.average_rating}
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