import React, { useEffect, useState } from 'react';

import { getNowPlayingMovies, getUpcomingMovies, getTopRatedMovies } from '../../scripts/data/themoviedb-source';

import { RiMovie2Line as IconMovie } from 'react-icons/ri';

import MovieList from '../../components/elements/movieList';
import SectionTitle from '../../components/elements/sectionTitle';
import SectionLayout from '../../components/layouts/SectionLayout';
import Icon from '../../components/elements/icon';
import VideBackground from '../../components/elements/videoBackground';


const HomePage = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies((data) => setNowPlayingMovies(data));
    getUpcomingMovies((data) => setUpcomingMovies(data));
    getTopRatedMovies((data) => setTopRatedMovies(data));

    if (!localStorage.getItem("likedMovies")) {
      localStorage.setItem("likedMovies", JSON.stringify([]));
    }
    
  }, []);

  return (
    <>
      <div className='relative w-full h-screen md:h-[50vh] lg:h-screen'>
        <VideBackground/>
        <div className='absolute top-0 left-0  right-0 bottom-0 flex justify-center items-center gap-2'>
          <Icon fontsize="text-6xl md:text-7xl lg:text-[6.3rem]">
            <IconMovie/>
          </Icon>
          <div className='text-white'>
            <h1 className='font-extrabold text-3xl md:text-4xl lg:text-6xl'>Movosite</h1>
            <p className='text-sm md:text-base lg:text-lg'>Everyone's movie online site!</p>
          </div>
        </div>
      </div>
      
      <SectionLayout
        sectionId="nowPlayingMovies"
        gradFrom={"from-black"}
        gradTo={"to-red-950"}
        gradVia={"via-black"}
      >
        <SectionTitle section="nowPlayingMovies" displayGoBackLink={false}/>
        <MovieList movies={nowPlayingMovies}/>
      </SectionLayout>

      <SectionLayout
        sectionId="topRatedMovies"
        gradFrom={"from-red-950"}
        gradTo={"to-red-950"}
        gradVia={"via-red-900"}
      >
        <SectionTitle section="topRatedMovies" displayGoBackLink={false}/>
        <MovieList movies={topRatedMovies}/>
      </SectionLayout>

      <SectionLayout
        sectionId="upcomingMovies"
        gradFrom={"from-red-950"}
        gradTo={"to-black"}
        gradVia={"via-black"}
      >
        <SectionTitle section="upcomingMovies" displayGoBackLink={false}/>
        <MovieList movies={upcomingMovies}/>
      </SectionLayout>
    </>
  )
};

export default HomePage;