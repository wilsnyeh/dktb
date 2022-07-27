
import './App.css';
import LoginForm from './users/login';
import SignUpForm from './users/signup';
import Logout from './users/logout';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './mainpage/Header';
import Footer from './mainpage/Footer';
import ParksList from './parks/ParksList';
import { useAuthContext } from './Auth'
import Nav from './Nav';


function App(props) {
  
  const [userName, setUserName] = useState('');
  const { token } = useAuthContext();
  // if (user && !userName) {
  //   setUserName(user.username)
  // }

    return (
      <div>
        <div>
          <Nav/>
        </div>
        {/* <Header />
          <ParksList fetchUrl={"http://localhost:8080/parks/list/"} token={token} />
        <Footer /> */}
        <div className="container">
          <Routes>
            <Route path="/logout" element={<Logout/>} />  
            <Route path="/login" element={<LoginForm token={token}/>} />
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>
        </div>
      </div>
    );
  }
  
export default App;
