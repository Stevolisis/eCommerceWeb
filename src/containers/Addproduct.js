import {React, useRef,useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import { MultiSelect } from 'react-multi-select-component';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function Addproduct({type}){
    const editorRef=useRef();
    const product_details=useRef();
    const [selected,setSelected]=useState([]);
    const [imgpreview,setImgpreview]=useState('');


    const options = [
        { value: 'categories', label: 'categories' },
        { value: 'products', label: 'products' },
        { value: 'users', label: 'users' },
        { value: 'staffs', label: 'staffs' }, 
        { value: 'SMS Management', label: 'SMS Management' },
        { value: 'Email Management', label: 'Email Management' }, 
        { value: 'Banner Images', label: 'Banner Images' }, 
        { value: 'Customer Support', label: 'Customer Support' }, 
        { value: 'Events & Coupons', label: 'Events & Coupons' }, 
        { value: 'Analytics', label: 'Analytics' }, 
        { value: 'Payment Management', label: 'Payment Management' } 
      ];

     async function handleSumbit(e){
        e.preventDefault();
        const formData=new FormData(e.target)
        formData.append('category',selected);
        formData.append('product_details',product_details);

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
            e.target.reset();
        }
      

        }catch(err){
            Swal.fire(
                'Error!',
                `Error In Front ${err}`,
                'warning'
              )
        }
     }


     function imgPreview(e){
        setImgpreview(URL.createObjectURL(e.target.files[0]));
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
            <input name='name' type='text' />
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

        {type==='event'?
         <div className='admineditnamecon'>
         <div className='admineditname'>
         <p>Product details</p>
         <div className='editorcon'>
           <input ref={product_details} type='disabled' value='Flash Deals'/>
         </div>
         </div>
         </div>
        :
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
        }
       
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
            <p>Thumbnail(Image)</p>
            <div className='previewimg'>
            <img src={imgpreview} alt='addcategimg'/>
            </div>
            <input name='thumbnail' type='file' onChange={imgPreview}/>
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