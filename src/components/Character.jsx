import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const Character = () => {
  const { charactersDetails } = useSelector((state) => state.characters);

  const { characterId } = useParams();
  const character = charactersDetails?.results.find(
    (char) => char.id === Number(characterId)
  );
  console.log(character);
  let createdDate = new Date(character.created);
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return (
    <>
      <section className="single--character--container">
        <div className="img--container">
          <img src={character.image} alt={character.name} />
        </div>
        <p>
          The name of this character in rick and morty animation is
          <span className="character--name"> {character.name}. </span>
          {character.gender === 'Male' ? 'He ' : 'She '}
          <span>
            is
            {' ' + character.species}, {' ' + character.gender + ' '}
          </span>
          and currently
          {character.status === 'Alive' && (
            <span style={{ color: 'green', fontWeight: '700' }}>
              {' ' + character.status}.
            </span>
          )}
          {character.status === 'unknown' && (
            <span style={{ color: 'black', fontWeight: '700' }}>
              {' ' + character.status}.
            </span>
          )}
          {character.status === 'Dead' && (
            <span style={{ color: 'red', fontWeight: '700' }}>
              {character.status}.
            </span>
          )}
          {character.gender === 'Male' ? ' He' : ' She'} is from
          {character.origin.name === 'unknown' ? (
            <span> an unknown origin </span>
          ) : (
            <span>{' ' + character.origin.name} </span>
          )}
          and is currently located at the{' '}
          <span className="char--location">{character.location.name}.</span>
          <span className="char--name">{character.name}</span> was created on
          <span className="date">
            {' ' + createdDate.toLocaleString('en-US', options)}.
          </span>
          <div className="back--link--container">
            <Link to="/" className="back--to--char--link">
              <span>Back To Characters</span>
            </Link>
          </div>
        </p>
      </section>
    </>
  );
};

export default Character;
