import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import SearchBar from './mainpage/SearchBar';


function Nav({ logout, token }) {
  return (
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
              {!token &&
                <li className="nav-item">
                  <NavLink className="nav-link" to='/login'>Login</NavLink>
                  {/* ^^ adjust to field to have specific link ^^ */}
                </li>}

              {token &&
                <li className="nav-item">
                  <NavLink className="nav-link" to='/parks'>Parks</NavLink>
                  {/* ^^ adjust to field to have specific link ^^ */}
<<<<<<< HEAD
                </li> : null}
              {token ?
                <li className="nav-item mt-2 mt-md-0">
                  <Link className="nav-link" to='/dashboard/1'>Dashboard</Link>
                  {/* ^^ adjust to field to have specific link ^^ */}
                </li> : null}
=======
                </li>}
>>>>>>> origin

                {token &&
                <li className="nav-item mt-2 mt-md-0">
                  <Link className="nav-link" to='/account'>Account</Link>
                  {/* ^^ adjust to field to have specific link ^^ */}
                </li>}

              {token &&
                <li className="nav-item mt-2 mt-md-0">
                  <Link className="nav-link" onClick={() => logout()} to='/'>Logout</Link>
                  {/* ^^ adjust to field to have specific link ^^ */}
                </li>}

              {!token &&
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to='/signup'>Create an account</NavLink>
                </li>}
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
