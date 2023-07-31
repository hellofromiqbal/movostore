import React, { useEffect, useState } from 'react';
import { getMovieDetails } from '../../scripts/data/themoviedb-source';
import SectionLayout from '../../components/layouts/SectionLayout';
import SectionTitle from '../../components/elements/sectionTitle';
import MovieListNoSwipe from '../../components/elements/movieListNoSwipe';

const MovieCart = () => {
  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    let likedMovieIds = JSON.parse(localStorage.getItem("likedMovies"));

    likedMovieIds.map((movieId) => {
      getMovieDetails(movieId, (data) => setLikedMovies((prev) => [...prev, data]));
    })

  }, []);

  return (
    <SectionLayout
      sectionId="searchResults"
      gradFrom={"from-red-900"}
      gradTo={"to-black"}
      gradVia={"via-red-950"}
      padding={"px-4 pt-16 pb-4 md:px-8 lg:px-16"}
    >
      <SectionTitle section="likedMovies" displayShowAllLink={false}/>
      <MovieListNoSwipe movies={likedMovies}/>
    </SectionLayout>
  )
};

export default MovieCart;