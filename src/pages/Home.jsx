import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '../components/Cards';
import Filter from '../components/Filter';
import { getCharacters, reset } from '../features/characters/characterSlice';
reset;

const Home = () => {
  const dispatch = useDispatch();
  const { pageNumber, isError, isSucces, message } = useSelector(
    (state) => state.characters
  );
  useEffect(() => {
    dispatch(getCharacters(pageNumber));
    if (isError) {
      console.log(message);
    }
    return () => dispatch(reset());
  }, [isSucces, isError, message, pageNumber, dispatch]);
  return (
    <main className="main">
      <Filter />
      <section className="cards--container">
        <Cards />
      </section>
    </main>
  );
};

export default Home;
