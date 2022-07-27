
import './App.css';
import LoginForm from './users/login';
import SignUpForm from './users/signup';
import React from 'react';
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './mainpage/Header';
import Footer from "./mainpage/Footer";
import ParksList from './parks/ParksList';
import ParkDetails from "./parks/ParkDetails"



function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
      {/*  */}

      <Footer />
      <Routes>
        <Route>
          <Route path="/" element={<ParksList fetchUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} />} />
          <Route path="parks/:id" element={<ParkDetails detailUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
