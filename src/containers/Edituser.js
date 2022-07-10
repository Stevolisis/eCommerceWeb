import {React} from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Edituser(){
    const {id}=useParams();
    const edituser=(()=>{
        Swal.fire(
          'Successful!',
          'Edit User Successful.',
          'success'
        )
        });

    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
        <p>Edit User ({id})</p>
        </div>
        <div className='addcategcon'>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Name</p>
            <input type='text' />
            </div>
        </div>
        
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Phone Number</p>
            <input type='number'/>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Email Address</p>
            <input type='email'/>
            </div>
        </div>

        <div className='usereditbtn'>
        <button onClick={()=>edituser()}>EDIT</button>
        </div>
        </div>            
        </div>        
        </>
    )
}