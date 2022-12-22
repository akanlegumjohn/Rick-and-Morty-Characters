import { useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchedName } from '../features/characters/characterSlice';

const Searchbar = () => {
  const dispatch = useDispatch();

  return (
    <form className="search">
      <input
        onChange={(e) => dispatch(setSearchedName(e.target.value))}
        type="text"
        placeholder="Search for characters..."
      />
      <button className=" search--btn" onClick={(e) => e.preventDefault()}>
        <BsSearch />
        <span>Search</span>
      </button>
    </form>
  );
};

export default Searchbar;
