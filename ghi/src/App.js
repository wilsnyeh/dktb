
import './App.css';
import LoginForm from './users/login';
import SignUpForm from './users/signup';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './mainpage/Header';
import Footer from "./mainpage/Footer";
import ParksList from './parks/ParksList';
import ParkDetails from './parks/ParkDetails';
import { useAuthContext, useToken } from './Auth'
import Nav from './Nav';


function App(props) {

  const [, , logout] = useToken();
  const { token } = useAuthContext();


  return (
    <>
      <Nav logout={logout} token={token} />
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<h1>Welcome</h1>} />
          <Route path="/parks" element={<ParksList fetchUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} token={token} />} />
          <Route path="parks/:id" element={<ParkDetails detailUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} weatherUrl={'https://api.openweathermap.org/data/2.5/weather?q='} token={token} />} />
        </Route>
        <Route path="/login" element={<LoginForm token={token} />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App; 
