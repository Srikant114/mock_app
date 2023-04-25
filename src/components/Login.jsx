import React  from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    let naviGate=useNavigate()

    let navigateTodb=(e)=>{
        e.preventDefault()
        naviGate('/data')
    }
  return (
    <div>
        <form onSubmit={navigateTodb}>
            <fieldset>
                <div className='form-data'>
                <h2>Log In</h2>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='enter your id' required/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='********' required minLength={8} />
                <p className='forgotpassword' >Forgot password?</p>
                <button className='loginBtn'>Log In</button>
                <p className='alreadyAcc'> Do you have an account?<span className='signupBtn'>Sign up</span></p>
                </div>
            </fieldset>
        </form>
    </div>
  )
}

export default Login