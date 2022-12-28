import { useState } from 'react';
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
    <>
      <input
        className="filter--input"
        type="radio"
        name={name}
        id={name + index}
        onChange={handleClick}
        value={item.name}
      />

      <label htmlFor={name + index} className="filter--label">
        {item.name}

        <span>{item.count}</span>
      </label>
    </>
  );
};

export default FilterItem;
