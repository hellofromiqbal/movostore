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

const searchMovie = (query, callback) => {
  axios.get(API_ENDPOINT.SEARCH(query))
    .then(res => callback(res.data.results))
    .catch(err => console.log(err));
};

const generatePoster = (url) => {
  if (url) {
    return API_ENDPOINT.MOVIE_POSTER(url);
  }
  return `/images/movie1.webp`
};

export { getNowPlayingMovies, getUpcomingMovies, searchMovie, generatePoster };