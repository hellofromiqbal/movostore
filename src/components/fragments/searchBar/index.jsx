import React from 'react';
import Button from '../../elements/button';
import { FiSearch as IconSearch } from 'react-icons/fi';
import FloatingSearchResult from '../../elements/floatingSearchResult';

const SearchBar = () => {
  return (
    <div className='relative hidden md:flex'>
      <input className='md:w-72 lg:w-96 rounded-s-sm px-2 text-sm md:text-base' type="text" placeholder='Harry Potter' />
      <Button bgcolor="bg-white" textcolor="text-black" fontsize="md:text-xl lg:text-2xl" rounded="rounded-e-sm">
        <IconSearch/>
      </Button>
      <FloatingSearchResult/>
    </div>
  )
};

export default SearchBar;