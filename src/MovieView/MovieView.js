import React, {Component} from 'react'
import './MovieView.scss'

class MovieView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {id, backdrop_path, title, average_rating, release_date} = this.props.currentMovie
        return (
            <article id={id} className="movie-page">
                <img className="movie-backdrop" src={backdrop_path} alt={title + " movie poster"}/>
                <h1>{title}</h1>
                <ul className="movie-specs">
                    <li><b>Average Rating:</b> {Math.round(average_rating * 10) / 10}</li>
                    <li><b>Release Date:</b> {release_date}</li>
                </ul>
            </article>
        )
    }
}

export default MovieView