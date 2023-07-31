import React, { useEffect, useState } from 'react';
import { getMovieDetails } from '../../scripts/data/themoviedb-source';
import SectionLayout from '../../components/layouts/SectionLayout';
import SectionTitle from '../../components/elements/sectionTitle';
import MovieListNoSwipe from '../../components/elements/movieListNoSwipe';

const MovieCart = () => {
  const [cart, setCart] = useState([]);

  const [moviesInCart, setMoviesInCart] = useState([]);

  useEffect(() => {
    let movieIdsInCart = JSON.parse(localStorage.getItem("movieCart"));
    setCart(movieIdsInCart);

    {movieIdsInCart.map((movieId) => {
      getMovieDetails(movieId, (data) => setMoviesInCart((prev) => [...prev, data]));
    })}

  }, []);

  return (
    <SectionLayout
      sectionId="searchResults"
      gradFrom={"from-red-900"}
      gradTo={"to-black"}
      gradVia={"via-red-950"}
      padding={"px-4 pt-16 pb-4 md:px-8 lg:px-16"}
    >
      <SectionTitle section="searchResults" displayShowAllLink={false}/>
      <MovieListNoSwipe movies={moviesInCart}/>
    </SectionLayout>
  )
};

export default MovieCart;