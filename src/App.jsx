import './App.css';
import Home_ from './components/home/Hometwo.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Network from './components/network/Network.jsx';
import Location from './components/network/Location.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home_ />} />
        <Route path='/network' element={<Network />} />
        <Route path='/location' element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
