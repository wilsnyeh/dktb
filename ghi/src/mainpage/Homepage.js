import React, { useState } from 'react';
import "../HomePage.css"
import Login from '../users/login';


function HomePage(){

    const [openLogin, setOpenLogin] = useState(false)
    
    return (
        <div class="hero vh-100 d-flex align-items-center">
            <div class="container">
            <span className="font-link">
                <div class="row">
                    <div class="col-lg-7 mx-auto text-center">
                    <img src="https://i.ibb.co/KVnK9NS/DKTB-logo.png" alt="DKTB-logo" class="rounded mx-auto d-block" />
                        <br></br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div class="container">
                            <button type="button" class="openLoginbtn btn-info btn-round" 
                            onClick={()=>{setOpenLogin(true)}} 
                            data-toggle="modal" data-target="/login">
                            Login
                            </button>  
                            {openLogin && <Login closeLogin={setOpenLogin}/>}
                            </div>
                        
                    </div>
                </div>
                </span>
            </div>
            
        </div>

        
)
    }

export default HomePage();
