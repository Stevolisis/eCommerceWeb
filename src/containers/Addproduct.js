import {React, useRef,useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import { MultiSelect } from 'react-multi-select-component';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function Addproduct({type}){
    const editorRef=useRef();
    const [selected,setSelected]=useState([]);
    const [imggallerypreview,setImggallerypreview]=useState([]);

    const options = [
        { value: 'Nike', label: 'categories' },
        { value: 'gafia', label: 'products' },
        { value: 'Rexona', label: 'users' },
        { value: 'Jeep', label: 'staffs' }, 
        { value: 'Tesla', label: 'SMS Management' },
        { value: 'Jordan', label: 'Email Management' }, 
        { value: 'Gucci', label: 'Banner Images' }, 
        { value: "D'or", label: 'Customer Support' }, 
        { value: 'Italy', label: 'Events & Coupons' }, 
        { value: 'Haas', label: 'Analytics' }, 
        { value: 'Ford', label: 'Payment Management' } 
      ];

     async function handleSumbit(e){
        console.log(selected[0].value);
        e.preventDefault();
        const formData=new FormData(e.target)
        formData.append('category',JSON.stringify(selected));

        try{

        const res=await axios.post('http://localhost:80/products/addproduct',formData,{withCredentials:true});
        let data=res.data.data;
        if(data==='Error Occured'||data==='Invalid Category'||data==='Product Exist, pls choose another'||data==='Error Occured At Save'){
            Swal.fire(
                'Error!',
                `Data Done: ${data}`,
                'warning'
            );
        }else{
            Swal.fire(
                'Successful!',
                `Data Done: ${data}`,
                'success'
            );
            //e.target.reset();
        }
      

        }catch(err){
            Swal.fire(
                'Error!',
                `Error In Front ${err}`,
                'warning'
              )
        }
     }

    function imggalleryPreview(e){
        setImggallerypreview([])
        const toSet=Array.from(e.target.files);
        toSet.forEach(set=>{
            setImggallerypreview(oldstat=>[...oldstat,URL.createObjectURL(set)])
        });
    }




    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
        <p>Add Product</p>
        </div>
        <form onSubmit={handleSumbit}>
        <div className='addcategcon'>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Name</p>
            <input name='name' type='text'/>
            </div>
        </div>
        
        <div className='admineditnamecon2'>
            <div className='admineditname'>
            <p>Category</p>
            <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy='Select'
            />
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Count in Stock</p>
            <input name='stock' type='number'/>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Regular price</p>
            <input name='regular_price' type='number'/>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Sale Price</p>
            <input name='sale_price' type='number'/>
            </div>
        </div>


        <div className='admineditnamecon'>
        <div className='admineditname'>
        <p>Product details</p>
        <div className='editorcon'>
            <Editor
            onInit={(evt,editor)=> editorRef.current=editor}
            init={{
                menubar:false
            }}
            />
        </div>
        {/* <textarea/> */}
        </div>
    </div>
       
       <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Status</p>
            <select name='status'>
            <option defaultValue>Active</option>
            <option>Deactive</option>
            </select>
            </div>
        </div>


        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Image Gallery</p>
            <div className='previewimg2' >
            {
            imggallerypreview.map((imgprev,i)=>{
                return (
            <div className='previewimg' key={i}>
            <img src={imgprev} alt='addimgGallery'/>
            </div>
                )
            })
            }
            </div>
            <input name='img_gallery' type='file' multiple onChange={imggalleryPreview} />
        </div>
        </div>

        <div className='usereditbtn'>
        <button>ADD</button>
        </div>
        </div>  
        </form>          
        </div>
        </>
    )
}