import React from 'react';
import { generatePoster } from '../../../scripts/data/themoviedb-source';

const FloatingSearchResult = (props) => {
  const { movies, onCardClick, onSearchMovies } = props;

  return (
    <div>
      {movies.splice(0, 3).map((movie) => (
        <div key={movie.id} className='flex flex-row py-2 border-b-[1px] md:gap-2 cursor-pointer' onClick={() => onCardClick(movie.id)}>
          <div className='basis-1/3 h-40 flex object-cover'>
            <img src={generatePoster(movie["poster_path"])} alt={movie.title}/>
          </div>
          <div className='basis-2/3 h-40 overflow-auto flex flex-col gap-1'>
            <h1 className='font-semibold text-sm md:text-base'>{movie.title}</h1>
            <p className='opacity-70 text-sm md:text-base'>{movie["release_date"]}</p>
            <p className='opacity-50 text-sm md:text-base'>{movie.overview}</p>
          </div>
        </div>
      ))}
      <a className="py-2 text-center cursor-pointer" onClick={() => onSearchMovies()}>Show all results</a>
    </div>
  )
};

export default FloatingSearchResult;