import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Location from './pages/Location';
import Episode from './pages/Episode';
import Quiz from './pages/Quiz';
import Character from './components/Character';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/episodes" element={<Episode />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/:characterId" element={<Character />} />
        <Route path="*" element={ <div className="no--results-container">
        <h1>No results for this selection</h1>
        <p>Try searching for something else </p>
        <h2>NO CHARACTER FOUND</h2>
      </div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
