import App from './App';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getAllMovies, getMovieByID, getMovieTrailerByID } from '../apiCalls'
jest.mock('../apiCalls')
import userEvent from '@testing-library/user-event'
import NavBar from '../NavBar/NavBar.js'


describe('App', () => {
  let mockMovies;
  beforeEach(() => {
    mockMovies = 
      {movies: [{id:694919, poster_path:"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",backdrop_path :"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",title:"Money Plane" ,average_rating:6.666666666666667,release_date:"2020-09-29"}
      ,{id:337401, poster_path:"https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",title:"Mulan",average_rating:4.909090909090909,release_date:"2020-09-04"}]};
    getAllMovies.mockResolvedValueOnce(mockMovies)
   })

  it('should load movies', async () => {
    render(<App />);
    const firstMovieAltTxt = await waitFor(() => screen.getByAltText("Money Plane movie cover"))
    const secMovieAltTxt = await waitFor(() => screen.getByAltText("Mulan movie cover"))

    expect(firstMovieAltTxt).toBeInTheDocument()
    expect(secMovieAltTxt).toBeInTheDocument()
  })

  it('should show chosen movie specs', async () => {
    render(<App />)
    const allMovieSpecs = {movie: {id:694919,title:"Money Plane",poster_path:"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",backdrop_path:"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",release_date:"2020-09-29",overview:"hey hey hey hey" ,genres:["Action"],budget:0,revenue:0,runtime: 82, tagline: "",average_rating: 6.666666666666667}}
    const videoSpecs = {videos:[{id:330,movie_id:694919,key:"aETz_dRDEys",site:"YouTube",type:"Trailer"}]}
    
    getMovieByID.mockResolvedValueOnce(allMovieSpecs);
    getMovieTrailerByID.mockResolvedValueOnce(videoSpecs);

    const firstMovieAltTxt = await waitFor(() => screen.getByAltText("Money Plane movie cover"))
    
    userEvent.click(firstMovieAltTxt);

    const firstMovieText = await waitFor(() => screen.getByText("hey hey hey hey"))
    const video = await waitFor(() => screen.getByTestId('330')) 
    screen.debug();
    expect(video).toBeInTheDocument()
    expect(firstMovieText).toBeInTheDocument()
  })

  it('should show return to home button when viewing single movie specs', async () => {
    render(<App />)

    const allMovieSpecs = {movie: {id:694919,title:"Money Plane",poster_path:"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",backdrop_path:"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",release_date:"2020-09-29",overview:"A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",genres:["Action"],budget:0,revenue:0,runtime: 82, tagline: "",average_rating: 6.666666666666667}}
    const videoSpecs = {videos:[{id:330,movie_id:694919,key:"aETz_dRDEys",site:"YouTube",type:"Trailer"}]}
    
    getMovieByID.mockResolvedValueOnce(allMovieSpecs);
    getMovieTrailerByID.mockResolvedValueOnce(videoSpecs);

    const firstMovieAltTxt = await waitFor(() => screen.getByAltText("Money Plane movie cover"))
    
    userEvent.click(firstMovieAltTxt);

    let homeBtn = await waitFor(() => screen.getByRole("button")) 

    expect(homeBtn).toBeInTheDocument()
  })

  it('should call a function when home button is clicked', async () => {
    render(<App />)

    const allMovieSpecs = {movie: {id:694919,title:"Money Plane",poster_path:"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",backdrop_path:"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",release_date:"2020-09-29",overview:"A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",genres:["Action"],budget:0,revenue:0,runtime: 82, tagline: "",average_rating: 6.666666666666667}}
    const videoSpecs = {videos:[{id:330,movie_id:694919,key:"aETz_dRDEys",site:"YouTube",type:"Trailer"}]}
    
    getMovieByID.mockResolvedValueOnce(allMovieSpecs);
    getMovieTrailerByID.mockResolvedValueOnce(videoSpecs);

    const firstMovieAltTxt = await waitFor(() => screen.getByAltText("Money Plane movie cover"))
    
    userEvent.click(firstMovieAltTxt);

    let homeBtn = await waitFor(() => screen.getByRole("button")) 

    userEvent.click(homeBtn)

    const notChosenMovie = screen.getByAltText('Mulan movie cover')

    expect(notChosenMovie).toBeInTheDocument();
    expect(homeBtn).not.toBeInTheDocument();
  })
});