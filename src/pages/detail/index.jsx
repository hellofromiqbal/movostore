import React, { useEffect, useState } from 'react';
import SectionLayout from '../../components/layouts/SectionLayout';
import { useParams } from 'react-router-dom';
import { generatePoster, getMovieDetails } from '../../scripts/data/themoviedb-source';
import SectionTitle from '../../components/elements/sectionTitle';
import MovieDetails from '../../components/fragments/movieDetails';
import Button from '../../components/elements/button';
import { IoCartOutline as IconCart, IoCartSharp as IconCartFill } from 'react-icons/io5';

const DetailPage = () => {
  const {id} = useParams();

  const [movie, setMovie] = useState({});

  const [isAlreadyInCart, setIsAlreadyInCart] = useState();

  const handleAddToCart = (movieId) => {
    let currMovieCart = JSON.parse(localStorage.getItem("movieCart"));

    localStorage.setItem("movieCart", JSON.stringify([...currMovieCart, movieId]));

    setIsAlreadyInCart((prev) => !prev);
  };

  const handleRemoveFromCart = (movieId) => {
    let currMovieCart = JSON.parse(localStorage.getItem("movieCart"));

    localStorage.setItem("movieCart", JSON.stringify(currMovieCart.filter((item) => item !== movieId)));

    setIsAlreadyInCart((prev) => !prev);
  };

  useEffect(() => {
    let currMovieCart = JSON.parse(localStorage.getItem("movieCart"));

    let alreadyInCart = currMovieCart.find((item) => item == id);

    alreadyInCart ? setIsAlreadyInCart(true) : setIsAlreadyInCart(false);

    getMovieDetails(id, (data) => setMovie(data));
  }, [id]);

  return (
    <SectionLayout
      sectionId="detail"
      gradFrom={"from-red-900"}
      gradTo={"to-black"}
      gradVia={"via-red-950"}
      padding={"px-4 pt-16 pb-4 md:px-8 lg:px-16"}
    >
      <SectionTitle section="movieDetails" displayShowAllLink={false}/>
      <div className='flex flex-col md:flex-row gap-2 md:gap-6 w-full md:w-6/6 lg:w-5/6 xl:w-4/6 m-auto'>
        <div className='basis-1/2 lg:basis-3/8 bg-black p-1 md:p-2 h-max'>
          <img src={generatePoster(movie["poster_path"])} alt={movie.title} />
        </div>
        <MovieDetails movie={movie}/>
      </div>
      <div className='md:gap-6 w-full md:w-6/6 lg:w-5/6 xl:w-4/6 m-auto'>
        <Button
          fontsize="text-2xl md:text-3xl lg:text-4xl"
          onClick={isAlreadyInCart ? () => handleRemoveFromCart(movie.id) : () => handleAddToCart(movie.id)}
        >
          {isAlreadyInCart ? <IconCartFill/> : <IconCart/>}
        </Button>
      </div>
    </SectionLayout>
  )
};

export default DetailPage;