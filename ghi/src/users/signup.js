import React, { useState, useEffect } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom"
import { useToken } from '../Auth'
import "../HomePage.css"


function SignUpForm() {
    const [username, setUserName] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, , , signup,] = useToken();

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/login/`
        navigate(path);
    }
    return (
        <div>
            <div className="hero vh-100 d-flex align-items-center">
                <div className='container'>
                    <span className="font-link">
                        <h1 className='p-4 m-auto pb-0 text-light'>Create an account  </h1>
                        <form className='container w-80 mt-2 py-1 needs-validation' noValidate>
                            <div className="form-outline form-outline-color-success mb-2 ">
                                <label htmlFor='username'
                                    className='form-label '><font size="+2">Username</font></label>
                                <input value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required type='text'
                                    className='form-control'
                                    id='username'
                                    placeholder='Username' />
                                <div className="valid-feedback"><font size="+2">Looks Good!</font></div>
                                <div className="invalid-feedback"><font size="+2">Please choose another username</font></div>
                            </div>
                            <div className='row mb-2'>
                                <div className="col">
                                    <label htmlFor='first_name'
                                        className='form-label'><font size="+2">First Name</font></label>
                                    <input value={first_name}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required type='text'
                                        className='form-control'
                                        id='first_name'
                                        placeholder='First' />
                                </div>
                                <div className="col">
                                    <label htmlFor='last_name'
                                        className='form-label'><font size="+2">Last Name</font></label>
                                    <input value={last_name}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required type='text'
                                        className='form-control'
                                        id='last_name'
                                        placeholder='Last' />
                                </div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="email"
                                    className="form-label"><font size="+2">Email address</font></label>
                                <input value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder='email@example.com'
                                    aria-describedby="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password"
                                    className="form-label"><font size="+2">Password</font></label>
                                <input value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder='password' />
                            </div>
                            {/* <section className='justify-content-center'> */}
                            <div className='container-fluid flex'>
                                <button
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        await signup(username, password, email, first_name, last_name)
                                    }}
                                    className="btn btn-success btn-block">
                                    LETS GET OUTSIDE
                                </button>
                            </div>
                        </form>
                        <br></br>
                        <div className='row mb-2 m-auto text-light'>
                            <div className='col m-auto'>
                                <p>Already have an account?</p>
                            </div>
                            <div className='col mb-1'>
                                <button
                                    onClick={routeChange}
                                    className="btn btn-success btn-block signupbtn">
                                    Login
                                </button>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}



export default SignUpForm;