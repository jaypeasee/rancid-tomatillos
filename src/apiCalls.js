const getAllMovies = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
        .then(response => response.json())
}

const getMovieByID = (movieID) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
        .then(response => response.json())
}

// const getMovieByID = async (movieID) => {
//     const movieDetails = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
//         return await movieDetails.json();
//     // .then(response => response.json())
// }

const getMovieTrailerByID = (movieID) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`)
        .then(response => response.json())
}

// const getMovieTrailerByID = async (movieID) => {
//     const MovieVideos = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`)
//         return await MovieVideos.json();
//         // .then(response => response.json())
// }

export {getAllMovies, getMovieByID, getMovieTrailerByID}