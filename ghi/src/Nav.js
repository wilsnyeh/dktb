import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import SearchBar from './mainpage/SearchBar';


function Nav({ logout, token }) {
  return (
  //   <><nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark">
  //     <div class="container-fluid">
  //       <a class="navbar-brand ms-auto" to="/">
  //         <img src="https://i.ibb.co/93bxhLq/DKTB-logo-TEXTpng.png" alt=""/>
  //       </a>
  // <button
  //     class="navbar-toggler" type="button"
  //     data-bs-toggle="collapse" data-bs-target="#navbarNav"
  //     aria-controls="navbarNav" aria-expanded="false"
  //     aria-label="Toggle navigation">
  //     <span class="navbar-toggler-icon"></span>
  //   </button>
  //   <div class="collapse navbar-collapse" id="navbarNav">
  //       <ul class="navbar-nav ms-auto">
  //         <li class="nav-items">
  //           <a class="nav-link activate" aria-current="page" to="/Profile">Profile</a>
  //         </li>
  //         <li class="nav-items">
  //           <a class="nav-link activate" aria-current="page" to="/Parks/List">Parks</a>
  //         {/* <li class="nav-items">
  //           <a class="nav-link activate" aria-current="page" to="/Login">Login</a>
  //         </li> */}
  //         </li>
  //       </ul>
  //       <button class="btn btn-primary ms-lg-3">Sign Up</button>
  //     </div>
  //     </div>
  //     </nav></>

 
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top mm-custom">
        <div className="container-fluid">
          {!token ?
            <NavLink className="navbar-brand" to='/'>Don't Kick The Bucket</NavLink>
            : <NavLink className="navbar-brand" to='/parks'>Don't Kick The Bucket</NavLink>
          }
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav 
            me-auto 
            mb-2 mb-md-0">
              {!token ?
                <li className="nav-item">
                  <NavLink className="nav-link" to='/login'>Login</NavLink>
                  {/* ^^ adjust to field to have specific link ^^ */}
                </li> : null}

              {token ?
                <li className="nav-item">
                  <NavLink className="nav-link" to='/parks'>Parks</NavLink>
                  {/* ^^ adjust to field to have specific link ^^ */}
                </li> : null}

              {token ?
                <li className="nav-item mt-2 mt-md-0">
                  <Link className="nav-link" onClick={() => logout()} to='/'>Logout</Link>
                  {/* ^^ adjust to field to have specific link ^^ */}
                </li> : null}

              {!token ?
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to='/signup'>Create an account</NavLink>
                </li> : null}
            </ul>
            {/* <SearchBar/> */}
            {/* <form className="d-flex" role="search">
              <div className="input-group rounded">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button className="input-group-text border-1 " id="search-addon">
                  <i className="fas fa-search "></i>
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav;
