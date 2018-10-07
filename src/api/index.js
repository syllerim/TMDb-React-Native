import axios from 'axios'
import { TMDB_API_KEY } from 'react-native-dotenv'

// TMDb Configuration
const BASE_URL = 'https://api.themoviedb.org/3'

export function configureAxios() {
    axios.defaults.baseURL = BASE_URL
}

export function fetchGenres() {
    const url = `/genre/movie/list?api_key=${TMDB_API_KEY}`
    return axios.get(url)
}

export function fetchMoviesForGenreId(genreId, page) {
    const url = `discover/movie?with_genres=${genreId}&page=${page}&api_key=${TMDB_API_KEY}`
    return axios.get(url)
}

export function postMovie(data) {
    //Here I should post the movie.
    const url = `/genre/movie/list?api_key=${TMDB_API_KEY}`
    return axios.get(url)
}