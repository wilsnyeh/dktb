import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
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
>>>>>>> 91d504ac615befde3ab8362f48642e5d8d56114d
  );
}

export default App;
