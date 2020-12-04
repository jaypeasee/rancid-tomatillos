const getAllMovies = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
        .then(response => response.json())
}

const getMovieByID = (id) => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919')
        .then(response => response.json())
}

export {getAllMovies, getMovieByID}