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
          <img className='w-100 carouselphoto' src="https://images.pexels.com/photos/259526/pexels-photo-259526.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <div className="container">
            <div className="carousel-caption text-start">
            <h1>“Make a bucket list and fill it with dreams that have no boundaries.”</h1>
            <p>— Annette White</p>
              {/* <p><NavLink className="btn btn-lg btn-primary" to="/">Sign up today</NavLink></p> */}
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className='w-100 carouselphoto' src="https://images.unsplash.com/photo-1541075217473-93119871682d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80" alt="" />
          <div className="container">
            <div className="carousel-caption">
            <h1>“Once a year, go someplace you’ve never been before.”</h1>
            <p>– Dalai Lama</p>
              {/* <p><NavLink className="btn btn-lg btn-primary" to="/">Learn more</NavLink></p> */}
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className='w-100 carouselphoto' src="https://images.unsplash.com/photo-1602851688358-f72cc9e847a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1711&q=80" alt="" />
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