import React from 'react';
import videoBg from '../../../assets/jumbovid.mp4';

const VideBackground = () => {
  return (
    <video src={videoBg} className='w-full h-full object-cover' autoPlay loop muted/>
  )
};

export default VideBackground;