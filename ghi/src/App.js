import react from 'react';
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import ParksList from './parks/ParksList';


function App(props) {
  return (
    <BrowserRouter>
    <Nav />
    <Header />
    <Footer />
    <ParksList />
    {/* <Routes>
      <Route path="list" element={<ParksList />} />
    </Routes> */}

    </BrowserRouter>
  )
}

export default App;
