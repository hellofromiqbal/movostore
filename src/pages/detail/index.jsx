import React, { useEffect, useState } from 'react';
import SectionLayout from '../../components/layouts/SectionLayout';
import { useParams } from 'react-router-dom';
import { generatePoster, getMovieDetails } from '../../scripts/data/themoviedb-source';
import SectionTitle from '../../components/elements/sectionTitle';

const DetailPage = () => {
  const {id} = useParams();

  const [movie, setMovie] = useState({});

  const currencyFormatter = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});

  const wordFormatter = (obj, objProp, arrData, objInArrProp, i) => {
    if (i === obj[objProp].length-1) {
      return `${arrData[objInArrProp]}.`;
    }
    return `${arrData[objInArrProp]}, `;
  };

  useEffect(() => {
    getMovieDetails(id, (data) => {
      console.log(data);
      setMovie(data);
    });
  }, []);

  return (
    <SectionLayout
      sectionId="detail"
      gradFrom={"from-black"}
      gradTo={"to-gray-950"}
      gradVia={"via-red-800"}
      padding={"px-4 pt-16 pb-4 md:px-8 lg:px-16"}
    >
      <SectionTitle section="detail"/>
      <div className='flex flex-col md:flex-row gap-2 md:gap-6 w-full md:w-6/6 lg:w-5/6 m-auto'>
        <div className='basis-1/2 lg:basis-2/5 bg-black p-1 md:p-2 h-max'>
          <img src={generatePoster(movie["poster_path"])} alt={movie.title} />
        </div>
        <div className='basis-1/2 lg:basis-3/5 text-white flex flex-col lg:gap-2 gap-1'>
          <h2 className='font-semibold text-lg md:text-xl lg:text-2xl'>{movie.title}</h2>
          {movie.tagline && <cite className='text-sm md:text-base'>{`"${movie.tagline}"`}</cite>}
          <p className='text-sm md:text-base'>Genres: {movie.genres?.map((genre, i) => wordFormatter(movie, "genres", genre, "name", i))}</p>
          <p className='text-sm md:text-base'>Languages: {movie["spoken_languages"]?.map((language, i) => wordFormatter(movie, "spoken_languages", language, "english_name", i))}</p>
          <p className='text-sm md:text-base'>Release Date: {movie["release_date"]}</p>
          <p className='text-sm md:text-base'>Rating: {movie["vote_average"]}</p>
          <p className='text-sm md:text-base'>Duration: {movie.runtime} minutes</p>
          <p className='text-sm md:text-base'>{movie.overview}</p>
          <p className='text-sm md:text-base'>Budget: {currencyFormatter.format(movie.budget)}</p>
          <p className='text-sm md:text-base'>Revenue: {currencyFormatter.format(movie.revenue)}</p>
          <p className='text-sm md:text-base'>Production Companies: {movie["production_companies"]?.map((company, i) => wordFormatter(movie, "production_companies", company, "name", i))}</p>
        </div>
      </div>
    </SectionLayout>
  )
};

export default DetailPage;