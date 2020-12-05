import date from 'date-and-time';

import React, {Component} from 'react'
import './MovieView.scss'

class MovieView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        const {id, backdrop_path, title, average_rating, release_date, budget, genres, overview, revenue, runtime, tagline, videos} = this.props.currentMovie
        return (
            <article id={id} className="movie-page">
                <img className="movie-backdrop" src={backdrop_path} alt={title + " movie poster"}/>
                <h1>{title}</h1>
                <h2>{tagline}</h2>
                <p>{overview}</p>
                <ul className="movie-specs">
                    <li><b>Average Rating:</b> {Math.round(average_rating * 10) / 10}</li>
                    <li><b>Genres:</b> {genres.join(", ")}</li>
                    <li><b>Release Date:</b> {release_date}</li>
                    <li><b>Runtime:</b> {runtime} minutes</li>
                    <li><b>Budget:</b> ${budget}</li>
                    <li><b>Revenue:</b> ${revenue}</li>
                </ul>
                    <iframe
                        src={`https://www.youtube.com/embed/${videos[0].key}`}
                        // frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        width='1000px'
                        height='550px'
                        className='movie-trailer'
                        alt={`${title} trailer`} 
                    />
            </article>
        )
    }
}

export default MovieView