import Gender from './FilterLists/Gender';
import Species from './FilterLists/Species';
import Status from './FilterLists/Status';

const Filter = () => {
  return (
    <section className="filter--section">
      <div className="reset--filter">Reset Filter</div>

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
