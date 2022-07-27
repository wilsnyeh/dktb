import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext, useToken } from "../Auth"


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [, login] = useToken();


    var handleUserName = function (e) {
        const value = e.target.value;
        setUsername(value)
    }


    const handleSubmit = async e => {
        e.preventDefault()
        // setErrors(validation(values))
        console.log('login inside', login)

        await login(username, password).then(message => {
            console.log('😃😅😃')
            if (message !== undefined) {
                alert(message)
            }
        })
    };
    return (
        <form onSubmit={handleSubmit} className='container mt-5 py-5'>
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
            <button type='submit' >
                Login
            </button>
        </form>
    );
}

// {() => login(username, password)}
export default Login;

