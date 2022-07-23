import {React} from 'react';

export default function Signin({setView}){

    return(
        <>
        <div className='signincon'>
            <div className='siginheading'><p>Sign In</p></div>
            <div className='admineditnamecon'>
            <div className='admineditname'>
            <p style={{color:'black'}}>Email Address</p>
            <input type='email' style={{borderColor:'black'}}/>
            </div>
        </div>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p style={{color:'black'}}>Password</p>
            <input type='password' style={{borderColor:'black'}}/>
            </div>
        </div>
        <div className='signlink'><p onClick={()=>setView('resetpassword')}>Forgot Password?</p></div>
        <div className='signlink'><p onClick={()=>setView('passcode')}>Forgot Password?</p></div>
        <div className='usereditbtn'>
        <button>SUBMIT</button>
        <div className='signlink2'>Don't have an account?  <span onClick={()=>setView('signup')}>Sign Up</span></div>
        </div>
        </div>
        </>
    )
}