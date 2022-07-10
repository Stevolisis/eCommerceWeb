import {React, useRef,useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import { MultiSelect } from 'react-multi-select-component';
import Swal from 'sweetalert2';

export default function Addproduct({type}){
    const editorRef=useRef();
    const [selected,setSelected]=useState([]);
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

      const addproduct=(()=>{
        Swal.fire(
          'Successful!',
          'Product Added.',
          'success'
        )
        });

    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
        <p>Add Product</p>
        </div>
        <div className='addcategcon'>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Name</p>
            <input type='text' />
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
            <input type='number'/>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Price</p>
            <input type='number'/>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Discount Price</p>
            <input type='number'/>
            </div>
        </div>

        {type==='event'?
         <div className='admineditnamecon'>
         <div className='admineditname'>
         <p>Product details</p>
         <div className='editorcon'>
           <input type='disabled' value='Flash Deals'/>
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
            <p>Thumbnail(Image)</p>
            <img src='/media3/advert6.jpg' alt='addcategimg'/>
            <input type='file'/>
        </div>
        </div>

        <div className='usereditbtn'>
        <button onClick={()=>addproduct()}>ADD</button>
        </div>
        </div>            
        </div>
        </>
    )
}