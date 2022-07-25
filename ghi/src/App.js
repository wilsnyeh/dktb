
import './App.css';
import login from './users/login';
import SignUpForm from './users/signup';
import React from 'react';
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './mainpage/Header';
import Footer from "./mainpage/Footer";
import ParksList from './parks/ParksList';
<<<<<<< HEAD
import LoginForm from './users/login';
=======
import ParkDetails from "./parks/ParkDetails"
>>>>>>> 510c312946d848e48cbd905d87a2d8c437dbd084



function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
<<<<<<< HEAD
      <ParksList fetchUrl={"http://localhost:8080/parks/list/"} />
=======
      <ParkDetails id={"7"}/>
      <ParksList fetchUrl={"http://localhost:8080/parks/list/"}/>
>>>>>>> 510c312946d848e48cbd905d87a2d8c437dbd084
      <Footer />
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<MainPage/>} /> */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
