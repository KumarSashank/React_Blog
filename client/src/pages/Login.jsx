import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='Auth'>
            <h1>Login</h1>
            <form >
                <input required type="text" placeholder='Username' name="" id="" />
                <input required type="password" placeholder='Password' name="" id="" />
                <button type='submit'>Login</button>
                <p>This is an error message.</p>
                <span>Don't you have an account? 
                    <Link to="/register">Register</Link>
                    </span>
            </form>
        </div>
    );
}

export default Login;