
import './App.css';
import LoginForm from './users/login';
import SignUpForm from './users/signup';
<<<<<<< HEAD
import Nav from "./Nav";
=======
import React, { useState } from 'react';
>>>>>>> liamcahill
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './mainpage/Header';
import homePage from './mainpage/Homepage'
import Footer from "./mainpage/Footer";
import ParksList from './parks/ParksList';
<<<<<<< HEAD
import ParkDetails from "./parks/ParkDetails"
import AddFavorite from './components/AddFavorites';
import React, { useEffect, useState } from 'react'

=======
import ParkDetails from './parks/ParkDetails';
import { useAuthContext, useToken } from './Auth'
import Nav from './Nav';
>>>>>>> liamcahill


function App(props) {

<<<<<<< HEAD
  const [favorites, setFavorites] = useState([])

  const addFavoritePark = (park) => {
    const newFavoriteList = [...favorites, park]
    setFavorites(newFavoriteList);
  }
=======
  const [userName, setUserName] = useState('');
  const [, , logout] = useToken();
  const { token } = useAuthContext();

>>>>>>> liamcahill

  return (
    <>
      <Nav logout={logout} token={token} />
      <Routes>
<<<<<<< HEAD
        <Route>
          <Route path="/" element={<ParksList fetchUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} />} />
          <Route path="parks/:id"
            element={<ParkDetails
              detailUrl={`${process.env.REACT_APP_PARKS}/parks/list/`}
              handleFavoriteClick={addFavoritePark}
              favoriteComponent={AddFavorite} />} />
=======
        <Route> 
          <Route path="/" element={homePage}/>
          <Route path="/parks" element={<ParksList fetchUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} token={token} />} />
          <Route path="parks/:id" element={<ParkDetails detailUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} weatherUrl={'https://api.openweathermap.org/data/2.5/weather?q='} token={token} />} />
>>>>>>> liamcahill
        </Route>
        <Route path="/login" element={<LoginForm token={token} />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App; 
