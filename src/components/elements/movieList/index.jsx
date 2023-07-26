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

  const navigate = useNavigate();

  const onCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className='flex'>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        slidesPerView={2}
        spaceBetween={12}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 12,
          },
          1536: {
            slidesPerView: 6,
            spaceBetween: 12
          }
        }}
      >
        {movies?.map((movie) => (
          <SwiperSlide
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
};

export default MovieList;