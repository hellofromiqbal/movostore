import React, { useState } from 'react';

import { RiMovie2Line as IconMovie } from 'react-icons/ri';
import { MdSearch as IconSearch } from 'react-icons/md';
import Icon from '../../elements/icon';

const Header = () => {
  const [searchBar, setSearchBar] = useState(false);

  const onClick = () => {
    setSearchBar((prev) => !prev);
  };

  const onInput = (query) => {
    console.log(query);
  };

  return (
    <header className='bg-black flex items-center justify-between fixed top-0 left-0 right-0 z-10 px-4 py-3 md:px-8 lg:px-16'>
      <div className='flex items-center gap-2'>
        <Icon fontsize="text-lg md:text-xl lg:text-2xl" isClickable={true} onClick={onClick}>
          <IconMovie/>
        </Icon>
        <h2 className='font-bold text-white text-lg md:text-xl lg:text-2xl'>MOVOSTORE</h2>
      </div>
      <div className='flex gap-2'>
        {searchBar && <input type='text' onInput={(e) => onInput(e.target.value)}/>}
        <Icon fontsize="text-3xl" isClickable={true} onClick={onClick}>
          <IconSearch/>
        </Icon>
      </div>
    </header>
  )
};

export default Header;