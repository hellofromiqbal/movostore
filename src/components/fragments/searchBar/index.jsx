import React, { useEffect, useRef, useState } from 'react';
import FloatingSearchResult from '../../elements/floatingSearchResult';
import { useNavigate } from 'react-router-dom';
import { searchMovie } from '../../../scripts/data/themoviedb-source';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const [queryResult, setQueryResult] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    searchMovie(query, (data) => setQueryResult(data));
  }, [query]);

  const inputRef = useRef();

  const handleInput = () => {
    setQuery(inputRef.current.value);
  };

  const cleanSearch = () => {
    inputRef.current.value = '';
    setQuery('');
  };

  const handleClickEnter = (e, query) => {
    if (e.keyCode !== 13) return;
    if (query === '') return;
    cleanSearch();
    navigate(`/search/${query}`);
  };

  const handleClickSearchResult = (id) => {
    cleanSearch();
    navigate(`/detail/${id}`);
  }

  const handleClickShowAllResult = () => {
    cleanSearch();
    navigate(`/search/${query}`);
  };

  return (
    <div className='relative'>
      <input ref={inputRef} type="search" id='search' className='w-full text-sm md:text-base rounded-sm px-2 py-1' onInput={(e) => handleInput(e)} onKeyUp={(e) => handleClickEnter(e, query)}/>
      {queryResult.length > 0 &&
        <div className='absolute w-full bg-black text-white top-[2.5rem] rounded-sm px-2 flex flex-col'>
          <FloatingSearchResult
            movies={queryResult}
            handleClickSearchResult={handleClickSearchResult}
            handleClickShowAllResult={handleClickShowAllResult}  
          />
        </div>
      }
    </div>
  )
};

export default SearchBar;