import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {useToken} from "../Auth"


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, login] = useToken();


  return (
    <form className='container mt-5 py-5'>
            <input
              onChange={handleUserName}
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
  );
}

export default Login;
