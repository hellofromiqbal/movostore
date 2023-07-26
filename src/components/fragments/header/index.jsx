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
      <div className='flex items-center gap-2 cursor-pointer' onClick={() => navigate(`/`)}>
        <Icon fontsize="text-lg md:text-xl lg:text-2xl">
          <IconMovie/>
        </Icon>
        <h2 className='font-semibold text-white text-sm md:text-xl lg:text-2xl'>MOVOSTORE</h2>
      </div>
      <SearchBar/>
      <Button fontsize="md:hidden text-lg md:text-xl lg:text-2xl">
        <IconSearch/>
      </Button>
    </header>
  )
};

export default Header;