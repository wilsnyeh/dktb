import React from 'react';
import { Navigate, Link } from 'react-router-dom';



<<<<<<< HEAD
class LoginForm extends React.Component{

    state={
        username:'',
        password:'',
=======
class LoginForm extends React.Component {
    state = {
        username: '',
        password: '',
>>>>>>> 8a60ae91b639dfc92f6b116b7bf1c9a29f9c5dcc
        showPassword: false,
        error: '',
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const error = await this.props.login(this.state.username, this.state.password);
        this.setState({ error: error })
        this.setState({
            username: '',
            password: '',
            showPassword: false,
        });
    }

    validForm() {
        return this.state.password.length >= 8 &&
            this.state.username
    }
    render() {

        if (this.props.token) {
            return <Navigate to="/my_profile" />;
        }

        return (

            <div className="row_login" >
                <div className="offset-3 col-6" id="wrapper" >
                    <div className="shadow p-4 mt-4" id="outbox" >
                        <form onSubmit={this.handleSubmit} id="login-form" >
                            <h1>Ready to not kick that bucket?!</h1>
                            <hr />

                            <div className="form-floating mb-3">
                                <input type='text' id="loginusername" name='username' placeholder='Username'
                                    required onChange={this.handleChange} />
                            </div>
                            <div className="form-floating mb-3" >
                                <input type={this.state.showPassword ? "text" : "password"} id="loginpagepass" name='password' placeholder='●●●●●●●●'
                                    required onChange={this.handleChange} />
<<<<<<< HEAD
                                    
                                <button className='input-group-text bg-primary text-light' type="button"
                                    onClick={() => this.setState({showPassword: !this.state.showPassword})}>Show Password
=======

                                <button className='input-group-text bg-dark text-light' type="button"
                                    onClick={() => this.setState({ showPassword: !this.state.showPassword })}>Show Password
>>>>>>> 8a60ae91b639dfc92f6b116b7bf1c9a29f9c5dcc
                                </button>
                            </div>
                            <hr />
                            <div>
                                <button
                                    type="submit" name='loginbutton'

                                    className="btn btn-primary" form="login-form">Log In
                                </button>
<<<<<<< HEAD
                            </div>
                                <p> 
                                <Link to='/login/new'>Forgot Password?</Link> 
                                </p>
                                <p>
                                    Don't have an Account? <Link to='/login/new'>Create Account</Link> 
                                </p>
=======
                                <Link to='/login/new'>Forgot Password?</Link>
                            </div>


                            <p>
                                Don't have an Account? <Link to='/login/new'>Create Account</Link>
                            </p>
>>>>>>> 8a60ae91b639dfc92f6b116b7bf1c9a29f9c5dcc
                        </form>
                    </div>
                </div>
            </div>

        )
    }
<<<<<<< HEAD
=======

>>>>>>> 8a60ae91b639dfc92f6b116b7bf1c9a29f9c5dcc
}
export default LoginForm;
