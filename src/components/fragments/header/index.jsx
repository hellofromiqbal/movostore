import React, { useState } from 'react';

import { RiMovie2Line as IconMovie } from 'react-icons/ri';
import { BsCartFill as IconCartFill } from 'react-icons/bs';
import Icon from '../../elements/icon';
import SearchBar from '../searchBar';

const Header = () => {
  return (
    <header className='bg-black flex items-center justify-between fixed top-0 left-0 right-0 z-10 shadow-md px-4 py-3 md:px-8 lg:px-16'>
      <div className='flex items-center gap-2'>
        <Icon fontsize="text-lg md:text-xl lg:text-2xl">
          <IconMovie/>
        </Icon>
        <h2 className='font-semibold text-white text-lg md:text-xl lg:text-2xl'>MOVOSTORE</h2>
      </div>
      <SearchBar/>
    </header>
  )
};

export default Header;