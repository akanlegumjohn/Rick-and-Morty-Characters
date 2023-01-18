// import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import { setSearchedName } from '../features/characters/characterSlice';

const Searchbar = () => {
  const dispatch = useDispatch();
  // const handleOnchange = (e) => {
  //   dispatch(setSearchedName(e.target.value));
  // };
  const debouncedSearch = _.debounce((searchValue) => {
    dispatch(setSearchedName(searchValue));
  }, 500);

  function handleOnchange(event) {
    debouncedSearch(event.target.value);
  }
  return (
    <form className="search">
      <input
        onChange={handleOnchange}
        type="text"
        placeholder="Search for characters..."
      />
    </form>
  );
};

export default Searchbar;
