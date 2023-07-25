import React, { useState } from 'react';
import Button from '../../elements/button';
import { FiSearch as IconSearch } from 'react-icons/fi';
import FloatingSearchResult from '../../elements/floatingSearchResult';
import { searchMovie } from '../../../scripts/data/themoviedb-source';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [movies, setMovies] = useState([]);

  const [keyword, setKeyword] = useState('');

  const navigate = useNavigate();

  const onInput = (query) => {
    setKeyword(query);
    searchMovie(query, (data) => setMovies(data));
  };

  const onSearchMovies = (query) => {
    navigate(`/search/${query}`);
    setMovies([]);
  };

  const onPressEnter = (e, callback) => {
    if (e.code === 'Enter') {
      const query = e.target.value;
      callback(query);
      e.target.value = '';
    };
    return;
  };

  return (
    <div className='relative hidden md:flex'>
      <input
        className='md:w-72 lg:w-80 rounded-s-sm px-2 text-sm md:text-base'
        type="text"
        placeholder='Harry Potter'
        onInput={(e) => onInput(e.target.value)}
        onKeyDown={(e) => onPressEnter(e, onSearchMovies)}
        
      />
      <Button bgcolor="bg-white" textcolor="text-black" fontsize="md:text-xl lg:text-2xl" rounded="rounded-e-sm">
        <IconSearch onClick={() => onSearchMovies(keyword)}/>
      </Button>
      {movies.length > 0 && 
        <FloatingSearchResult movies={movies}/>
      }
    </div>
  )
};

export default SearchBar;