import MovieView from './MovieView.js'
import '@testing-library/jest-dom'
import { screen, render, waitFor } from '@testing-library/react'
import { getMovieByID, getMovieTrailerByID } from '../apiCalls'
jest.mock('../apiCalls')
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'


describe('MovieView', () => {
  let history
  let mockMovie
  let allMovieSpecs
  let videoSpecs

  beforeEach(()=> {
    history = createMemoryHistory()

    allMovieSpecs = {
      movie: {
        id:694919,
        title:"Money Plane",
        poster_path:"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        backdrop_path:"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        release_date:"2020-09-29",
        overview:"hey hey hey hey" ,
        genres:["Action"],
        budget: 0,
        revenue: 100,
        runtime: 82,
        tagline: "Hello",
        average_rating: 6.666666666666667
      }
    }

    videoSpecs = {
      videos:[
        {
          id:330,
          movie_id:694919,
          key:"aETz_dRDEys",
          site:"YouTube",
          type:"Trailer"
        }
      ]
    }
    
    getMovieByID.mockResolvedValueOnce(allMovieSpecs);
    getMovieTrailerByID.mockResolvedValueOnce(videoSpecs);

    render(
      <Router history={history}>
        <MovieView
          currentMovie={mockMovie}
        />
      </Router>)
  })
  
  it('should render basic movie review specs ', async () => {
    const movieTitle = await waitFor(() => screen.getByText("Money Plane"))
    const movieAltText = await waitFor(() => screen.getByAltText("Money Plane movie poster"))
    const movieTagLine = await waitFor(() => screen.getByText("Hello"))
    const movieOverView = await waitFor(() => screen.getByText("hey hey hey hey"))

    expect(movieTitle).toBeInTheDocument()
    expect(movieAltText).toBeInTheDocument()
    expect(movieTagLine).toBeInTheDocument()
    expect(movieOverView).toBeInTheDocument()
  })

  it('should render detailed movie specs', async () => {
    const movieRating = await waitFor(() => screen.getByText("67%"))
    const movieGenre = await waitFor(() => screen.getByText("Action"))
    const movieReleaseDate = await waitFor(() => screen.getByText("Sep 29, 2020"))
    const movieBudget = await waitFor(() => screen.getByText("$0"))
    const movieRevenue = await waitFor(() => screen.getByText("$100"))
    const movieDuration= await waitFor(() => screen.getByText("82 minutes"))

    expect(movieRating).toBeInTheDocument()
    expect(movieGenre).toBeInTheDocument()
    expect(movieReleaseDate).toBeInTheDocument()
    expect(movieBudget).toBeInTheDocument()
    expect(movieRevenue).toBeInTheDocument()
    expect(movieDuration).toBeInTheDocument()
  }) 

  it('should render a video', async () => {
    const trailerId = await waitFor(() => screen.getByTestId(330))
    expect(trailerId).toBeInTheDocument()
  })
})

export default MovieView;