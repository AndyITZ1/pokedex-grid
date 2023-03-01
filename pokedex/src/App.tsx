import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Frontpage from './components/Frontpage/Frontpage';
import Pokepage from './components/Pokepage/Pokepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage/>}/>
          <Route path="/:name" element={<Pokepage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
