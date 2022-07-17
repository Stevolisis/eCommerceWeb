import {React,useRef,useState} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function Addcategory(){
 const img_link=useRef();

    const addcategory=(()=>{
      console.log(img_link.current.value);

      // const formData = new FormData();
      // formData.append("img_link", img_link);

       const category={
        name:'Rexonal',
        slug:'Rexonabrand',
        img_link:img_link.current.value
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
            <input type='file' accept='image/*' ref={img_link}/>



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