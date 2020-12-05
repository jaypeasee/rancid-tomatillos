import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import MovieView from './MovieView.js'


describe('MovieView', () => {
  let mockMovie;
  beforeEach(()=> {
    mockMovie = {
      title: "Rogue",
      average_rating: 7,
      genres: [{id: 2, name: 'action'}],
      release_date: "2020-07-20",
      runtime: 105,
      budget: 900,
      revenue: 100,
      tagline: "Hello world",
      overview: "say hello to the world",
      backdrop_path: "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
      poster_path: "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
      videos: [{id: 331, movie_id: 718444, key: "IpSK2CsKULg", site: "YouTube", type: "Trailer"}]
    }
  })
  
  it('should render basic movie review specs ', () => {
    render(<MovieView
      currentMovie={mockMovie}
    />)

    expect(screen.getByText("Rogue")).toBeInTheDocument()
    
    expect(screen.getByAltText("Rogue movie poster")).toBeInTheDocument()
    
    expect(screen.getByText("Hello world")).toBeInTheDocument()
    
    expect(screen.getByText("say hello to the world")).toBeInTheDocument()
  })

  it('should render detailed movie specs', () => {
    render(<MovieView
      currentMovie={mockMovie}
    />)

    expect(screen.getByText(7)).toBeInTheDocument()

    expect(screen.getByText({id: 2, name: "action"})).toBeInTheDocument()

    expect(screen.getByText("2020-07-20")).toBeInTheDocument()

    expect(screen.getByText("$900")).toBeInTheDocument()

    expect(screen.getByText("$100")).toBeInTheDocument()

    expect(screen.getByText("105 minutes")).toBeInTheDocument()
  }) 

  it('should', () => {
    render(<MovieView 
      currentMovie={mockMovie}
    />)

    expect(screen.getByRole("button")).toBeInTheDocument()
    
  })
})
export default MovieView;