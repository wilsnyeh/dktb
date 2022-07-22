
import './App.css';
import LoginForm from './users/login';
import SignUpForm from './users/signup';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './mainpage/Header';
import Footer from './mainpage/Footer';
import ParksList from './parks/ParksList';
import { useToken } from './Auth'

function App(props) {
  const [token, login, logout, signup, user] = useToken();
  const [userName, setUserName] = useState('');

  // if (user && !userName) {
  //   setUserName(user.username)
  // }

    return (
      <div>
        <Header />
          <ParksList fetchUrl={"http://localhost:8080/parks/list/"} />
        <Footer />
        <div className="container">
          <Routes>
            <Route path="/login" element={<LoginForm token={token} login={login}/>} />
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>
        </div>
      </div>
    );
  }


export default App;
