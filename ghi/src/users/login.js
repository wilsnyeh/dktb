import React, { useState } from "react";
import { useToken } from "../Auth"

export const Login = () => {



function Login(open,onClose) {
    
    

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [, login] = useToken();

    if (!open) return null;

    return (
        <div className="loginoverlay">
            <div className="loginContainer">
                <img src="" alt="" />
        <form className='container mt-5 py-5'>
            <button onClick={onClose} className="closebtn">Click Me to Close</button>
            <input
                onChange={e => setUsername(e.target.value)}
                value={username}
                placeholder='Username'
                type='text'
                required
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                placeholder='Password'
                type='password'
                required
            />
            <button onClick={() => login(username, password)} type='button'>
                Login
            </button>
    </form>
    </div></div>
  );
}}
export default Login;
