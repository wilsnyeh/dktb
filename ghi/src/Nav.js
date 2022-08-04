import react from 'react';
import { NavLink, Link } from 'react-router-dom';


function Nav({ logout, token }) {
  return (
    <><nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand ms-auto" to="/">
          <img src="https://i.ibb.co/93bxhLq/DKTB-logo-TEXTpng.png" alt=""/>
        </a>
  <button
      class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-items">
            <a class="nav-link activate" aria-current="page" to="/Profile">Profile</a>
          </li>
          <li class="nav-items">
            <a class="nav-link activate" aria-current="page" to="/Parks/List">Parks</a>
          {/* <li class="nav-items">
            <a class="nav-link activate" aria-current="page" to="/Login">Login</a>
          </li> */}
          </li>
        </ul>
        <button class="btn btn-primary ms-lg-3">Sign Up</button>
      </div>
      </div>
      </nav></>

 
  )
}

export default Nav;
