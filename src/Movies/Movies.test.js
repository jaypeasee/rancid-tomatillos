import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Movies from './Movies.js'
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

describe('Movies', () => {
  let history;
  let mockAllMovies;
  beforeEach(()=> {
    history = createMemoryHistory()
    mockAllMovies = [
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
  })
  it('should contain all movies if none have been filtered', () => {
    render(
    <Router 
      history={history}>
      <Movies
        movies={mockAllMovies}
        filteredMovies={[]}
        showChosenMovie={jest.fn()}
      />
    </Router>)
    expect(screen.getByAltText('Mulan movie cover')).toBeInTheDocument()
    expect(screen.getByAltText("Money Plane movie cover")).toBeInTheDocument()
  })

  it('should show filtered movies if they have been filtered by search', () => {
    const mockFilteredMovies = [
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
        filteredMovies={mockFilteredMovies}
        showChosenMovie={jest.fn()}
      />
    </Router>)

    // expect(queryByText('Mulan movie cover')).not.toBeInTheDocument()
    expect(screen.getByAltText("Money Plane movie cover")).toBeInTheDocument()
  })
})