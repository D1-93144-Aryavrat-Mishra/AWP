import React from 'react'
import './register.css'

function Register() {
    return (
        <div className='container'>
            <h2 className='page-header'>Register</h2>
            <div className='register-container'>

                <div className='mb-3'>
                    <label htmlFor=''>First Name</label>
                    <input
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor=''>last name</label>
                    <input type='text'
                        className='form-control' />
                </div>

                <div className='mb-3'>
                    <label htmlfor=''>Email</label>
                    <input type='email'
                        className='form-control' />


                </div>

                <div className='mb-3'>
                    <label htmlfor=''>Phone number</label>
                    <input type='tel'
                        className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlfor=''>password</label>
                    <input type='password'
                        className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlfor=''>Confirm password</label>
                    <input type='password'
                        className='form-control' />
                </div>

                <div className='mb-3'>
                    <label htmlfor=''>Remember me?</label>
                    <input type='checkbox'
                        className='form-control' />
                </div>
                <div>
                    Already have an account?{''}
                    <button className='btn btn-link'>login</button>
                </div>

                <div>
                    <button className='btn btn-success'>Register</button>
                </div>



            </div>
        </div>
    )
}

export default Register