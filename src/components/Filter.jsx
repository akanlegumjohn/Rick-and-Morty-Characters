import { useSelector } from 'react-redux';

const Filter = () => {
  const { males, females, unknown, genderLess } = useSelector(
    (state) => state.gender
  );
  const {
    alien,
    human,
    humanoid,
    animal,
    robot,
    mytholog,
    cronenberg,
    poopybutthole,
    disease,
    unknownSpecie,
  } = useSelector((state) => state.species);

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
        <div>
          <p>
            Robot <span>{robot?.info?.count}</span>
          </p>
          <p>
            Alien <span>{alien?.info?.count}</span>
          </p>
          <p>
            animal <span>{animal?.info?.count}</span>
          </p>
          <p>
            Disease <span>{disease?.info?.count}</span>
          </p>
          <p>
            Human <span>{human?.info?.count}</span>
          </p>
          <p>
            Mytholog <span>{mytholog?.info?.count}</span>
          </p>
          <p>
            Unknown <span>{unknown?.info?.count}</span>
          </p>
          <p>
            Humanoid <span>{humanoid?.info?.count}</span>
          </p>
          <p>
            Cronenberg <span>{cronenberg?.info?.count}</span>
          </p>
          <p>
            Poopybutthole <span>{poopybutthole?.info?.count}</span>
          </p>
        </div>
      </div>
      <div>
        <h2>LOCATION</h2>
      </div>
    </section>
  );
};

export default Filter;
