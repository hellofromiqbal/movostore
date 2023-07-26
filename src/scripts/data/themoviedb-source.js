import axios from "axios";
import API_ENDPOINT from "../global/api-endpoints";

const getNowPlayingMovies = (callback) => {
  axios.get(API_ENDPOINT.NOW_PLAYING)
    .then(res => callback(res.data.results))
    .catch(err => console.log(err));
};

const getUpcomingMovies = (callback) => {
  axios.get(API_ENDPOINT.UPCOMING)
    .then(res => callback(res.data.results))
    .catch(err => console.log(err));
};

const getTopRatedMovies = (callback) => {
  axios.get(API_ENDPOINT.TOP_RATED)
    .then(res => callback(res.data.results))
    .catch(err => console.log(err));
};

const searchMovie = (query, callback) => {
  axios.get(API_ENDPOINT.SEARCH(query))
    .then(res => callback(res.data.results))
    .catch(err => console.log(err));
};

const generatePoster = (url) => {
  return url ? API_ENDPOINT.MOVIE_POSTER(url) : `/images/movie1.webp`;
};

const getMovieDetails = (id, callback) => {
  axios.get(API_ENDPOINT.DETAIL(id))
    .then(res => callback(res.data))
    .catch(err => console.log(err));
};

export { getNowPlayingMovies, getUpcomingMovies, getTopRatedMovies, searchMovie, generatePoster, getMovieDetails };