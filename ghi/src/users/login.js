import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useToken } from "../Auth"


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
        <section className='w-100 d-flex justify-content-center pb-4'>
            <div className='form-container'>
                <h1 className='p-4 m-auto pb-0 text-light'>Login to your Account</h1>
                <form className='container w-80 mt-2 py-1'>
                    <div className='form-outline form-outline-color-success my-4 mx-3'>
                        <label className='form-label' htmlFor='username'>Username</label>
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
                        <label className='form-label' htmlFor='password'>Password</label>
                        <input
                            className='form-control'
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            placeholder='Password'
                            type='password'
                            required
                        />
                    </div>
                    <div className='row mx-5 mb-4'>
                        <button
                            className='btn btn-success btn-block' onClick={() => login(username, password)} type='button'>
                            Login
                        </button>
                    </div>
                </form>
                <div className='row mx-2 m-auto'>
                    <div className='col m-auto'>
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
            </div>
        </section>
    );
}
export default Login;
