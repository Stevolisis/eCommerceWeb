import {React, useRef,useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import { MultiSelect } from 'react-multi-select-component';
import Swal from 'sweetalert2';
import axios from 'axios';

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
        const product={
            name:'Nike',
            category:'Nike',
            stock:8,
            price:250,
            discount_price:200,
            product_details:`
            NIVEA MEN DEEP
            Anti-Perspirant Deodorant Spray with a Black Charcoal formula acts powerfully against bacteria and sweat while eliminating body odour with a modern and masculine Dark Wood Fragrance. The effective formula leaves you feeling as if you have just stepped out of the shower and gives you long-lasting dryness all day. The Spray is the 48 hour deodorant men need to get through the day and is combined with a deep and invigorating scent.Specially designed for men, NIVEA's Anti-Perspirant men's deodorant spray protects and cares for your skin during the day with its anti-bacterial Black Charcoal formula while leaving no black residue on skin or clothes. Skin tolerance dermatologically approved; the spray is kind to your skin whilst offering great protection from sweat and body odour.
            Directions:
            Apply in the morning or after showering. Shake well before use and then hold the can 15cm from the underarm and spray. Do not apply to broken or irritated skin. Allow product to dry completely before dressing. Product benefits; Anti-Perspirant Deodorant Dark Wood Fragrance Black Charcoal Formula Leaves No Residue
            INGREDIENTS
            Aluminum Chlorohydrate, PPG-15 Stearyl Ether, Steareth-2, Steareth-21, Parfum, Persea Gratissima Oil, Charcoal Powder, Trisodium EDTA, BHT, Linalool, Limonene, Citronellol, Alpha-Isomethyl Ionone, Geraniol
            `,
            img_link:'Nikepants.jpg'
           }

            axios.post('http://localhost:80/addproduct',{product},{withCredentials:true})
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
                    'Product Added.',
                    'success'
                  )
            });

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