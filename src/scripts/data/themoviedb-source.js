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

export { getNowPlayingMovies, getUpcomingMovies };