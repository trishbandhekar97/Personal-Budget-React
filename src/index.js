import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {BrowserRouter, createBrowserRouter, Routes, RouterProvider, Route} from 'react-router-dom';
import Hero from './pages/hero/Hero';
import Login from './pages/login/Login';
import Menu from './pages/menu/Menu';
import About from './pages/about/AboutPage';
import Home from './pages/home/Home';
import Footer from './pages/footer/Footer';
import Contact from './pages/contact/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <BrowserRouter>
  <Menu></Menu>
  <Hero></Hero>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/login" element={<Login />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <Routes></Routes>
  </BrowserRouter>
  <Footer></Footer> 
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
