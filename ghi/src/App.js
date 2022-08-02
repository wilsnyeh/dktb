
import './App.css';
import LoginForm from './users/login';
import SignUpForm from './users/signup';
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './mainpage/Header';
import Footer from "./mainpage/Footer";
import ParksList from './parks/ParksList';
import ParkDetails from "./parks/ParkDetails"
import AddFavorite from './parks/AddFavorites';
import React, { useEffect, useState } from 'react'



function App(props) {

  const [favorites, setFavorites] = useState([])

  const addFavoritePark = (park) => {
    const newFavoriteList = [...favorites, park]
    setFavorites(newFavoriteList);
  }

  return (
    <BrowserRouter>
      <Nav />
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<ParksList fetchUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} />} />
          <Route path="parks/:id" element={<ParkDetails detailUrl={`${process.env.REACT_APP_PARKS}/parks/list/`} handleFavoriteClick={addFavoritePark} favoriteComponent={AddFavorite} />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App; 
