import React from 'react';
import "../HomePage.css"


function Footer() {
  return (
    <div>    
        <footer className="white-section" id="footer">
          <a href="https://twitter.com/"><i className="footicon fa-brands fa-twitter  round-cor"></i></a>
          <a href="https://www.facebook.com/"><i className="footicon fa-brands fa-facebook-f  "></i></a>
          <a href="https://www.instagram.com/"><i className="footicon fa-brands fa-instagram "></i></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="footicon fa-solid fa-envelope "></i></a>
          <i className="footicon fa-brands fa-linkedin-in"></i>
          <p className="footp">© Copyright Modzilla</p>
        </footer>
  </div>
  )
}

export default Footer;