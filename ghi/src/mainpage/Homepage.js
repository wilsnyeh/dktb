import React from 'react';
import { Link } from 'react-router-dom'
import "../HomePage.css"

function HomePage(){
    return (
        <div className="hero vh-100 d-flex align-items-center">
            <div className="container">
            <span className="font-link">
                <div className="row">
                    <div className="col-lg-12 mx-auto text-center">
                    <img src="https://i.ibb.co/KVnK9NS/DKTB-logo.png" alt="DKTB-logo" className="rounded mx-auto d-block" />
                        <br></br><h4 className='homepagetext'>Explore beautiful state parks 
and discover historic landmarks across the United States and territories.<br/>Start checking things off that bucket list! </h4>                        
                        <Link className="btn homebutton" to={'/login'}>Enter</Link>
                    </div>
                </div>
                </span>
            </div>            
        </div>
)
    }

export default HomePage();
