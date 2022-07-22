
import './App.css';
import login from './users/login';
import SignUpForm from './users/signup';
import React from 'react';
import Nav from "./Nav";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from './mainpage/Header';
import Footer from './mainpage/Footer';
import ParksList from './parks/ParksList';
import {useToken} from './Auth'


function App(props) {
  const [token, login, logout, signup, update] = useToken();
  const navigate = useNavigate();
  
  return (
    <div>
      {/* <Nav /> */}
      <Header />
      {/* <ParksList fetchUrl={"http://localhost:8080/parks/list/"}/> */}
      <Footer />
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<MainPage/>} /> */}
          <Route path="/login" element={<login/>} />
          <Route path="/signup" element={<SignUpForm token={token} signup={signup}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
