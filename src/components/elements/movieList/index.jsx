import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { AiFillStar as IconStar } from 'react-icons/ai';
import { generatePoster, getMovieDetails } from '../../../scripts/data/themoviedb-source';
import { useNavigate } from 'react-router-dom';

const MovieList = (props) => {
  const { movies } = props;

  const navigate = (link) => {
    useNavigate(`/${link}`);
  };


  return (
    <div className='flex'>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        spaceBetween={12}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
        navigation
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        {movies?.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className='bg-black p-1 md:p-2 cursor-pointer'
            onClick={() => getMovieDetails(movie.id, (data) => console.log(data))}
          >
            <div className='flex flex-col'>
              <img src={generatePoster(movie["poster_path"])} alt={movie.title} />
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
};

export default MovieList;