
import './App.css';
import login from './users/login';
import SignUpForm from './users/signup';
import React from 'react';
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './mainpage/Header';
import Footer from "./mainpage/Footer";
import ParksList from './parks/ParksList';
import LoginForm from './users/login';
import ParkDetails from "./parks/ParkDetails"



function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
      {/* <ParkDetails detailUrl={"http://localhost:8080/parks/list/"} /> */}
      <ParksList fetchUrl={"http://localhost:8080/parks/list/"} />
      <Footer />
      <Routes>
        {/* <Route path="/" element={<ParksList />} /> */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
