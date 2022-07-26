import React from 'react';
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './mainpage/Header';
import Footer from "./mainpage/Footer";
import ParksList from './parks/ParksList';
import ParkDetails from "./parks/ParkDetails"



function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
      {/* <ParkDetails Url={"http://localhost:8080/parks/list/7"}/> */}
      <ParksList fetchUrl={"http://localhost:8080/parks/list/"}/>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
