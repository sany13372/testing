import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './components/pages/Home/Home';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import CoursePage from './components/pages/CoursePage/CoursePage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<CoursePage/>}/>
    </Routes>
  );
}

export default App;
