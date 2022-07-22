import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {useToken} from "../Auth"


function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { token, login } = props;

//   if (login) {
//     return <Navigate to='/' />;
//   }  

  var handleUserName = function (e) {
    const value = e.target.value;
    setUsername(value)
    // props.setUN(value)
  }

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





// import React from 'react';
// import { Navigate, Link } from 'react-router-dom'; 



// class LoginForm extends React.Component{

//     state={
//         username:'',
//         password:'',
//         showPassword: false,
//         error: '',
//     }

//     handleChange = (e) =>{
//         const {name, value} = e.target
//         this.setState({[name]: value})
//     }

//     handleSubmit = async (e) => {
//         e.preventDefault()
//         const error = await this.props.login(this.state.username, this.state.password);
//         this.setState({ error: error })
//         this.setState({
//             username: '',
//             password: '',
//             showPassword: false,
//         });
//     }

//     validForm() {
//         return this.state.password.length >= 8 &&
//                this.state.username
//     }
//     render(){

//         if (this.props.token) {
//             return <Navigate to="/my_profile" />;
//         }

//         return(
    
//             <div className="row_login" >
//                 <div className="offset-3 col-6" id="wrapper" >
//                     <div className="shadow p-4 mt-4" id="outbox" >
//                         <form onSubmit={this.handleSubmit} id="login-form" >
//                             <h1>Ready to not kick that bucket?!</h1>
//                             <hr/>   
                        
//                             <div className="form-floating mb-3">
//                                 <input type='text' id="loginusername" name='username' placeholder='Username' 
//                                     required onChange={this.handleChange} />
//                             </div>
//                             <div className="form-floating mb-3" >
//                                 <input type={this.state.showPassword ? "text" : "password"} id="loginpagepass" name='password' placeholder='●●●●●●●●' 
//                                     required onChange={this.handleChange} />
                                    
//                                 <button className='input-group-text bg-primary text-light' type="button"
//                                     onClick={() => this.setState({showPassword: !this.state.showPassword})}>Show Password
//                                 </button>
//                             </div>
//                             <hr/>
//                             <div>
//                                 <button 
//                                     type="submit" name='loginbutton'

//                                     className="btn btn-primary" form="login-form">Log In
//                                 </button>
//                             </div>
//                                 <p> 
//                                 <Link to='/login/new'>Forgot Password?</Link> 
//                                 </p>
//                                 <p>
//                                     Don't have an Account? <Link to='/login/new'>Create Account</Link> 
//                                 </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
       
//         )
//     }
// }
// export default LoginForm;
