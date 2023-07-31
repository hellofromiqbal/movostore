import React, { useEffect, useState } from 'react';
import SectionLayout from '../../components/layouts/SectionLayout';
import { useParams } from 'react-router-dom';
import { generatePoster, getMovieDetails } from '../../scripts/data/themoviedb-source';
import SectionTitle from '../../components/elements/sectionTitle';
import MovieDetails from '../../components/fragments/movieDetails';
import Button from '../../components/elements/button';
import { AiOutlineHeart as IconHeart, AiFillHeart as IconHeartFill } from 'react-icons/ai';

const DetailPage = () => {
  const {id} = useParams();

  const [movie, setMovie] = useState([]);

  const [isAlreadyLiked, setIsAlreadyLiked] = useState();

  const handleLikeMovie = (movieId) => {
    let currLikedMovies = JSON.parse(localStorage.getItem("likedMovies"));

    localStorage.setItem("likedMovies", JSON.stringify([...currLikedMovies, movieId]));

    setIsAlreadyLiked((prev) => !prev);
  };

  const handleDislikeMovie = (movieId) => {
    let currLikedMovies = JSON.parse(localStorage.getItem("likedMovies"));

    localStorage.setItem("likedMovies", JSON.stringify(currLikedMovies.filter((item) => item !== movieId)));

    setIsAlreadyLiked((prev) => !prev);
  };

  useEffect(() => {
    let currLikedMovies = JSON.parse(localStorage.getItem("likedMovies"));

    let alreadyLiked = currLikedMovies.find((item) => item == id);

    alreadyLiked ? setIsAlreadyLiked(true) : setIsAlreadyLiked(false);

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
      <div className='md:gap-6 w-full md:w-6/6 lg:w-5/6 xl:w-4/6 m-auto text-center'>
        <Button
          fontsize="text-xl md:text-2xl"
          bgcolor="bg-red-900"
          rounded="rounded-md"
          padding="py-2 ps-2 pe-3"
          onClick={isAlreadyLiked ? () => handleDislikeMovie(movie.id) : () => handleLikeMovie(movie.id)}
        >
          <div className='flex items-center gap-1'>
            {isAlreadyLiked ? <IconHeartFill/> : <IconHeart/>}
            {isAlreadyLiked ? <p className='text-lg md:text-xl'>{"Unlike Movie"}</p> : <p className='text-lg md:text-xl'>{"Like Movie"}</p>}
          </div>
        </Button>
      </div>
    </SectionLayout>
  )
};

export default DetailPage;