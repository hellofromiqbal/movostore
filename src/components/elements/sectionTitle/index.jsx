import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const onGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

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
        <Link to={content[section].link} className='md:font-semibold text-white text-sm'>Show All</Link>
      }
      {displayGoBackLink &&
        <a href="#" className='md:font-semibold text-white text-sm' onClick={(e) => onGoBack(e)}>Go Back</a>
      }
    </div>
  )
};

export default SectionTitle;