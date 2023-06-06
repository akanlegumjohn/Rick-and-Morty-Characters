import { useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
// import { GiDeathSkull } from 'react-icons/gi';

const Cards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { charactersDetails, isError, searchedName } = useSelector(
    (state) => state.characters
  );
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => {
      return clearTimeout(delay);
    };
  }, []);
  const navigate = useNavigate();
  // const name = 'Ama'
  // name.
  if (isError) {
    return (
      <div className="no--results-container">
        <h1>No results for this selection</h1>
        <p>Try searching for something else </p>
        <h2>NO CHARACTER FOUND</h2>
      </div>
    );
  } else {
    return charactersDetails?.results?.map((character) =>
      isLoading ? (
        <SkeletonTheme
          baseColor="#b3ddff"
          highlightColor="#98a2ab"
          height={"40px"}
        >
          <div className="skeleton--container">
            <p>
              <Skeleton count={1} height={"400px"} />
            </p>
            <p>
              <Skeleton count={5} height={"70px"} />
            </p>
          </div>
        </SkeletonTheme>
      ) : (
        <Tilt>
          <div
          className="character"
          key={character.id}
          onClick={() => navigate(`/${character.id}`)}
        >
          <div className="image--container">
            <img src={character.image} alt={character.name} />

            {character.status === "Alive" && (
              <p className="status" style={{ backgroundColor: "green" }}>
                {character.status}
              </p>
            )}
            {character.status === "unknown" && (
              <p className="status" style={{ backgroundColor: "black" }}>
                {character.status}
              </p>
            )}
            {character.status === "Dead" && (
              <p className="status" style={{ backgroundColor: "red" }}>
                {character.status}
                {/* <GiDeathSkull /> */}
              </p>
            )}
          </div>
          <div className="  character--details">
            <p className="gender">
              {character.gender} - <span>{character.species}</span>
            </p>
            <p className="name"> {character.name}</p>
            <label htmlFor="loc">Last known location:</label>
            {character.location.name.startsWith("Earth") ? (
              <p className="location" id="loc">
                Earth
              </p>
            ) : (
              <p className="location" id="loc">
                {character.location.name}
              </p>
            )}
            <label htmlFor="orig">First seen in:</label>
            {character.origin.name.startsWith("Earth") ? (
              <p className="origin">Earth</p>
            ) : (
              <p className="origin">{character.origin.name}</p>
            )}
          </div>
        </div>
        </Tilt>
      )
    );
  }
};

export default Cards;
