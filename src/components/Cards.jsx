import { useSelector } from 'react-redux';
// import { GiDeathSkull } from 'react-icons/gi';

const Cards = () => {
  const { charactersDetails } = useSelector((state) => state.characters);

  //Must fixed, this logic is not working
  if (charactersDetails === undefined) {
    return <div>NO results found</div>;
  } else {
    return charactersDetails?.results?.map((character) => (
      <div className="character" key={character.id}>
        <div className="image--container">
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

          <img src={character.image} alt={character.name} />
        </div>

        <div>
          <p className="gender">
            {character.gender} - {character.species}
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
