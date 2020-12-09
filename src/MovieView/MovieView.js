import date from 'date-and-time';
import React, {Component} from 'react'
import './MovieView.scss'
import { getMovieByID, getMovieTrailerByID } from '../apiCalls.js'


class MovieView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            currentMovie: {},
            error: ""
        }
    }

    componentDidMount() {
        const movieDetails = getMovieByID(this.state.id)
        const movieTrailer = getMovieTrailerByID(this.state.id)
        Promise.all([movieDetails, movieTrailer])
          .then(data => {
            this.setState({
              currentMovie: {...data[0].movie, ...data[1]},
            })
          })
          .catch(error => this.setState({
            error: error,
          }))
    }

    render() {
        if (this.state.currentMovie.error) {
            return (
                <h1 className="loading-message">Ooops! this movie could not be found.</h1>
            )
        }
        if (!this.state.currentMovie.title) {
            return (
                <h1 className="loading-message">Loading...</h1>
            )
        }
        const {id, backdrop_path, title, average_rating, release_date, budget, genres, overview, revenue, runtime, tagline, videos} = this.state.currentMovie
        return (
            <article data-testid={id} className="movie-page">
                <h1>{title}</h1>
                {tagline && <h2>{tagline}</h2>}
                <img className="movie-backdrop" src={backdrop_path} alt={title + " movie poster"}/>
                <p>{overview}</p>
                <ul className="movie-specs">
                    <li><b>Rating:</b> {Math.round(average_rating * 10)}%</li>
                    <li><b>Genres:</b> {genres.join(", ")}</li>
                    <li><b>Release Date:</b> {date.transform(release_date, 'YYYY-MM-DD', 'MMM DD, YYYY')}</li>
                    <li><b>Runtime:</b> {runtime} minutes</li>
                    <li><b>Budget:</b> ${budget}</li>
                    <li><b>Revenue:</b> ${revenue}</li>
                </ul>
                    <iframe
                        src={`https://www.youtube.com/embed/${videos[0].key}`}
                        data-testid={videos[0].id}
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        className='movie-trailer'
                        alt={`${title} trailer`} 
                    />
            </article>
        )
    }
}

export default MovieView