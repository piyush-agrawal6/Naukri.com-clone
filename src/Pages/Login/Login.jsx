import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <>
    <div className='a1'>
    <div className='a2'>
      <div>
        <div className='a3'>
        <h3 className='b1'>New to Naukri?</h3>
        <p className='b2'>One click apply using naukri profile.</p>
        <p className='b2'>Get relevant job recommendations.</p>
        <p className='b3'>Showcase profile to top companies and consultants.</p>
        <p className='b4'>Know application status on applied jobs.</p>
        <button className='a4'>Register for free</button>
        </div>
      </div>
      <div>
      <img className='b3' src="//static.naukimg.com/s/5/105/i/register.png"/>
      </div>
    </div>
    <div className='a5'>
       <div className='a6'>
        <h2>Login</h2>
        <form>
           <lable>Email ID
            <input className='b4' type="text" placeholder='Enter Name' />
            </lable>
            <br></br>
            <br></br>
            <lable>Password
            <input className='b4' type="password" placeholder='Enter PassWord'/>
            </lable>
            <br></br>
            <br></br>
            <br></br>
        <button className='a7'>Login</button>
        </form>
        <br></br>
        <br></br>
        <button className='a8'>
            Sign in with Google
        </button>
       </div>
    </div>
    </div>
    </>
  )
}
export default Login