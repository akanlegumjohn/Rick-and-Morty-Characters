import { useSelector, useDispatch } from 'react-redux';

import { handleFilter } from '../features/characters/characterSlice';

const FilterItem = ({ name, item, index }) => {
  const { filterdata } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(
      handleFilter({
        ...filterdata,
        [event.target.name]: event.target.value,
      })
    );
  };
  return (
    <div className="filter--item--container">
      <div className="filter--input--container ">
        <input
          type="radio"
          name={name}
          id={name + index}
          onChange={handleClick}
          value={item.name}
        />
      </div>
      <div className="filter--label--container">
        <label htmlFor={name + index}>
          {item.name}

          <span>{item.count}</span>
        </label>
      </div>
    </div>
  );
};

export default FilterItem;
