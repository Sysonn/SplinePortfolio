import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/home.js';
import FrndPage from './pages/frndship.js';
import ReactThreeFiber from './pages/frndship.jsx';
import ThreeScene from './pages/three.js';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/frndship" element={<FrndPage />} />
        <Route path="/projects/react3" element={<ReactThreeFiber />} />
        <Route path="/projects/three" element={<ThreeScene />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;