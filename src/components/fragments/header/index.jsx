import React from 'react';

import { RiMovie2Line as IconMovie } from 'react-icons/ri';
import { MdSearch as IconSearch } from 'react-icons/md';
import Icon from '../../elements/icon';

const Header = () => {
  return (
    <header className='bg-black flex items-center justify-between fixed top-0 left-0 right-0 z-10 px-4 py-3 md:px-8 lg:px-16'>
      <h2 className='font-bold text-white text-lg md:text-xl lg:text-2xl'>MOVOSTORE</h2>
      <Icon fontsize="text-3xl">
        <IconSearch/>
      </Icon>
    </header>
  )
};

export default Header;