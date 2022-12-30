import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Location from './pages/Location';
import Episode from './pages/Episode';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/episodes" element={<Episode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
