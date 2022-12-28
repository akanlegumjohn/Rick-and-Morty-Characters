import Gender from './FilterLists/Gender';
import Species from './FilterLists/Species';
import Status from './FilterLists/Status';

const Filter = () => {
  return (
    <section className="filter--section">
      <div>
        <h2>STATUS</h2>
        <Status />
      </div>
      <div>
        <h2>GENDER</h2>
        <Gender />
      </div>

      <div>
        <h2>SPECIES</h2>
        <Species />
      </div>
    </section>
  );
};

export default Filter;
