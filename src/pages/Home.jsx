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
import {
  getCronenberg,
  getAlien,
  getAnimal,
  getDisease,
  getHuman,
  getHumanoid,
  getMytholog,
  getPoopybutthole,
  getRobot,
  getUnknown,
} from '../features/species/speciesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { pageNumber, searchedName, isError, isSucces, message } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    dispatch(getCharacters({ pageNumber, searchedName }));

    //Fetch gender data
    dispatch(getAllMales());
    dispatch(getAllFemales());
    dispatch(getAllUnknown());
    dispatch(getAllGenderless());

    //Fetch species data
    dispatch(getAlien());
    dispatch(getAnimal());
    dispatch(getDisease());
    dispatch(getUnknown());
    dispatch(getCronenberg());
    dispatch(getMytholog());
    dispatch(getRobot());
    dispatch(getHuman());
    dispatch(getHumanoid());
    dispatch(getPoopybutthole());
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
