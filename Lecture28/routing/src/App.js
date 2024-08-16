import './App.css';
import Home from './components/Home';
import Dog from './components/Dog';
import Cat from './components/Cat';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  const [page, setPage] = useState("home")
  return (
    <div className="App">
      <nav>
        <ul>
          <li onClick={() => setPage("home")}><Link to="/home">Home</Link></li>
          <li onClick={() => setPage("cat")}><Link to="/cat">Cat</Link></li>
          <li onClick={() => setPage("dog")}><Link to="/dog">Dog</Link></li>
        </ul>
      </nav>
      {/* Conditional Renderinf */}

      {/* {page == "home" && <Home />}
      {page == "cat" && <Cat />}
      {page == "dog" && <Dog />} */}

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/cat' element={<Cat />} />
        <Route path='/dog' element={<Dog />} />

      </Routes>
    </div>
  );
}

export default App;
