import React from 'react';

import {
  MdPlayCircleFilled as IconNowPlayingMovies,
  MdStars as IconTopRatedMovies,
  MdOutlineAccessTimeFilled as IconUpcomingMovies,
  MdSearch as IconSearch
} from 'react-icons/md';
import { HiOutlineInformationCircle as IconMovieDetails } from 'react-icons/hi';
import Icon from '../icon';

const SectionTitle = (props) => {
  const { section } = props;

  const content = {
    "nowPlayingMovies": {
      title: "Now Playing Movies",
      icon: IconNowPlayingMovies()
    },
    "topRatedMovies": {
      title: "Top Rated Movies",
      icon: IconTopRatedMovies()
    },
    "upcomingMovies": {
      title: "Upcoming Movies",
      icon: IconUpcomingMovies()
    },
    "searchResults": {
      title: "Search Result",
      icon: IconSearch()
    },
    "movieDetails": {
      title: "Movie Details",
      icon: IconMovieDetails()
    },
  };

  return (
    <div className='flex items-center gap-1 md:gap-2'>
      <Icon fontsize={"text-lg md:text-xl lg:text-2xl"}>
        {content[section].icon}
      </Icon>
      <h2 className='font-semibold text-white text-base md:text-lg lg:text-xl'>{content[section].title}</h2>
    </div>
  )
};

export default SectionTitle;