import { useSelector } from 'react-redux';
// import { GiDeathSkull } from 'react-icons/gi';

const Cards = () => {
  const { charactersDetails, isError, searchedName } = useSelector(
    (state) => state.characters
  );

  //Must fixed, this logic is not working
  if (isError) {
    return (
      <div className="no--results-container">
        <h1>No results for : "{searchedName}"</h1>
        <p>Try searching for something else </p>
        <h2>NO CHARACTER FOUND</h2>
      </div>
    );
  } else {
    return charactersDetails?.results?.map((character) => (
      <div className="character" key={character.id}>
        <div className="image--container">
          <img src={character.image} alt={character.name} />
        </div>
        {character.status === 'Alive' && (
          <p className="status" style={{ backgroundColor: 'green' }}>
            {character.status}
          </p>
        )}
        {character.status === 'unknown' && (
          <p className="status" style={{ backgroundColor: 'black' }}>
            {character.status}
          </p>
        )}
        {character.status === 'Dead' && (
          <p className="status" style={{ backgroundColor: 'red' }}>
            {character.status}
            {/* <GiDeathSkull /> */}
          </p>
        )}

        <div className="  character--details">
          <p className="gender">
            {character.gender} - <span>{character.species}</span>
          </p>
          <p className="name"> {character.name}</p>
          <label htmlFor="loc">Last known location:</label>
          <p className="location" id="loc">
            {character.location.name}
          </p>
          <label htmlFor="orig">First seen in:</label>
          <p className="origin"> {character.origin.name}</p>
        </div>
      </div>
    ));
  }
};

export default Cards;
