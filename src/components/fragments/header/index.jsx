import React, { useState } from 'react';
import SearchBar from '../searchBar';
import Button from '../../elements/button';
import { FiSearch as IconSearch } from 'react-icons/fi';
import { AiOutlineClose as IconClose } from 'react-icons/ai';

const Header = () => {
  const [searchIconMobileClicked, setSearchIconMobileClicked] = useState(false);

  const handleSearchIconMobileClicked = () => {
    setSearchIconMobileClicked((prev) => !prev);
  };

  return (
    <header className='bg-black h-14 fixed top-0 left-0 right-0 z-10 flex items-center px-4'>
      <div className='w-full md:basis-1/2'>
        {searchIconMobileClicked ?
          <div className='w-full md:w-96'>
            <SearchBar/>
          </div>
          :
          <div className='text-white'>
            <h1>Movostore</h1>
          </div>
        }
      </div>
      <div className='md:basis-1/2 flex justify-end'>
        <div className='hidden md:block w-full md:w-96'>
          <SearchBar/>
        </div>
        <div className='md:hidden'>
          <Button fontsize="text-2xl" onClick={handleSearchIconMobileClicked}>
            {searchIconMobileClicked ? <IconClose/> : <IconSearch/>}
          </Button>
        </div>
      </div>
    </header>
  )
};

export default Header;