import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovie } from '../../scripts/data/themoviedb-source';
import SectionLayout from '../../components/layouts/SectionLayout';
import SectionTitle from '../../components/elements/sectionTitle';
import MovieListNoSwipe from '../../components/elements/movieListNoSwipe';

const SearchPage = () => {
  const {query} = useParams();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovie(query, (data) => setMovies(data));
  }, [movies]);

  return (
    <SectionLayout
      sectionId="searchResults"
      gradFrom={"from-gray-950"}
      gradTo={"to-black"}
      gradVia={"via-red-800"}
      padding={"px-4 pt-16 pb-4 md:px-8 lg:px-16"}
    >
      <SectionTitle section="searchResults" displayShowAllLink={false}/>
      <MovieListNoSwipe movies={movies}/>
    </SectionLayout>
  )
};

export default SearchPage;