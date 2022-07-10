import {React} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Addevent(){
    const navigate=useNavigate();

    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
        <p>Add Event</p>
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
            <p>Banner Color</p>
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
        <button onClick={()=>navigate('/admin/addproduct')}>Add Event</button>
        </div>
        </div>            
        </div>
        </>
    )
}