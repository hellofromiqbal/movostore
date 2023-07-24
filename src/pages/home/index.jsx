import React, { useEffect, useState } from 'react';

import { generatePoster, getMovieDetails, getNowPlayingMovies, getUpcomingMovies, searchMovie } from '../../scripts/data/themoviedb-source';

import { RiMovie2Line as IconMovie } from 'react-icons/ri';

import {
  BsTiktok as IconTiktok,
  BsInstagram as IconInstagram,
  BsTwitter as IconTwitter,
  BsYoutube as IconYoutube,
  BsFacebook as IconFacebook
} from 'react-icons/bs';
import MovieList from '../../components/elements/movieList';
import SectionTitle from '../../components/elements/sectionTitle';
import SectionLayout from '../../components/layouts/SectionLayout';


const HomePage = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    getNowPlayingMovies((data) => setNowPlaying(data));
    getUpcomingMovies((data) => setUpcoming(data));
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
      
      <SectionLayout
        sectionId="now-playing"
        gradFrom={"from-black"}
        gradTo={"to-gray-950"}
        gradVia={"via-red-800"}
      >
        <SectionTitle section="now-playing"/>
        <MovieList movies={nowPlaying}/>
      </SectionLayout>

      <SectionLayout
        sectionId="upcoming"
        gradFrom={"from-gray-950"}
        gradTo={"to-black"}
        gradVia={"via-red-800"}
      >
        <SectionTitle section="upcoming"/>
        <MovieList movies={upcoming}/>
      </SectionLayout>
    </>
  )
};

export default HomePage;