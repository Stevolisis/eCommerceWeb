import {React,useState} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Editcategory(){
    const {id}=useParams();
    const [name,setName]=useState('gfzfzcr')
    const [slug,setSlug]=useState('gf')
    const [imgpreview,setImgpreview]=useState('http://localhost:80/media/1658441585321Screenshot_20220612-225205.png');

    const handleSubmit=((e)=>{
        const formData=new FormData(e.target);

        axios.patch(`http://localhost:80/categories/editcategory/${id}`,formData,{withCredentials:true})
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

        
        function imgPreview(e){
            setImgpreview(URL.createObjectURL(e.target.files[0]));
           }


    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
        <p>Edit Category ({id})</p>
        </div>
        <form onSubmit={handleSubmit}>
        <div className='addcategcon'>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Name</p>
            <input type='text' name='name' value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>
        </div>
        
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Slug</p>
            <input type='text' name='slug' value={slug} onChange={(e)=> setSlug(e.target.value)}/><p>the 'slug is the URL-friendly version of the 
                name. It should contain only lowercase letters, numbers and hyphens'</p>
        </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Thumbnail(Image)</p>
            <div className='previewimg'>
            <img src={imgpreview} alt='addcategimg'/>
            </div>
            <input type='file' name='thumbnail' onChange={imgPreview}/>
        </div>
        </div>

        <div className='usereditbtn'>
        <button>EDIT</button>
        </div>
        </div>    
        </form>        
        </div>
        </>
    )
}