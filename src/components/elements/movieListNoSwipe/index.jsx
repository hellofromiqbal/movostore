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
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-3 md:gap-8'>
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
    </div>
  )
};

export default MovieListNoSwipe;