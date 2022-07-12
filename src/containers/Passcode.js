import {React} from 'react';
import { Link } from 'react-router-dom';

export default function Passcode({setView}){

    return(
        <>
        <div className='signincon'>
            <div className='siginheading'><p>Account Verification</p></div>
            <div className='signlink3'><i className='fa fa-bell'/>
            Verify by inserting the 5 digit CODE sent to your email.</div>
            <div className='admineditnamecon'>
            <div className='admineditname'>
            <p style={{color:'black'}}>5-DIGIT-CODE</p>
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