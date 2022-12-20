import { useSelector } from 'react-redux';

const Cards = () => {
  const { charactersDetails } = useSelector((state) => state.characters);

  console.log(charactersDetails.results);
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
            </p>
          )}

          <img src={character.image} alt={character.name} />
        </div>
        <p className="gender">{character.gender}</p>
        <p className="name"> {character.name}</p>
        <p className="location"> {character.location.name}</p>
      </div>
    ));
  }
};

export default Cards;
