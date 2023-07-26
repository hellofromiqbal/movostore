import React, { useState } from 'react';

import Icon from '../../elements/icon';
import SearchBar from '../searchBar';
import Button from '../../elements/button';

import { RiMovie2Line as IconMovie } from 'react-icons/ri';
import { FiSearch as IconSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='bg-black flex items-center justify-between fixed top-0 left-0 right-0 z-10 shadow-md px-4 py-3 md:px-8 lg:px-16'>
      <div className='flex items-center gap-1 md:gap-2 cursor-pointer' onClick={() => navigate(`/`)}>
        <Icon fontsize="text-sm md:text-base lg:text-xl">
          <IconMovie/>
        </Icon>
        <h2 className='md:font-semibold text-white text-sm md:text-base lg:text-xl'>MOVOSTORE</h2>
      </div>
      <SearchBar/>
      <Button fontsize="md:hidden text-lg">
        <IconSearch/>
      </Button>
    </header>
  )
};

export default Header;