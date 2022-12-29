import { useDispatch } from 'react-redux';

import { resetFilters } from '../features/characters/characterSlice';
import Gender from './FilterLists/Gender';
import Species from './FilterLists/Species';
import Status from './FilterLists/Status';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <section className="filter--section">
      <div onClick={() => dispatch(resetFilters())} className="reset--filter">
        Reset Filter
      </div>

      <div className="filter--list">
        <h2>STATUS</h2>
        <Status />
      </div>
      <div className="filter--list">
        <h2>GENDER</h2>
        <Gender />
      </div>

      <div className="filter--list">
        <h2>SPECIES</h2>
        <Species />
      </div>
    </section>
  );
};

export default Filter;
