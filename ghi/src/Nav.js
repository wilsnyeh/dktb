import react from 'react';
import { NavLink, Link } from 'react-router-dom';


function Nav({ logout, token }) {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <NavLink className="navbar-brand" to='/'>Don't Kick The Bucket</NavLink>
            <i className='fas fa-search' />
            <input 
              required=''
              type='search'
              id='navbar-input'
              className='navbar-input'
              placeholder='Find your park' />
            <span className="navbar-toggler-icon"></span>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
              </li>

              {!token ?
                <li className="nav-item">
                  <NavLink className="nav-link" to='/login'>Login</NavLink>
                  {/* ^^ adjust to field to have specific link ^^ */}
                </li> : null}

              {token ?
<<<<<<< HEAD
              <li className="nav-item">
                <NavLink className="nav-link" to='/parks'>Parks</NavLink>
                {/* ^^ adjust to field to have specific link ^^ */}
              </li> : null}
              {token ?
              <li className="nav-item">
                <NavLink className="nav-link" to='/profile'>Parks</NavLink>
                {/* ^^ adjust to field to have specific link ^^ */}
              </li> : null}
=======
                <li className="nav-item">
                  <NavLink className="nav-link" to='/parks'>Parks</NavLink>
                  {/* ^^ adjust to field to have specific link ^^ */}
                </li> : null}
>>>>>>> 5914196174f960ad4d1afe841a1061760360fddd

              {token ?
                <li className="nav-item">
                  <Link className="nav-link" onClick={() => logout()} to='/'>Logout</Link>
                  {/* ^^ adjust to field to have specific link ^^ */}
                </li> : null}
                
                {!token ?
                <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to='/signup'>Create an account</NavLink>
              </li> : null}

            </ul>
            {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav;
