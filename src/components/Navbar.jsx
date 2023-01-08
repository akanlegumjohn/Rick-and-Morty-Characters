import { NavLink } from 'react-router-dom';
import { FaUser, FaMapMarkerAlt, FaTv, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={isOpen ? '' : 'hidden'}>
      <button>
        {isOpen ? (
          <FaTimes onClick={toggleNav} className="fa--times" />
        ) : (
          <FaBars onClick={toggleNav} />
        )}
      </button>
      {isOpen && (
        <>
          <ul className={isOpen ? 'open' : ''}>
            <li>
              <NavLink exact="true" to="/" activeclassname="active">
                <FaUser /> <span>Characters</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/locations" activeclassname="active">
                <FaMapMarkerAlt />
                <span> Location</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/episodes" activeclassname="active">
                <FaTv />
                <span> Episodes</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/quiz" activeclassname="active">
                <FaTv />
                <span> Quiz</span>
              </NavLink>
            </li>
          </ul>
          <div className="typing">Rick and Morty Characters</div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
