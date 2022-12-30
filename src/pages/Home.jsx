import { useEffect, useState } from 'react';
import { AiOutlineFilter } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';

import Cards from '../components/Cards';
import Filter from '../components/Filter';
import FilterIcon from '../components/FilterIcon';
import Pagination from '../components/Pagination';
import Searchbar from '../components/Searchbar';
import {
  getCharacters,
  reset,
  setSearchedName,
} from '../features/characters/characterSlice';
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
import {
  getAlive,
  getDead,
  getUnknownStatus,
} from '../features/status/statusSlice';
import Header from '../components/Header';

const Home = () => {
  const [showFilter, setShowFilter] = useState(false);
  const dispatch = useDispatch();
  const {
    pageNumber,
    searchedName,
    status,
    isError,
    isSucces,
    message,
    filterdata,
  } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters({ pageNumber, searchedName, status, filterdata }));

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

    //Fetch status data
    dispatch(getAlive());
    dispatch(getDead());
    dispatch(getUnknownStatus());
    if (isError) {
      console.log(message);
    }

    return () => {
      dispatch(reset());
    };
  }, [
    isSucces,
    isError,
    message,
    pageNumber,
    dispatch,
    searchedName,
    filterdata,
    // reset,
  ]);

  return (
    <>
      {showFilter && <FilterIcon />}
      <Searchbar />
      <Header />
      <main className="main">
        {window.innerWidth < 1280 ? (
          <div
            className="filter--icon--container"
            onClick={() => {
              setShowFilter((prevState) => !prevState);
            }}
          >
            <span>Filter</span> <AiOutlineFilter />
          </div>
        ) : (
          <>
            <Filter />
          </>
        )}
        <section className="cards--container">
          <Cards />
        </section>
      </main>
      {!isError && <Pagination />}
    </>
  );
};

export default Home;
