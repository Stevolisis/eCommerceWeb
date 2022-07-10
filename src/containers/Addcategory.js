import {React} from 'react';
import Swal from 'sweetalert2';

export default function Addcategory(){
    const addcategory=(()=>{
        Swal.fire(
          'Successful!',
          'Category Added.',
          'success'
        )
        });

    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
        <p>Add Category</p>
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
            <p>Slug</p>
            <input type='text'/><p>the 'slug is the URL-friendly version of the 
                name. It should contain only lowercase letters, numbers and hyphens'</p>
        </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Thumbnail(Image)</p>
            <img src='/media3/advert6.jpg' alt='addcategimg'/>
            <input type='file'/>
        </div>
        </div>

        <div className='usereditbtn'>
        <button onClick={()=>addcategory()}>ADD</button>
        </div>
        </div>            
        </div>
        </>
    )
}