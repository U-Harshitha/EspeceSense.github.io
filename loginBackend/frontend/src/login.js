import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation';

function Login() {
    const [values,setValues] = useState({
        email: '',
        password: ''
    })
    const[errors,setErrors] = useState({})
    const handleInput = (event) =>{
    setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values)) ;
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className=' bg-white form-box p-3 rounded w-25'>
        <h3>Login</h3>
        <form action="" onSubmit={handleSubmit}>
          <div className='inputbox mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder='Enter Email' name='email'
            onChange={handleInput} className='form-control rounded-0' />
            {errors.email && <span className='text-danger'> {errors.email} </span>}
          </div>
          <div className='inputbox'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder='Enter Password' name='password'
            onChange={handleInput} className='form-control rounded-0' />
            {errors.password && <span className='text-danger'> {errors.password} </span>}
            <br />
          </div>
          <button type='submit' className='btn btn-success round-0'><strong>Log In</strong></button>
          <div className='forget'>
            <br />
            <p>New User?</p>
            <Link to="/Signup" className='btn btn-default border'>Create an Account Now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
