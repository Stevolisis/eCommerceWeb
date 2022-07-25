import {React,useEffect,useState} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Editcategory(){
    const {id}=useParams();
    const [name,setName]=useState('')
    const [slug,setSlug]=useState('')
    const [imgpreview,setImgpreview]=useState('http://localhost:80/media/1658441585321Screenshot_20220612-225205.png');

    const loadCategory=()=>{
        axios.get(`http://localhost:80/categories/getcategoryforedit/${id}`)
        .then(res=>{
            let category=res.data.data;
            if(category==='Error Occured'){
                Swal.fire(
                    'Error After Fetch!',
                    `Error Occured: ${category}`,
                    'warning'
                  )
            }else{
                setName(category.name);
                setSlug(category.slug);
                setImgpreview(category.img_link);
            }

        }).catch(err=>{
            Swal.fire(
                'Error At Axios!',
                `Error Occured: ${err}`,
                'warning'
              )
        })
    }

    const handleSubmit=((e)=>{
        e.preventDefault();
        const formData=new FormData(e.target);

        axios.put(`http://localhost:80/categories/editcategory/${id}`,formData,{withCredentials:true})
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

           useEffect(()=>{
            loadCategory();
           },[])

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
            <div className='previewimg2'>
            <div className='previewimg'>
            <img src={imgpreview} alt='addcategimg'/>
            </div>
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