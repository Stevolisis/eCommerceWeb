import {React, useState} from 'react';
import Adduseraddress from './Adduseraddress';
import Useraddresses from './Useraddresses';

export default function Checkoutaddress(){
    const [view,setView]=useState(true)
    return(
        <>
        <div className='popupaddresscon' >
        <div className='popupaddress'>
       {view===true? <Useraddresses popup='true' setView={setView}/>
       :
       <Adduseraddress popup='true' />} 
        </div>
        </div>
        </>
    )
}