import React from 'react';

const Login = () => {
    return (
        <div className='Auth'>
            <h1>Login</h1>
            <form >
                <input type="text" placeholder='Username' name="" id="" />
                <input type="password" placeholder='Password' name="" id="" />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;