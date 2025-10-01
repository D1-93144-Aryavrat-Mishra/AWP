
import React from 'react'
import './login.css'

function Login() {
  return (
    <div className='container'>
        <h1 className='page-header'>login</h1>
        <div className='login-container'>
<div className='mb-3'>
    <label htmlFor="">Email</label>
    <input type="email" className='form-control' />
</div>

<div className='mb-3'>
    <label htmlFor="">password</label>
    <input type="password" className='form-control'/>
</div>


    <div>forgot password?
        <button className='btn btn-link'>click here</button>
    </div>

<div> 
    <button className='btn btn-success'>login</button>
</div>

</div>
</div>

    
  )
}

export default Login
