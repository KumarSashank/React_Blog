import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const[inputs,setInputs]=useState({
        username:"",
        password:"",
    });

    const [err,setError]=useState(null)

    const navigate =useNavigate()

    const handleChange=e=>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    // console.log(inputs);
    const handleSubmit= async e =>{
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:8800/api/auth/login/",inputs)
            navigate('/')
            console.log(res);
        }
        catch(err){
            setError(err.response.data);
        }
    }

    return (
        <div className='Auth'>
            <h1>Login</h1>
            <form >
                <input required type="text" placeholder='Username' onChange={handleChange} name="username" id="" />
                <input required type="password" placeholder='Password' onChange={handleChange} name="password" id="" />
                <button onClick={handleSubmit} type='submit'>Login</button>
                {err && <p>{err}</p>}
                <span>Don't you have an account? 
                    <Link to="/login">Login</Link>
                    </span>
            </form>
        </div>
    );
}

export default Login;