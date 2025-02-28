import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { MdAutoAwesome as Sparkles } from 'react-icons/md';
import './app.css';
import Footer from './components/footer';
import Skin from './components/services/skin';
import Header from './components/header';
import Transplant from './components/services/transplant';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider, Navigate, useNavigate, BrowserRouter } from "react-router-dom";
import Body from './components/body';
import { Link } from "react-router-dom";





function App() {
    
 

  return (


    <div className="min-h-screen bg-gray-50">
      
    <BrowserRouter>

    <Header />
      <Routes>
        <Route path="/home" element={<><Body /> <Footer /></>} />
        <Route path="/Transplant" element={<><Transplant /> <Footer /></>} />
        <Route path="/Skin" element={<><Skin /> <Footer /></>} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
    
      {/* Footer  <Footer />*/}
     
    </div>


  );
}

export default App;