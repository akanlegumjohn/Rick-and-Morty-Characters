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
          <FaTimes
            onClick={toggleNav}
            style={{
              margin: '70px 0px 0px 900px',
            }}
          />
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
          </ul>
          <div className="typing">Rick and Morty Characters</div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
