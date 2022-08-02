import React, { useState } from "react";
import { useToken } from "../Auth"


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [, login] = useToken();

    return (
        <section className='shadow-sm form-control w-100 justify-content-center pb-4'>
            <div className='form-container'>
                <form className='container-xl w-75 mx-auto px-auto'>
                    <div className='row mt-2'>
                    <div className='form-label'>Username</div>
                        <input
                            className='form-control '
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                            placeholder='Username'
                            type='text'
                            required
                        />
                    </div>
                    <div className='row mt-2'>
                    <div className='form-label'>Password</div>
                        <input
                            className='form-control'
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            placeholder='Password'
                            type='password'
                            required
                        />
                    </div>
                    <div className='row mx-5 my-2'>
                        <button
                            className='form-control btn-success bordered' onClick={() => login(username, password)} type='button'>
                            Login
                        </button>
                    </div>
                    <div>
                        <h3>Don't have an account? 
                            <a href="./signup">
                                Sign up 
                            </a>
                        </h3>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;
