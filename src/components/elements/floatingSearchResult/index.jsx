import React from 'react';
import { generatePoster } from '../../../scripts/data/themoviedb-source';

const FloatingSearchResult = (props) => {
  const { movies, handleClickSearchResult, handleClickShowAllResult } = props;

  return (
    <div>
      <div className='h-96 overflow-auto'>
        {movies.splice(0, 5).map((movie) => (
          <div key={movie.id} className='flex flex-row py-2 border-b-[1px] gap-2 md:gap-2 cursor-pointer' onClick={() => handleClickSearchResult(movie.id)}>
            <div className='basis-1/3 h-40 flex object-cover'>
              <img src={generatePoster(movie["poster_path"])} alt={movie.title}/>
            </div>
            <div className='basis-2/3 h-40 flex flex-col gap-1'>
              <h1 className='font-semibold text-sm md:text-base'>{movie.title}</h1>
              <p className='opacity-70 text-sm md:text-base'>{movie["release_date"]}</p>
              <p className='opacity-50 text-sm md:text-base overflow-auto'>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='my-2 text-center'>
        <a className="cursor-pointer text-sm md:text-base" onClick={() => handleClickShowAllResult()}>Show all results</a>
      </div>
    </div>
  )
};

export default FloatingSearchResult;