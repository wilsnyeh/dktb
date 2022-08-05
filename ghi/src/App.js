import './App.css';
import LoginForm from './users/login';
import SignUpForm from './users/signup';
import { Routes, Route } from "react-router-dom";
import Homepage from './mainpage/Homepage'
import Footer from "./mainpage/Footer";
import ParksList from './parks/ParksList';
import ParkDetails from "./parks/ParkDetails"
import React, {  useState } from 'react'
import { useAuthContext, useToken } from './Auth'
import Nav from './Nav';
import AccountDetails from './users/AccountPage';
import jwt from "jwt-decode";


function App(props) {
  const [, , logout] = useToken();
  const { token, decoded } = useAuthContext();  
  const userId = decoded?.user?.id
  const [favorites, setFavorites] = useState();


  return (
    <>
      <Nav logout={logout} token={token} />
      <Routes>
        <Route> 
          <Route path="/" element={Homepage} />
          <Route path="/parks" element={<ParksList fetchUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} token={token} />} />
          <Route path="parks/:id" element={<ParkDetails userId={userId} detailUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} weatherUrl={'https://api.openweathermap.org/data/2.5/weather?q='} token={token} />} />
          <Route path="/account" element={<AccountDetails accountUrl ={`http://localhost:8090/accounts/${userId}/`}/>} />
        </Route>
        <Route path="/login" element={<LoginForm token={token} />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/account" element={<AccountDetails />} />

      </Routes>
      <Footer />
      </>
  );
}
export default App; 
