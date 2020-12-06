import App from './App';
import { render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import { getAllMovies, getMovieByID, getMovieTrailerByID } from '../apiCalls'
jest.mock('../apiCalls')
import userEvent from '@testing-library/user-event'


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
//render the app - 
//fire an event on click - 
//to whatever function is passed  - 
//screen for mulan -
//fire event on click on that - 
//then screen again with another wait waitfor - 
//on that movie but screen for the video and 
//create new var with same id but with all movie specs screen for it
//once done screening
//check that its in the doc 
  it('should show chosen movie specs', async () => {
    render(<App />)
    const allMovieSpecs = {movie: {id:694919,title:"Money Plane",poster_path:"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",backdrop_path:"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",release_date:"2020-09-29",overview:"A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",genres:["Action"],budget:0,revenue:0,runtime: 82, tagline: "",average_rating: 6.666666666666667}}
    const videoSpecs = {videos:[{id:330,movie_id:694919,key:"aETz_dRDEys",site:"YouTube",type:"Trailer"}]}
    
    getMovieByID.mockResolvedValueOnce(allMovieSpecs);
    getMovieTrailerByID.mockResolvedValueOnce(videoSpecs);

    const firstMovieAltTxt = await waitFor(() => screen.getByAltText("Money Plane movie cover"))
    
    userEvent.click(firstMovieAltTxt);

    let firstMovieAltText = await waitFor(() => screen.getByText("Money Plane"))
    let video = await waitFor(() => screen.getByTestId(330)) 

    expect(firstMovieAltText).toBeInTheDocument()
    expect(video).toBeInTheDocument()
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
});