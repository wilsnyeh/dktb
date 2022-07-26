
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
<<<<<<< HEAD
      <ParkDetails Url={"http://localhost:8080/parks/list/7"} />
      <ParksList fetchUrl={"http://localhost:8080/parks/list/"} />
=======
      {/* <ParkDetails Url={"http://localhost:8080/parks/list/7"}/> */}
      <ParksList fetchUrl={"http://localhost:8080/parks/list/"}/>
>>>>>>> a13f5641e1a2d157459f729c81623f6e8bfc2868
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
