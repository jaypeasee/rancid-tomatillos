import Movies from './Movies.js'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Movies', () => {
  it('should contain all movies by default', () => {
    const history = createMemoryHistory()

    const mockAllMovies = [
      {
        id:694919, 
        poster_path:"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        backdrop_path :"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        title:"Money Plane",
        average_rating:6.666666666666667,
        release_date:"2020-09-29"
      },
      {
        id:337401, 
        poster_path:"https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        title:"Mulan",
        average_rating:4.909090909090909,
        release_date:"2020-09-04"
      }
    ]

    render (
      <Router 
        history={history}>
        <Movies
          movies={mockAllMovies}
          filteredMovies={[]}
          showChosenMovie={jest.fn()}
        />
      </Router>
    )

    expect(screen.getByAltText('Mulan movie cover')).toBeInTheDocument()
    expect(screen.getByAltText("Money Plane movie cover")).toBeInTheDocument()
  })
})