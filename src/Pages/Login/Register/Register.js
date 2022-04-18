import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate(); 

    const navigateLogin = () => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();
    }

    return (
        <div className='register-form mt-5'>
            <h2 style={{textAlign :'center'}}>Please Register</h2>

            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required />

                <input type="email" name="email" id="" placeholder='Your Email' required />

                <input type="password" name="
                password" id="" placeholder='Password' required />
                <input className='bg-success text-white' type="submit" value="Register" />
            </form>
            <p className='mt-2'>Already have an account? <button className='text-white pe-auto bg-success' onClick={navigateLogin}>Please Login</button></p> 
        </div>
    );
};

export default Register;