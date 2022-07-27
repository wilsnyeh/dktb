import React, { useState, useEffect } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom"
import { useToken } from '../Auth'

function SignUpForm() {
    const [username, setUserName] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState('null');
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [token, , , signup, ] = useToken();
    


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     await signup(username, password, email, first_name, last_name)
    // };

    useEffect(() => {
        async function getCurrUser() {
            const url = `${process.env.REACT_APP_USERS}/api/accounts/me/`;
            const response = await fetch(url, {
                credentials: 'include',
            });
            if (response.ok) {
                const user = await response.json();
                setUsers(users);
            }
        }
        if (token) {
            getCurrUser();
        }
    }, [token]);

    return (
        <div>
            {token ? (
                navigate('/')
            ) : (
                <form>
                    <div className="mb-3">
                        <label htmlFor='username' className='form-label'>User Name</label>
                        <input value={username} onChange={(e) => setUserName(e.target.value)} required type='text' className='form-control' id='username' placeholder='Username' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='first_name' className='form-label'>First Name</label>
                        <input value={first_name} onChange={(e) => setFirstName(e.target.value)} required type='text' className='form-control' id='first_name' placeholder='First' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='last_name' className='form-label'>Last Name</label>
                        <input value={last_name} onChange={(e) => setLastName(e.target.value)} required type='text' className='form-control' id='last_name' placeholder='Last' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" className="form-control" id="email" aria-describedby="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" className="form-control" id="password" />
                    </div>
                    <button
                        onClick={async (e) => {
                            e.preventDefault();
                            await signup(username, password, email, first_name, last_name)
                        }}
                        className="btn btn-danger btn-sm">
                        LETS GO OUTSIDE!
                    </button>
                </form>
            )}
        </div>
    );
}




export default SignUpForm;