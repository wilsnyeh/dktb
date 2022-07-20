import React from 'react';
import { a, NavLink } from 'react-router-dom';


function Footer() {
  return (
    <div>
        <footer className="container">
          <p className="float-end"><NavLink to="/">Back to top</NavLink></p>
          <p>&copy; MODZILLAMAFIA. &middot; <NavLink to="/">Privacy</NavLink> &middot; <NavLink to="/">Terms</NavLink></p>
        </footer>
  </div>
  )
}

export default Footer;