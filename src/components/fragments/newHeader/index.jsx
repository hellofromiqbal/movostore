import React, { useEffect, useRef, useState } from 'react';
import FloatingSearchResult from '../../elements/floatingSearchResult';
import { searchMovie } from '../../../scripts/data/themoviedb-source';
import { useNavigate } from 'react-router-dom';

const Header = () => {
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
    <header className='bg-black h-14 fixed top-0 left-0 right-0 z-10 flex items-center px-4'>
      <div className='basis-1/2 text-white'>
        <h1>Movostore</h1>
      </div>
      <div className='basis-1/2 flex justify-end'>
        <div className='relative flex w-full md:w-96'>
          <input ref={inputRef} type="search" id='search' className='w-full text-sm md:text-base rounded-sm px-2 py-1' onInput={(e) => handleInput(e)} onKeyUp={(e) => handleClickEnter(e, query)} autoFocus/>
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
      </div>
    </header>
  )
};

export default Header;