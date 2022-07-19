import {React} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function Addcategory(){

    const addcategory=((e)=>{
        e.preventDefault();
    const formData=new FormData(e.target);
       console.log(formData);

        axios.post('http://localhost:80/categories/addcategory',formData,{withCredentials:true})
        .then(res=>{
            let data=res.data.data;

            Swal.fire(
                'Successful!',
                `Data Done: ${data}`,
                'success'
              )
        }).catch(err=>{

            Swal.fire(
                'Error!',
                `Error Occured: ${err}`,
                'warning'
              )
        });
        });

    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
        <p>Add Category</p>
        </div>
        <form onSubmit={addcategory}>
        <div className='addcategcon'>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Name</p>
            <input type='text' name='name'/>
            </div>
        </div>
        
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Slug</p>
            <input type='text' name='slug'/><p>the 'slug is the URL-friendly version of the 
                name. It should contain only lowercase letters, numbers and hyphens'</p>
        </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Thumbnail(Image)</p>
            <input type='file' name='thumbnail'/>

        </div>
        </div>

        <div className='usereditbtn'>
        <button >ADD</button>
        </div>
        </div>
        </form>            
        </div>
        </>
    )
}