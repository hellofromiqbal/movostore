import React, { useEffect, useState } from 'react';

import { getNowPlayingMovies, getUpcomingMovies, getTopRatedMovies } from '../../scripts/data/themoviedb-source';

import { RiMovie2Line as IconMovie } from 'react-icons/ri';

import MovieList from '../../components/elements/movieList';
import SectionTitle from '../../components/elements/sectionTitle';
import SectionLayout from '../../components/layouts/SectionLayout';
import Icon from '../../components/elements/icon';


const HomePage = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies((data) => setNowPlayingMovies(data));
    getUpcomingMovies((data) => setUpcomingMovies(data));
    getTopRatedMovies((data) => setTopRatedMovies(data));
  }, []);

  return (
    <>
      <div className='h-screen md:h-[50vh] lg:h-screen bg-[url("/images/movie2.webp")] bg-cover bg-center flex justify-center md:justify-normal items-center p-4 md:p-8 lg:p-16'>
        <div className='flex gap-2'>
          <Icon fontsize="text-6xl md:text-7xl lg:text-[6.3rem]">
            <IconMovie/>
          </Icon>
          <div className='text-white'>
            <h1 className='font-extrabold text-4xl md:text-5xl lg:text-7xl'>MOVOSTORE</h1>
            <p className='text-base md:text-lg lg:text-xl'>Everyone's movie store!</p>
          </div>
        </div>
      </div>
      
      <SectionLayout
        sectionId="nowPlayingMovies"
        gradFrom={"from-black"}
        gradTo={"to-red-700"}
        gradVia={"via-gray-950"}
      >
        <SectionTitle section="nowPlayingMovies"/>
        <MovieList movies={nowPlayingMovies}/>
      </SectionLayout>

      <SectionLayout
        sectionId="topRatedMovies"
        gradFrom={"from-red-700"}
        gradTo={"to-red-700"}
        gradVia={"via-red-700"}
      >
        <SectionTitle section="topRatedMovies"/>
        <MovieList movies={topRatedMovies}/>
      </SectionLayout>

      <SectionLayout
        sectionId="upcomingMovies"
        gradFrom={"from-red-700"}
        gradTo={"to-black"}
        gradVia={"via-gray-950"}
      >
        <SectionTitle section="upcomingMovies"/>
        <MovieList movies={upcomingMovies}/>
      </SectionLayout>
    </>
  )
};

export default HomePage;