import React, { useEffect, useRef, useState } from 'react';

import { generatePoster, getNowPlayingMovies, getUpcomingMovies, searchMovie } from '../../scripts/data/themoviedb-source';

import { RiMovie2Line as IconMovie } from 'react-icons/ri';
import {
  MdPlayCircleOutline as IconNowPlayingMovies,
  MdOutlineUpdate as IconUpcomingMovies
} from 'react-icons/md';
import { AiFillStar as IconStar } from 'react-icons/ai';
import {
  BsTiktok as IconTiktok,
  BsInstagram as IconInstagram,
  BsTwitter as IconTwitter,
  BsYoutube as IconYoutube,
  BsFacebook as IconFacebook
} from 'react-icons/bs';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const onInput = (query) => {
    if(query !== '') {
      return searchMovie(query, (data) => {
        if (data.length < 1) {
          getNowPlayingMovies((data) => setMovies(data));
        } else {
          setMovies(data);
        };
      });
    };
    
    return getNowPlayingMovies((data) => setMovies(data));
  };

  useEffect(() => {
    getNowPlayingMovies((data) => {
      console.log(data);
      setMovies(data)
    });
  }, []);

  return (
    <>
      <div className='h-screen md:h-[50vh] lg:h-screen bg-[url("/images/movie2.webp")] bg-cover bg-center flex justify-center md:justify-normal items-center p-4 md:p-8 lg:p-16'>
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
      
      <div className='bg-gradient-to-b from-black to-gray-950 via-red-800 p-4 md:px-8 lg:px-16 flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <div className='text-white text-3xl'>
            <IconNowPlayingMovies/>
          </div>
          <h2 className='font-semibold text-white text-lg md:text-xl lg:text-2xl'>Now Playing</h2>
          <input type="text" onInput={(e) => onInput(e.target.value)}/>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8'>
          {movies.map((movie) => (
            <div key={movie.id} className='bg-black p-1 md:p-2'>
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
            </div>
          ))}
        </div>
      </div>

      <footer className='flex flex-col gap-10 bg-black py-10'>
        <ul className='flex gap-6 justify-center'>
          <li className='text-white text-xl'><a href="#"><IconTiktok/></a></li>
          <li className='text-white text-xl'><a href="#"><IconInstagram/></a></li>
          <li className='text-white text-xl'><a href="#"><IconTwitter/></a></li>
          <li className='text-white text-xl'><a href="#"><IconYoutube/></a></li>
          <li className='text-white text-xl'><a href="#"><IconFacebook/></a></li>
        </ul>
        <ul className='w-3/4 place-self-center text-white grid md:grid-cols-4 gap-1 place-items-center'>
          <li className='text-sm md:text-base'><a href="#">MovostoreApp</a></li>
          <li className='text-sm md:text-base'><a href="#">Help & FAQ</a></li>
          <li className='text-sm md:text-base'><a href="#">Site Index</a></li>
          <li className='text-sm md:text-base'><a href="#">Advertising</a></li>
          <li className='text-sm md:text-base'><a href="#">Job Vacancy</a></li>
          <li className='text-sm md:text-base'><a href="#">Privacy Policy</a></li>
          <li className='text-sm md:text-base'><a href="#">Box Office</a></li>
          <li className='text-sm md:text-base'><a href="#">Press Room</a></li>
        </ul>
        <small className='text-white place-self-center opacity-50'>&copy; 1990-2023 by Movostore.com, Inc.</small>
      </footer>
    </>
  )
};

export default HomePage;