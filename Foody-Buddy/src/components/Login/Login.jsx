import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
const Login = ({setShowlogin}) => {
    const[curState,setCurState]=useState("Sign Up")
  return (
    <div className='login'>
        <form className="login-con">
            <div className="log-title">
                <h2>{curState}</h2>
                <img onClick={()=>setShowlogin(CSSFontFeatureValuesRule)} src={assets.cross_icon} alt="" />
            </div>
            <div className="log-input">
                {curState==="Login"?<></>:
                <input type="text" placeholder='Your name' required/>}
                <input type="email" placeholder='Your email' required/>
                <input type="password" placeholder='Password' required/>

            </div>
            <button>{curState==="Sigh Up"?"Create Account":"Login"}</button>
            <div className="logcondition">
                <input type="checkbox" required>
                    <p>I agree terms and conditions</p>
                </input>
            </div>
            {curState==="Login"?
            <p>Create new account?<span onClick={()=>setCurState("Sign Up")}>Click here</span></p>:
            <p>Already have an account?<span onClick={()=>setCurState("Login")}>Login</span></p>}
        </form>
    </div>
  )
}

export default Login