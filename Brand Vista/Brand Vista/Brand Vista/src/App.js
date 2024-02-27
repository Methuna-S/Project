import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gs from './Components/GS/Gs';
import Home from './Components/Home/Home';
import Form from './Components/Login1/Login1';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Form/>}/>
        <Route path="/Gs" element={<Gs/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;