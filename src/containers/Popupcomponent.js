import {React, useState} from 'react';
import Adduseraddress from './Adduseraddress';
import Passcode from './Passcode';
import Resetpassword from './Resetpassword';
import Signin from './Signin';
import Signup from './Signup';
import Useraddresses from './Useraddresses';

export default function Popupcomponent({inview}){
    const [view,setView]=useState(inview)
    function inviews(){
        if (view==='useraddress') {
            return (
            <div className='popupaddress'>
            <Useraddresses popup='true' setView={setView}/>
            </div>
            ) 
        }else if (view==='adduseraddress') {
            return (
            <div className='popupaddress'>
            <Adduseraddress/> 
            </div>
            )  
        }else if (view==='signin') {
            return <Signin setView={setView}/>   
        }
        else if (view==='signup') {
            return <Signup setView={setView}/>   
        }
        else if (view==='resetpassword') {
           return <Resetpassword setView={setView}/>   
        }else if (view==='passcode') {
            return <Passcode setView={setView}/>   
        }
    }
    return(
        <>
        <div className='popupaddresscon' >
       {inviews()} 
        </div>
        </>
    )
}