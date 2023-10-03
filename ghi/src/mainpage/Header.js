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
          <img className='w-100 carouselphoto' src="https://r4.wallpaperflare.com/wallpaper/1/911/744/canyon-monitor-multi-multiple-wallpaper-43948830a3eba1eed1a4e1739a453d65.jpg" alt="" />
          <div className="container">
            <div className=" carousel-caption text-start">
              <h1>“Make a bucket list and fill it with dreams that have no boundaries.”</h1>
              <p>— Annette White</p>
              {/* <p><NavLink className="btn btn-lg btn-primary" to="/">Sign up today</NavLink></p> */}
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className='w-100 carouselphoto' src="https://r4.wallpaperflare.com/wallpaper/33/885/113/monitor-montagne-mountain-multi-wallpaper-93d458e0b3cbd16ed1c47143ca45dd55.jpg" alt="" />
          <div className="container">
            <div className="carousel-caption">
              <h1>“Once a year, go someplace you’ve never been before.”</h1>
              <p>– Dalai Lama</p>
              {/* <p><NavLink className="btn btn-lg btn-primary" to="/">Learn more</NavLink></p> */}
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className='w-100 carouselphoto' src="https://r4.wallpaperflare.com/wallpaper/141/560/968/monitor-montagne-mountain-multi-wallpaper-936488a0732b918ea164b133aad57dc5.jpg" alt="" />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>“I haven't been everywhere, but it's on my list.”</h1>
              <p>- Susan Sontag</p>
              {/* <p><NavLink className="btn btn-lg btn-primary" to="/">Browse gallery</NavLink></p> */}
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