import React from 'react';
import { Link } from 'react-router-dom';

import {
  MdPlayCircleFilled as IconNowPlayingMovies,
  MdStars as IconTopRatedMovies,
  MdOutlineAccessTimeFilled as IconUpcomingMovies,
  MdSearch as IconSearch
} from 'react-icons/md';
import { HiOutlineInformationCircle as IconMovieDetails } from 'react-icons/hi';
import Icon from '../icon';

const SectionTitle = (props) => {
  const { section, displayShowAllLink = true, displayGoBackLink = true } = props;

  const content = {
    "nowPlayingMovies": {
      title: "Now Playing Movies",
      icon: IconNowPlayingMovies(),
      link: "/now-playing"
    },
    "topRatedMovies": {
      title: "Top Rated Movies",
      icon: IconTopRatedMovies(),
      link: "/top-rated"
    },
    "upcomingMovies": {
      title: "Upcoming Movies",
      icon: IconUpcomingMovies(),
      link: "/upcoming"
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
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-1 md:gap-2'>
        <Icon fontsize={"text-lg md:text-xl lg:text-2xl"}>
          {content[section].icon}
        </Icon>
        <h2 className='font-semibold text-white text-base md:text-lg lg:text-xl'>{content[section].title}</h2>
      </div>
      {displayShowAllLink &&
        <Link to={content[section].link} className='font-semibold text-white text-sm'>Show All</Link>
      }
      {displayGoBackLink &&
        <Link to={"/"} className='font-semibold text-white text-sm'>Go Back</Link>
      }
    </div>
  )
};

export default SectionTitle;