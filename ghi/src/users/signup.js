import React, { useState, useEffect } from "react";
import { Navigate, NavLink} from "react-router-dom"

function SignUpForm(props) {
    const { token, signup } = props;
    const [username, setUserName] = useState ("");
    const [first_name, setFirstName] = useState ("");
    const [last_name, setLastName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     setErrors(await signup(username, first_name, last_name, email, password))
    // };

    // if (token) {
    //     return <Navigate to='/' />
    // }

    return (
            <form>
                <div className="mb-3">
                    <label htmlFor='username' className='form-label'>User Name</label>
                    <input value ={username} onChange={(e)=> setUserName(e.target.value)} required type='text' className='form-control' id='username' placeholder='Username' />
                </div>
                <div className="mb-3">
                    <label htmlFor='first_name' className='form-label'>First Name</label>
                    <input value ={first_name} onChange={(e)=> setFirstName(e.target.value)} required type='text' className='form-control' id='first_name' placeholder='First' />
                </div>
                <div className="mb-3">
                    <label htmlFor='last_name' className='form-label'>Last Name</label>
                    <input value ={last_name} onChange={(e)=> setLastName(e.target.value)} required type='text' className='form-control' id='last_name' placeholder='Last' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input value ={email} onChange={(e)=> setEmail(e.target.value)} required type="email" className="form-control" id="email" aria-describedby="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input value ={password} onChange={(e)=> setPassword(e.target.value)} required type="password" className="form-control" id="password" />
                </div>
                <button type='submit' onClick={async () => await signup(username, first_name, last_name, email, password)}className="btn btn-danger btn-sm">
                    LETS GO OUTSIDE!
                </button>
            </form>
    );
}




export default SignUpForm;