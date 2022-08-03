import React from 'react'
import { NavLink } from 'react-router-dom';



function Header() {
  return (
    <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active " data-bs-interval="5000">
          <img className='w-100 carouselphoto' src="https://www.nps.gov/common/uploads/banner_image/pwr/homepage/0FBA9AF8-1DD8-B71B-0BF72F798FF5BC7E.jpg?mode=crop&quality=90&width=1200&height=350" alt="" />
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>“Make a bucket list and fill it with dreams that have no boundaries.”</h1>
              <p>— Annette White</p>
              {/* <p><NavLink className="btn btn-lg btn-primary" to="/">Sign up today</NavLink></p> */}
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className='w-100 carouselphoto' src="https://www.nps.gov/common/uploads/banner_image/pwr/homepage/36C683FE-1DD8-B71B-0B6B4AE9C34946B8.jpg?mode=crop&quality=90&width=1200&height=350" alt="" />
          <div className="container">
            <div className="carousel-caption">
              <h1>“Once a year, go someplace you’ve never been before.”</h1>
              <p>– Dalai Lama</p>
              {/* <p><NavLink className="btn btn-lg btn-primary" to="/">Learn more</NavLink></p> */}
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className='w-100 carouselphoto' src="https://www.nps.gov/common/uploads/banner_image/pwr/homepage/D0D65293-1DD8-B71B-0B90C84869AED282.jpg?mode=crop&quality=90&width=1200&height=350" alt="" />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>“I haven't been everywhere, but it's on my list.”</h1>
              <p>- Susan Sontag</p>
              {/* <p><NavLink className="btn btn-lg btn-primary" to="/">Browse gallery</NavLink></p> */}
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
    </div>
  )
}

export default Header;