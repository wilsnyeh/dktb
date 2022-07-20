import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import login from './users/login';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<MainPage/>} /> */}
          
          <Route path="/login" element={<login/>} />

        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
