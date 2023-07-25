import React from 'react';
import Button from '../../elements/button';
import { FiSearch as IconSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className='flex'>
      <input className='rounded-s-sm px-2 text-sm md:text-base' type="text" placeholder='Harry Potter' />
      <Button bgcolor="bg-white" textcolor="text-black" fontsize="md:text-xl lg:text-2xl" rounded="rounded-e-sm">
        <IconSearch/>
      </Button>
    </div>
  )
};

export default SearchBar;