import App from './App'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getAllMovies, getMovieByID, getMovieTrailerByID } from '../apiCalls'
jest.mock('../apiCalls')
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('App', () => {
  let mockMovies;
  let history;

  beforeEach(() => {
    history = createMemoryHistory()

    mockMovies = {
      movies: [
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
          release_date:"2020-09-04"}
        ]
      }
    
    getAllMovies.mockResolvedValueOnce(mockMovies)

    render(<Router history={history}><App /></Router>)
   })

  it('should load movies', async () => {
    const firstMovieAltTxt = await waitFor(() => screen.getByAltText("Money Plane movie cover"))
    const secMovieAltTxt = await waitFor(() => screen.getByAltText("Mulan movie cover"))

    expect(firstMovieAltTxt).toBeInTheDocument()
    expect(secMovieAltTxt).toBeInTheDocument()
  })

  it('should load the home page by default', async () => {
    expect(history.location.pathname).toBe('/')
  })

  it('should route to a specific movie page when that movie is clicked', async () => {
    const allMovieSpecs = {
      movie: {
        id:694919,
        title:"Money Plane",
        poster_path:"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        backdrop_path:"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        release_date:"2020-09-29",
        overview:"hey hey hey hey",
        genres:["Action"],
        budget:0,
        revenue:0,
        runtime: 82, 
        tagline: "",
        average_rating: 6.666666666666667
      }
    }

    const videoSpecs = {
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
    
    getMovieByID.mockResolvedValueOnce(allMovieSpecs)
    getMovieTrailerByID.mockResolvedValueOnce(videoSpecs)

    const firstMovieAltTxt = await waitFor(() => screen.getByAltText("Money Plane movie cover"))
    userEvent.click(firstMovieAltTxt);

    expect(history.location.pathname).toBe('/movie-review/694919')
  })

  it('should show chosen movie specs', async () => {
    const allMovieSpecs = {
      movie: {
        id:694919,
        title:"Money Plane",
        poster_path:"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        backdrop_path:"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        release_date:"2020-09-29",
        overview:"hey hey hey hey",
        genres:["Action"],
        budget:0,
        revenue:0,
        runtime: 82, 
        tagline: "",
        average_rating: 6.666666666666667
      }
    }

    const videoSpecs = {
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
    
    getMovieByID.mockResolvedValueOnce(allMovieSpecs)
    getMovieTrailerByID.mockResolvedValueOnce(videoSpecs)

    const firstMovieAltTxt = await waitFor(() => screen.getByAltText("Money Plane movie cover"))
    userEvent.click(firstMovieAltTxt)

    const movieSpecs = await waitFor(() => screen.getByTestId("694919"))
    const video = await waitFor(() => screen.getByTestId('330'))

    expect(video).toBeInTheDocument()
    expect(movieSpecs).toBeInTheDocument()
  })

  it('should return back to home when home button is clicked', async () => {
    const allMovieSpecs = {
      movie: {
        id:694919,
        title:"Money Plane",
        poster_path:"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        backdrop_path:"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        release_date:"2020-09-29",
        overview:"A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
        genres:["Action"],
        budget:0,
        revenue:0,
        runtime: 82, 
        tagline: "",
        average_rating: 6.666666666666667
      }
    }
    
    const videoSpecs = {
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
    
    getMovieByID.mockResolvedValueOnce(allMovieSpecs)
    getMovieTrailerByID.mockResolvedValueOnce(videoSpecs)

    const firstMovieAltTxt = await waitFor(() => screen.getByAltText("Money Plane movie cover"))
    userEvent.click(firstMovieAltTxt);

    const homeBtn = await waitFor(() => screen.getByRole("button")) 
    userEvent.click(homeBtn)

    expect(history.location.pathname).toBe('/')
  })

  it('should no longer show the individual movie once the home button is clicked', async () => {
    const allMovieSpecs = {
      movie: {
        id:694919,
        title:"Money Plane",
        poster_path:"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        backdrop_path:"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        release_date:"2020-09-29",
        overview:"A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
        genres:["Action"],
        budget:0,
        revenue:0,
        runtime: 82, 
        tagline: "",
        average_rating: 6.666666666666667
      }
    }

    const videoSpecs = {
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

    getMovieByID.mockResolvedValueOnce(allMovieSpecs)
    getMovieTrailerByID.mockResolvedValueOnce(videoSpecs)

    const firstMovieAltTxt = await waitFor(() => screen.getByAltText("Money Plane movie cover"))
    userEvent.click(firstMovieAltTxt)

    const video = await waitFor(() => screen.getByTestId('330'))
    expect(video).toBeInTheDocument()
    
    const homeBtn = await waitFor(() => screen.getByRole("button")) 
    userEvent.click(homeBtn);

    const mulan = screen.getByAltText('Mulan movie cover')
    expect(mulan).toBeInTheDocument()
  })

  it('should be able to filter movies by title search (non case sensitive)', () => {
    const searchInput = screen.getByPlaceholderText('ex. Dead Pool')
    const submitBtn = screen.getByAltText('search image')

    const moneyPlane = screen.getByAltText('Money Plane movie cover')
    const mulan = screen.getByAltText('Mulan movie cover')
    expect(moneyPlane).toBeInTheDocument()
    expect(mulan).toBeInTheDocument()
    
    userEvent.type(searchInput, "moNey")
    userEvent.click(submitBtn)

    expect(moneyPlane).toBeInTheDocument()
    expect(mulan).not.toBeInTheDocument()
  })
})