import {React} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Editcategory(){
    const {id}=useParams();

    const editcategory=(()=>{
       const category={
        name:'Rexonatt',
        slug:'Rexonattbrand',
        img_link:'Rexonatttoolkit.jpg'
       }
       
        axios.put(`http://localhost:80/editcategory/${id}`,{category},{withCredentials:true})
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
        <p>Edit Category ({id})</p>
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
        <button onClick={()=>editcategory()}>EDIT</button>
        </div>
        </div>            
        </div>
        </>
    )
}