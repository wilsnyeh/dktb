import React, { useState } from "react";
import {useToken} from "../Auth"


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, login] = useToken();

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

    </form>
  );
}
export default Login;
