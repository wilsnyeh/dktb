import React from 'react'
import { NavLink } from 'react-router-dom';



function Header() {
  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://mtrainierguestservices.com/wp-content/uploads/sites/10/2017/10/mt-rainer-3.jpg" className="d-block w-100" alt="..." />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Mt Rainier</h1>
                <h3>“The thing that I still come back away with is how close so many people feel to the mountain emotionally and psychically, and yet how far away the world is when you're on the mountain.”</h3>
                <p><NavLink className="btn btn-lg btn-primary" to="/">Sign up today</NavLink></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://bicycleadventures.com/wp-content/uploads/2019/05/bryce-zion-national-parks-1-1742x896.jpg" className="d-block w-100" alt="..." />

            <div className="container">
              <div className="carousel-caption">
                <h1>Zion National Park</h1>
                <h3>"The most awe-inspiring and unique landscape I've ever been too"</h3>
                <p><NavLink className="btn btn-lg btn-primary" to="/">Search National Parks</NavLink></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.getyourguide.com/img/location/5c6a642fa076b.jpeg/99.webp" className="d-block w-100" alt="..." />

            <div className="container">
              <div className="carousel-caption text-end">
                <h1 className="text-dark">Yellowstone National Park</h1>
                <h3 className="text-dark">"Shhh. Listen. Do you hear? That’s the sound of silence. Isn’t it wonderful?"</h3>
                <p><NavLink className="btn btn-lg btn-primary" to="/">Browse gallery</NavLink></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Header;