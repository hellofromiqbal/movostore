import React from 'react';
import DetailInfo from '../../elements/detailInfo';

const MovieDetails = (props) => {
  const { movie } = props;

  return (
    <div className='basis-1/2 lg:basis-5/8 text-white flex flex-col lg:gap-2 gap-1'>
      <h2 className='font-bold text-lg md:text-xl lg:text-2xl'>{movie.title}</h2>
      {movie.tagline && <cite className='text-sm md:text-base'>{`"${movie.tagline}"`}</cite>}
      <DetailInfo movie={movie} info="genres"/>
      <DetailInfo movie={movie} info="spoken_languages"/>
      <DetailInfo movie={movie} info="release_date"/>
      <DetailInfo movie={movie} info="vote_average"/>
      <DetailInfo movie={movie} info="runtime"/>
      <DetailInfo movie={movie} info="budget"/>
      <DetailInfo movie={movie} info="revenue"/>
      <DetailInfo movie={movie} info="production_companies" flexrow={false}/>
      <DetailInfo movie={movie} info="overview" flexrow={false}/>
    </div>
  )
};

export default MovieDetails;