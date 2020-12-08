import date from 'date-and-time';
import React, {Component} from 'react'
import './MovieView.scss'

class MovieView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {id, backdrop_path, title, average_rating, release_date, budget, genres, overview, revenue, runtime, tagline, videos} = this.props.currentMovie
        return (
            <article id={id} className="movie-page">
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