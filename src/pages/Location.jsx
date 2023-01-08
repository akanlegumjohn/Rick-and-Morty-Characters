import { useDispatch, useSelector } from 'react-redux';

const Location = () => {
  const dispatch = useDispatch();
  const { locationDetails } = useSelector((state) => state.location);
  console.log('From the location page', locationDetails);

  return (
    <div>
      <h1>THIS IS THE LOCATION PAGE</h1>
    </div>
  );
};

export default Location;
