import {React, useRef,useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import { MultiSelect } from 'react-multi-select-component';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function Addproduct({type}){
    const editorRef=useRef();
    const name=useRef();
    const stock=useRef();
    const regular_price=useRef();
    const sale_price=useRef();
    const product_details=useRef();
    const img_link=useRef();
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

     async function handleSumbit(e){
        e.preventDefault();
        const product={
            name:name.current.value,
            category:["Musical Instrumentse","Niker","Nikel"],
            stock:stock.current.value,
            regular_price:regular_price.current.value,
            sale_price:sale_price.current.value,
            product_details: 'Yeah Network Shit',
            img_link:img_link.current.value
        }
console.log(product);
        try{

        const res=await axios.post('http://localhost:80/addproduct',{product},{withCredentials:true});
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
            <input ref={name} type='text' />
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
            <input ref={stock} type='number'/>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Regular price</p>
            <input ref={regular_price} type='number'/>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Sale Price</p>
            <input ref={sale_price} type='number'/>
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
            <p>Thumbnail(Image)</p>
            <img src='/media3/advert6.jpg' alt='addcategimg'/>
            <input ref={img_link} type='file'/>
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