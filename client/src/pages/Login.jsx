import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='Auth'>
            <h1>Login</h1>
            <form >
                <input type="text" placeholder='Username' name="" id="" />
                <input type="password" placeholder='Password' name="" id="" />
                <button type='submit'>Login</button>
                <span>Don't you have an account? 
                    <Link to="/register">Register</Link>
                    </span>
            </form>
        </div>
    );
}

export default Login;