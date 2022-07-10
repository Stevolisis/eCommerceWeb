import {React} from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Editcoupon(){
    const {id}=useParams();
    const editcoupon=(()=>{
        Swal.fire(
          'Successful!',
          'Edit Coupon Successful.',
          'success'
        )
        });
    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
        <p>Edit Coupon({id})</p>
        </div>
        <div className='addcategcon'>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Title</p>
            <input type='text' />
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Description</p>
            <input type='text' />
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Category</p>
            <select>
                <option defaultValue='discount'>Discount</option>
                <option>Cashback</option>
            </select>
            </div>
        </div>
        
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Offer Value</p>
            <input type='text' />
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>CODE</p>
            <input type='text' />
            </div>
        </div>

        <div className='admineditnamecon'>
        <div className='admineditname'>
            <p>Valid from</p>
            <input type='text'/>
        </div>
        <div className='admineditname'>
            <p>to</p>
            <input type='text' />
        </div>

        </div>

        <div className='admineditnamecon'>
        <div className='admineditname'>
            <p>Status</p>
            <select>
                <option defaultValue='discount'>Active</option>
                <option>Inactive</option>
            </select>
            </div>
        </div>

        <div className='usereditbtn'>
        <button onClick={()=>editcoupon()}>Edit</button>
        </div>
        </div>            
        </div>
        </>
    )
}