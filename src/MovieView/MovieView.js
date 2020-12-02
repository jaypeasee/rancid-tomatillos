import React, {Component} from 'react'
import './MovieView.scss'

class MovieView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        const {id, backdrop_path, title, average_rating, release_date} = this.props.currentMovie
        return (
            <article id={id}>
                <img src={backdrop_path} alt={title + " movie poster"}/>
                <title>{title}</title>
                <ul>
                    <li>Average Rating: {average_rating}</li>
                    <li>Release Date: {release_date}</li>
                </ul>
            </article>
        )
    }
}

export default MovieView