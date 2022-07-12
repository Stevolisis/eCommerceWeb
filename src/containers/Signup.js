import {React} from 'react';
import { Link } from 'react-router-dom';

export default function Signup({setView}){

    return(
        <>
        <div className='signincon'>
            <div className='siginheading'><p>Sign Up</p></div>
            <div className='admineditnamecon'>
            <div className='admineditname'>
            <p style={{color:'black'}}>Full Name</p>
            <input type='text' style={{borderColor:'black'}}/>
            </div>
        </div>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p style={{color:'black'}}>Phone Number</p>
            <input type='text' style={{borderColor:'black'}}/>
            </div>
        </div>
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
        <div className='usereditbtn'>
        <button>SUBMIT</button>
        <div className='signlink2'>Already have an account?  <span onClick={()=>setView('signin')}>Sign In</span></div>
        </div>
        </div>
        </>
    )
}