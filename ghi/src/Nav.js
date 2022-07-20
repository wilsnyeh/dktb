import { NavLink } from 'react-router-dom';

function Nav() {
  return (
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <NavLink className="navbar-brand" to='/'>Don't Kick The Bucket</NavLink>
      <button clasName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/'>Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link Logout">Logout</NavLink>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Nav;
