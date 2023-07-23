import React, { useEffect, useRef, useState } from 'react';

import { getNowPlayingMovies } from '../../scripts/data/themoviedb-source';
import CONFIG from '../../scripts/global/config';

import { RiMovie2Line as IconMovie } from 'react-icons/ri';
import {
  MdPlayCircleOutline as IconNowPlayingMovies,
  MdOutlineUpdate as IconUpcomingMovies
} from 'react-icons/md';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies((data) => {
      setMovies(data)
    });
  }, []);

  return (
    <>
      <div className='h-[60vh] md:h-[50vh] lg:h-screen bg-[url("/images/movie2.webp")] bg-cover bg-center flex justify-center md:justify-normal items-center p-4 md:p-8'>
        <div className='flex gap-2'>
          <div className='text-white text-6xl md:text-7xl lg:text-[6.3rem]'>
            <IconMovie/>
          </div>
          <div className='text-white'>
            <h1 className='font-extrabold text-4xl md:text-5xl lg:text-7xl'>MOVOSTORE</h1>
            <p className='text-base md:text-lg lg:text-xl'>Everyone's movie store</p>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-b from-red-600 to-black via-red-800 p-4 md:p-8 flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <div className='text-white text-3xl'>
            <IconNowPlayingMovies/>
          </div>
          <h2 className='font-semibold text-white text-lg md:text-xl lg:text-2xl'>Now Playing</h2>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8'>
          {movies.map((movie) => (
            <div key={movie.id} className='bg-black p-1 md:p-2'>
              <div className='flex flex-col'>
                <img src={`${CONFIG.BASE_IMAGE_URL}${movie["poster_path"]}`} alt={movie.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
};

export default HomePage;