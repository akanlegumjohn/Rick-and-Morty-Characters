import { useSelector } from 'react-redux';

const Filter = () => {
  const { males, females, unknown, genderLess } = useSelector(
    (state) => state.gender
  );
  console.log('females', females);
  console.log('males', males);
  console.log('unknown', unknown);
  console.log('genderLess', genderLess);
  return (
    <section className="filter--section">
      <div>
        <h2>Gender</h2>
        <div>
          <p>
            Male <span>{males?.info?.count}</span>
          </p>
          <p>
            Female <span>{females?.info?.count}</span>
          </p>
          <p>
            Unknown <span>{unknown?.info?.count}</span>
          </p>
          <p>
            GenderLess <span>{genderLess?.info?.count}</span>
          </p>
        </div>
      </div>
      <div>
        <h2>SPECIES</h2>
      </div>
      <div>
        <h2>LOCATION</h2>
      </div>
    </section>
  );
};

export default Filter;
