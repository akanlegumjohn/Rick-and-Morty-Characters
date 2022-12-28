import { useSelector } from 'react-redux';
import FilterItem from '../FilterItem';

const Species = () => {
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
  let species = [
    { name: 'Alien', count: alien?.info?.count },
    { name: 'Human', count: human?.info?.count },
    { name: 'Humanoid', count: humanoid?.info?.count },
    { name: 'Animal', count: animal?.info?.count },
    { name: 'Robot', count: robot?.info?.count },
    { name: 'Mytholog', count: mytholog?.info?.count },
    { name: 'Cronenberg', count: cronenberg?.info?.count },
    { name: 'Disease', count: disease?.info?.count },
    { name: 'Unknown', count: unknownSpecie?.info?.count },
    { name: 'Poopybutthole', count: poopybutthole?.info?.count },
  ];
  const { filterData } = useSelector((state) => state.characters);

  return (
    <>
      {species.map((item, index) => (
        <FilterItem
          key={index}
          name="species"
          item={item}
          filterWord={filterData?.species}
        />
      ))}
    </>
  );
};

export default Species;
