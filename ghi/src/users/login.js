import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useToken } from "../Auth"
import "../HomePage.css"


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [, login] = useToken();

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/signup/`
        navigate(path);
    }
    return (
        <div className="hero vh-100 d-flex align-items-center">
            <div className='container'>
                <span className="font-link">
                    <div className="row"></div>
                    <h1 className='p-4 m-auto pb-0 text-light'>Login to your Account</h1>
                    <form className='container w-80 mt-2 py-1'>
                        <div className='form-outline form-outline-color-success my-4 mx-3'>
                            <label className='form-label' htmlFor='username'><font size="+2">Username</font></label>
                            <input
                                className='form-control '
                                onChange={e => setUsername(e.target.value)}
                                value={username}
                                placeholder='Username'
                                type='text'
                                required
                            />
                        </div>
                        <div className='my-4 mx-3'>
                            <label className='form-label' htmlFor='password'><font size="+2">Password</font></label>
                            <input
                                className='form-control'
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                placeholder='Password'
                                type='password'
                                required
                            />
                        </div>
                        <div className='container-fluid flex'>
                            <button
                                className='btn btn-success float-center' onClick={() => login(username, password)} type='button'>
                                Login
                            </button>
                        </div>
                    </form>
                    <div className='row mx-2 m-auto'>
                        <div className='col m-auto text-light float-center'>
                            <p>Don't have an account?</p>
                        </div>
                        <div className='col mb-1'>
                            <button
                                onClick={routeChange}
                                className="btn btn-success btn-block">
                                Sign up
                            </button>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    );
}
export default Login;
