import { Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Work from './Pages/Work';
import Socklab from './Pages/Socklab';
import Align from './Pages/Align';
import Gyst from './Pages/Gyst';
import Raccoons from './Pages/Raccoons';
import About from './Pages/About';


function App() {




  return (
    <div>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/socklab" element={<Socklab />} />
        <Route path="/work/align" element={<Align />} />
        <Route path="/work/gyst" element={<Gyst />} />
        <Route path="/work/raccoons" element={<Raccoons />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
