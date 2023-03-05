import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const[inputs,setInputs]=useState({
        username:"",
        email:"",
        password:"",
    });

    const handleChange=e=>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    // console.log(inputs);
    const handleSubmit= async e =>{
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:8800/api/auth/register/",inputs)
            console.log(res);
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className='Auth'>
            <h1>Register</h1>
            <form >
                <input required type="text" placeholder='Username' onChange={handleChange} name="username" id="" />
                <input required type="email" placeholder='Email' onChange={handleChange} name="email" id="" />
                <input required type="password" placeholder='Password' onChange={handleChange} name="password" id="" />
                <button onClick={handleSubmit} type='submit'>Login</button>
                <p>This is an error message.</p>
                <span>Do you have an account? 
                    <Link to="/login">Login</Link>
                    </span>
            </form>
        </div>
    );
}

export default Login;