import React from 'react';

import { AiFillStar as IconStar } from 'react-icons/ai';
import { generatePoster, getMovieDetails } from '../../../scripts/data/themoviedb-source';
import { useNavigate } from 'react-router-dom';

const MovieListNoSwipe = (props) => {
  const { movies } = props;

  const navigate = useNavigate();

  const onCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className='flex'>
      {movies.length === 0 ?
        <div className='text-white h-96 md:h-screen w-full flex justify-center items-center'>
          <h1 className='text-base md:text-lg'>You don't have any liked movies yet!</h1>
        </div>
        :
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-4 xl:gap-6'>
          {movies?.map((movie) => (
            <div
              key={movie.id}
              className='bg-black p-1 md:p-2 cursor-pointer'
              onClick={() => onCardClick(movie.id)}
            >
              <div className='flex flex-col overflow-hidden'>
                <img src={generatePoster(movie["poster_path"])} alt={movie.title} className='hover:scale-[1.1] transition duration-500'/>
              </div>
              <div className='md:hidden text-white p-1'>
                <div className='flex items-center gap-2'>
                  <div className='text-yellow-300'>
                    <IconStar/>
                  </div>
                  <h4 className='text-white opacity-50 text-sm md:text-base'>{movie["vote_average"]}</h4>
                </div>
                <h3 className='text-sm md:text-base'>{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  )
};

export default MovieListNoSwipe;