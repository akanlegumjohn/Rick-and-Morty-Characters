import { useSelector } from 'react-redux';
import FilterItem from '../FilterItem';
useSelector;
const Gender = () => {
  const { males, females, unknown, genderLess } = useSelector(
    (state) => state.gender
  );
  const { filterData } = useSelector((state) => state.characters);

  let gender = [
    { name: 'Male', count: males?.info?.count },
    { name: 'Unknown', count: unknown?.info?.count },
    { name: 'Female', count: females?.info?.count },
    { name: 'Genderless', count: genderLess?.info?.count },
  ];
  return (
    <>
      {gender.map((item, index) => (
        <FilterItem
          key={index}
          item={item}
          name="gender"
          filterWord={filterData?.gender}
        />
      ))}
    </>
  );
};

export default Gender;
