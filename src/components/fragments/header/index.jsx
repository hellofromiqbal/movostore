import React, { useState } from 'react';
import SearchBar from '../searchBar';
import Button from '../../elements/button';
import Icon from '../../elements/icon';
import { FiSearch as IconSearch } from 'react-icons/fi';
import { AiOutlineClose as IconClose } from 'react-icons/ai';
import { RiMovie2Line as IconMovie } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchIconMobileClicked, setSearchIconMobileClicked] = useState(false);

  const handleSearchIconMobileClicked = () => {
    setSearchIconMobileClicked((prev) => !prev);
  };

  const navigate = useNavigate();

  return (
    <header className='bg-black h-14 fixed top-0 left-0 right-0 z-10 flex items-center px-4 md:px-8 lg:px-16'>
      <div className='w-full md:basis-1/2'>
        {searchIconMobileClicked ?
          <div className='w-full md:w-96'>
            <SearchBar/>
          </div>
          :
          <div className='text-white flex items-center gap-1 md:gap-2 cursor-pointer' onClick={() => navigate("/")}>
            <Icon fontsize="text-2xl">
              <IconMovie/>
            </Icon>
            <h2 className='font-semibold text-sm md:text-base'>MOVOSTORE</h2>
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