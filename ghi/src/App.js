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
      <Routes>
        <Route>
          <Route path="/" element={<ParksList fetchUrl={"http://localhost:8080/parks/list/"}/>} />
          <Route path="detail/:id" element={<ParkDetails Url={"http://localhost:8080/parks/list/"}/>} />
        </Route>
      </Routes>      
      <Footer />
    </BrowserRouter>
  )
}

export default App;
