import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import LoginForm from './users/login';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<MainPage/>} /> */}
          
          <Route path="/login" element={<LoginForm/>} />

        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
