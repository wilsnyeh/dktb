import React, { useState } from "react";
import { useToken } from "../Auth"


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [, login] = useToken();

<<<<<<< HEAD
  return (
    <form className='container mt-5 py-5'>

            <input class="form-control"
              onChange={e => setUsername(e.target.value)}
              value={username}
              placeholder='Enter Username'
              type='text'
              required
            /><br></br>
            <input class="form-control"
              onChange={e => setPassword(e.target.value)}
              value={password}
              placeholder='Password'
              type='password'
              required
            />
            <button onClick={() => login(username, password)} type='button' class="btn btn-primary btn-lg btn-block">Login</button>

=======
    return (
        <form className='container mt-5 py-5'>
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
>>>>>>> 5914196174f960ad4d1afe841a1061760360fddd
    </form>
  );
}
export default Login;
