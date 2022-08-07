import { Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Work from './Pages/Work';

function App() {




  return (
    <div>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>

    </div>
  );
}

export default App;
