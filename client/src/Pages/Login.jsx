import React from 'react'
import './CSS/Login.css'

function Login() {
  return (
    <div className='login-sign-up'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="login">Already Have An Account? <span>Click Here!</span></p>
        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, I Agree To The Terms Of Use & Privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login
