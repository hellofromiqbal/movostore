import React from 'react';

import {
  MdPlayCircleOutline as IconNowPlayingMovies,
  MdOutlineUpdate as IconUpcomingMovies,
  MdSearch as IconSearch
} from 'react-icons/md';
import Icon from '../icon';

const SectionTitle = (props) => {
  const { section } = props;

  const content = {
    "now-playing": {
      title: "Now Playing Movies",
      icon: IconNowPlayingMovies()
    },
    "upcoming": {
      title: "Upcoming Movies",
      icon: IconUpcomingMovies()
    },
    "search": {
      title: "Search Result",
      icon: IconSearch()
    },
    "detail": {
      title: "Movie Details",
      icon: IconSearch()
    },
  };

  return (
    <div className='flex items-center gap-2'>
      <Icon fontsize={"text-3xl"}>
        {content[section].icon}
      </Icon>
      <h2 className='font-semibold text-white text-lg md:text-xl lg:text-2xl'>{content[section].title}</h2>
    </div>
  )
};

export default SectionTitle;