import react from 'react';
import { NavLink, Link } from 'react-router-dom';


function Nav({ logout, token }) {
  return (
    <div>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
      
        <NavLink className="navbar-brand" to='/'>DON'T KICK THE BUCKET</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">

                <NavLink className="nav-link" aria-current="page" to='/'>HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/profile'>profile</NavLink>
              </li>

              {!token ?
                <li className="nav-item">
                  <NavLink className="nav-link" to='/login'>LOGIN</NavLink>
                  {/* ^^ adjust to field to have specific link ^^ */}
                </li> : null}

              {/* {token ? */}
                <li className="nav-item">
                  <NavLink className="nav-link" to='/parks'>PARKS</NavLink>
                  {/* ^^ adjust to field to have specific link ^^ */}
                {/* </li> : null} */}
                </li>

              {token ?
                <li className="nav-item">
                  <Link className="nav-link" onClick={() => logout()} to='/'>LOGOUT</Link>
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
