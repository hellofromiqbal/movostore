import React, { useEffect, useState } from 'react';
import SectionLayout from '../../components/layouts/SectionLayout';
import SectionTitle from '../../components/elements/sectionTitle';
import MovieListNoSwipe from '../../components/elements/movieListNoSwipe';
import { getNowPlayingMovies, getTopRatedMovies, getUpcomingMovies } from '../../scripts/data/themoviedb-source';
import { useParams } from 'react-router-dom';

const MovieListsPage = () => {
  const {movieLists} = useParams();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movieLists === 'now-playing') {
      getNowPlayingMovies((data) => setMovies(data));
    } else if (movieLists === 'top-rated') {
      getTopRatedMovies((data) => setMovies(data));
    } else {
      getUpcomingMovies((data) => setMovies(data));
    };
  }, [movieLists]);

  return (
    <SectionLayout
      sectionId="nowPlayingMovies"
      gradFrom={"from-red-900"}
      gradTo={"to-black"}
      gradVia={"via-red-950"}
      padding={"px-4 pt-16 pb-4 md:px-8 lg:px-16"}
    >
      <SectionTitle section="nowPlayingMovies" displayShowAllLink={false}/>
      <MovieListNoSwipe movies={movies}/>
    </SectionLayout>
  )
};

export default MovieListsPage;