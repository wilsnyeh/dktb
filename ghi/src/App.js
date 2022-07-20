
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import LoginForm from './users/login';
=======
import login from './users/login';
import SignUpForm from './users/signup';
import React from 'react';
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './mainpage/Header';
import Footer from './mainpage/Footer';
import ParksList from './parks/ParksList';

>>>>>>> 64531da7cc4293f27fc99573bd04f3c53fe57030

function App(props) {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<MainPage/>} /> */}
          
          <Route path="/login" element={<LoginForm/>} />

=======
      {/* <Nav /> */}
      <Header />
      <ParksList fetchUrl={"http://localhost:8080/parks/list/"}/>
      <Footer />
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<MainPage/>} /> */}
          <Route path="/login" element={<login/>} />
          <Route path="/signup" element={<SignUpForm/>} />
>>>>>>> 64531da7cc4293f27fc99573bd04f3c53fe57030
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
