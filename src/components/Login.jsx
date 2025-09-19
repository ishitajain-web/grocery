import React, { useState } from 'react'
 import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        // event.preventDefault();
        const payload = {
            email: email,
            password: password,
        }

       axios.post('https://api.escuelajs.co/api/v1/auth/login', payload)
        .then((res)=>{
            localStorage.setItem("token", JSON.stringify(res.data.access_token))
            alert("login successful")
            console.log("login successful", res)
            navigate('/'); 
        })
        .catch((err)=>{
            alert("login unsuccessful")
            console.log("login Failed", err)
        })
    }

    return (
        <div className='flex justify-center ' >
            <div className='grid items-center justify-center bg-green-100 w-[40%] p-12' >
                <div className='mb-4' >
                    <p >Name</p>
                 <input className='border'
                    type='email' 
                    onChange={(e) => setName(e.target.value)}>
                  </input>
                </div>
                <div className='mb-4' >
                    <p >Email</p>
                    <input className='border' 
                        type='email' 
                            onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </div>
                <div className='mb-4' >
                    <p>Password</p>
                    <input className='border' type='password' onChange={(e) => setPassword(e.target.value)} ></input></div>
                <Button onClick={handleSubmit} variant="contained" size="large" sx={{ backgroundColor: '#238f67', marginTop: '24px' }}>login</Button>
                <div className='mt-2' >
                    don't have an acount
                    <Button variant='text' sx={{ color: '#238f67' }}>Sign Up</Button>
                </div>
            </div>
        </div>
    )
}

export default Login