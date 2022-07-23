import {React} from 'react';

export default function Resetpassword(){

    return(
        <>
        <div className='signincon'>
            <div className='siginheading'><p>Reset Password</p></div>
            <div className='signlink3'><i className='fa fa-bell'/>
            Insert your registered email address where an email will be sent to you.</div>
            <div className='admineditnamecon'>
            <div className='admineditname'>
            <p style={{color:'black'}}>Email Address</p>
            <input type='email' style={{borderColor:'black'}}/>
            </div>
        </div>
        <div className='usereditbtn'>
        <button>SUBMIT</button>
        </div>
        </div>
        </>
    )
}