import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Layout />
          <Routes>
              {/* <Route path='/' element={<Home />}></Route> */}
              <Route path='/about' element={<About />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
