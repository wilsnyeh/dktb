import React from 'react';
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './mainpage/Footer';
import ParksList from './parks/ParksList';


function App(props) {
  return (
    <BrowserRouter>
    <Nav />
    <Header />
    <ParksList />
    <Footer />
    {/* <Routes>
      <Route path="list" element={<ParksList />} />
    </Routes> */}

    </BrowserRouter>
  )
}

export default App;
