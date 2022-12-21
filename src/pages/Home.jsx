import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cards from '../components/Cards';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';
import Searchbar from '../components/Searchbar';
import { getCharacters, reset } from '../features/characters/characterSlice';
import {
  getAllMales,
  getAllFemales,
  getAllGenderless,
  getAllUnknown,
} from '../features/gender/genderSlice';

reset;

const Home = () => {
  const dispatch = useDispatch();
  const { pageNumber, searchedName, isError, isSucces, message } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    dispatch(getCharacters({ pageNumber, searchedName }));

    //Fetch genderData
    dispatch(getAllMales());
    dispatch(getAllFemales());
    dispatch(getAllUnknown());
    dispatch(getAllGenderless());
    if (isError) {
      console.log(message);
    }
    return () => dispatch(reset());
  }, [isSucces, isError, message, pageNumber, dispatch, searchedName]);
  return (
    <>
      <Searchbar />
      <main className="main">
        <Filter />
        <section className="cards--container">
          <Cards />
        </section>
      </main>
      <Pagination />
    </>
  );
};

export default Home;
