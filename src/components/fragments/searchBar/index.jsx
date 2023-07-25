import React, { useState } from 'react';
import Button from '../../elements/button';
import { FiSearch as IconSearch } from 'react-icons/fi';
import FloatingSearchResult from '../../elements/floatingSearchResult';
import { searchMovie } from '../../../scripts/data/themoviedb-source';

const SearchBar = () => {
  const [movies, setMovies] = useState([]);

  const onInput = (query) => {
    searchMovie(query, (data) => {
      console.log(data);
      setMovies(data);
    });
  };

  return (
    <div className='relative hidden md:flex'>
      <input
        className='md:w-72 lg:w-80 rounded-s-sm px-2 text-sm md:text-base'
        type="text"
        placeholder='Harry Potter'
        onInput={(e) => onInput(e.target.value)}
      />
      <Button bgcolor="bg-white" textcolor="text-black" fontsize="md:text-xl lg:text-2xl" rounded="rounded-e-sm">
        <IconSearch/>
      </Button>
      <FloatingSearchResult movies={movies}/>
    </div>
  )
};

export default SearchBar;