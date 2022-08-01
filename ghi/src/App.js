
import './App.css';
import LoginForm from './users/login';
import SignUpForm from './users/signup';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './mainpage/Header';
import Footer from "./mainpage/Footer";
import ParksList from './parks/ParksList';
<<<<<<< HEAD
import ParkDetails from "./parks/ParkDetails";
import UserProfile from "./users/UserProfile";


=======
import ParkDetails from './parks/ParkDetails';
>>>>>>> 5914196174f960ad4d1afe841a1061760360fddd
import { useAuthContext, useToken } from './Auth'
import Nav from './Nav';


function App(props) {

  const [userName, setUserName] = useState('');
  const [, , logout] = useToken();
  const { token } = useAuthContext();


  return (

    <>
      <Nav logout={logout} token={token} />
      <Header />
      <Routes>
        <Route>
<<<<<<< HEAD
          <Route path="/" element={<ParksList fetchUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} />} />
          <Route path="parks/:id" element={<ParkDetails detailUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} weatherUrl={'https://api.openweathermap.org/data/2.5/weather?q='} />} />
        
        <Route path="/" element={<h1>Welcome</h1>}/>
          <Route path="/parks" element={<ParksList fetchUrl={"http://localhost:8080/parks/list/"} token={token} />} />
          <Route path="/login" element={<LoginForm token={token} />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/profile" element={<UserProfile />} />
      </Route></Routes>
=======
          <Route path="/" element={<h1>Welcome</h1>} />
          <Route path="/parks" element={<ParksList fetchUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} token={token} />} />
          <Route path="parks/:id" element={<ParkDetails detailUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} weatherUrl={'https://api.openweathermap.org/data/2.5/weather?q='} token={token} />} />
        </Route>
        <Route path="/login" element={<LoginForm token={token} />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
>>>>>>> 5914196174f960ad4d1afe841a1061760360fddd
      <Footer />
    </>
  );
}

export default App; 
