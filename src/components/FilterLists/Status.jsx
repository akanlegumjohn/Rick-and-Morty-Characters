import { useSelector } from 'react-redux';

import FilterItem from '../FilterItem';

const Status = () => {
  const { filterData } = useSelector((state) => state.characters);
  const { alive, dead, unknownStatus } = useSelector((state) => state.status);
  let status = [
    { name: 'Dead', count: dead?.info?.count },
    { name: 'Unknown', count: unknownStatus?.info?.count },
    { name: 'Alive', count: alive?.info?.count },
  ];

  return (
    <>
      {status.map((item, index) => (
        <FilterItem
          key={index}
          item={item}
          name="status"
          filterWord={filterData?.status}
        />
      ))}
    </>
  );
};

export default Status;
