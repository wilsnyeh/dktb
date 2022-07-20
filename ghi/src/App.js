import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import login from './users/login';
import SignUpForm from './users/signup';

function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<MainPage/>} /> */}
          
          <Route path="/login" element={<login/>} />
          <Route path="/signup" element={<SignUpForm/>} />

        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
