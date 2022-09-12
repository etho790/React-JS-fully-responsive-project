import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Navbar from './Components/Navbar';
import Homepage from './HomePage.js';
import  Card  from './Components/Card';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div >
        <Navbar/> 
        <Homepage/>        
        <Card/>  
       
      </div>
    </>


  );
}

export default App;
