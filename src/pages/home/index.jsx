import React, { useEffect, useRef, useState } from 'react';

import { getNowPlayingMovies } from '../../scripts/data/themoviedb-source';
import CONFIG from '../../scripts/global/config';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies((data) => {
      setMovies(data)
    });
  }, []);

  return (
    <div className='bg-gradient-to-b from-red-700 to-black via-red-900 p-4 md:p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8'>
      {movies.map((movie) => (
        <div key={movie.id} className='bg-black p-1 md:p-2'>
          <div className='flex flex-col'>
            <img src={`${CONFIG.BASE_IMAGE_URL}${movie["poster_path"]}`} alt={movie.title} />
          </div>
        </div>
      ))}
    </div>
  )
};

export default HomePage;