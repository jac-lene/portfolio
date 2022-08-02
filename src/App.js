import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css' 


import NavBar from './Components/NavBar';
import Home from './Pages/Home';

function App() {




  return (
    <div>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
