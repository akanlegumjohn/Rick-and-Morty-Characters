import headerImage from '../assets/breaking-bad-rick-and-morty.jpg';
import Searchbar from './Searchbar';
const Header = () => {
  return (
    <header>
      <img src={headerImage} alt="breaking-bad-rick-and-morty" />
    </header>
  );
};

export default Header;
