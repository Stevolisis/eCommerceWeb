import {React} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function Addcategory(){
    const addcategory=(()=>{

       const category={
        name:'Nike',
        slug:'nikebrand',
        img_link:'Niketoolkit.jpg'
       }
        axios.post('http://localhost:80/addcategory',{category},{withCredentials:true})
        .then(res=>{
            let data=res.data.data;

            Swal.fire(
                'Successful!',
                `Data Done: ${data}`,
                'success'
              )
        }).catch(err=>{

            Swal.fire(
                'Successful!',
                `Error Occured: ${err}`,
                'success'
              )
        });
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