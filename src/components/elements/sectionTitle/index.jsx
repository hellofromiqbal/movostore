import React from 'react';

import {
  MdPlayCircleOutline as IconNowPlayingMovies,
  MdOutlineUpdate as IconUpcomingMovies
} from 'react-icons/md';

const SectionTitle = (props) => {
  const { section } = props;

  const content = {
    "now-playing": {
      title: "Now Playing",
      icon: IconNowPlayingMovies()
    },
    "upcoming": {
      title: "Upcoming",
      icon: IconUpcomingMovies()
    }
  };

  return (
    <div className='flex items-center gap-2'>
      <div className='text-white text-3xl'>
        {content[section].icon}
      </div>
      <h2 className='font-semibold text-white text-lg md:text-xl lg:text-2xl'>{content[section].title}</h2>
      {/* <input type="text" onInput={(e) => onInput(e.target.value)}/> */}
    </div>
  )
};

export default SectionTitle;