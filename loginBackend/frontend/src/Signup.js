import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Validation from './SignupValidation';
function Signup() {
  
    const [values,setValues] = useState({
        name: '',
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
      <h3>Registration</h3>
      <form action="" onSubmit={handleSubmit}>
      <div className='inputbox mb-3'>
          <label htmlFor="name"><strong>Name</strong></label>
          <input type="text" placeholder='Enter Name' name = 'name'
           onChange={handleInput} className='form-control rounded-0' />
        {errors.name && <span className='text-danger'> {errors.name} </span>}

        </div>
        <div className='inputbox mb-3'>
          <label htmlFor="email"><strong>Email</strong></label>
          <input type="email" placeholder='Enter Email'className='form-control rounded-0' />
        </div>
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
            <button type = 'submit' className='btn btn-success w-100 rounded-0'>Register</button>
          <p>Already a User ?</p>
          <Link to="/" className='btn btn-default border'>Login</Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Signup
