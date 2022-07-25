import {React, useRef,useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Editor} from '@tinymce/tinymce-react';
import { MultiSelect } from 'react-multi-select-component';
import Select from 'react-select';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Editproduct(){
    const {id}=useParams();
    const editorRef=useRef();
    const [selected,setSelected]=useState([        { value: 'Nike', label: 'Nike',complete:true },
    { value: 'gafia', label: 'gafia' }]);
    const [selected2,setSelected2]=useState([        { value: 'Nike', label: 'Nike',complete:true },
    { value: 'gafia', label: 'gafia' }]);
    const [name,setName]=useState([]);
    const [stock,setStock]=useState([]);
    const [regular_price,setRegular_price]=useState([]);
    const [sale_price,setSale_price]=useState([]);
    const [status,setStatus]=useState([]);
    const [imggallerypreview,setImggallerypreview]=useState([]);


    const options = [
        { value: 'Nike', label: 'Nike',complete:true },
        { value: 'gafia', label: 'gafia' },
        { value: 'Rexona', label: 'Rexona' },
        { value: 'Jeep', label: 'Jeep' }, 
        { value: 'Tesla', label: 'Tesla' },
        { value: 'Jordan', label: 'Jordan' }, 
        { value: 'Gucci', label: 'Gucci' }, 
        { value: "D'or", label: "D'or" }, 
        { value: 'Italy', label: 'Italy' }, 
        { value: 'Haas', label: 'Haas' }, 
        { value: 'Ford', label: 'Ford' } 
      ];

      const loadProduct=()=>{
        axios.get(`http://localhost:80/products/getproductforedit/${id}`)
        .then(res=>{
            let product=res.data.data;
            if(product==='Error Occured'){
                Swal.fire(
                    'Error After Fetch!',
                    `Error Occured: ${product}`,
                    'warning'
                  )
            }else{
                setName(product.name);
                setStock(product.stock);
                setRegular_price(product.regular_price);
                setSale_price(product.sale_price);
                setStatus(product.status);
                setImggallerypreview(product.img_gallery);
            }

        }).catch(err=>{
            Swal.fire(
                'Error At Axios!',
                `Error Occured: ${err}`,
                'warning'
              )
        })
    }


      
    function imggalleryPreview(e){
        setImggallerypreview([])
        const toSet=Array.from(e.target.files);
        toSet.forEach(set=>{
            setImggallerypreview(oldstat=>[...oldstat,URL.createObjectURL(set)])
        });
}

useEffect(()=>{
    loadProduct();
   },[])



    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
        <p>Edit Product({id})</p>
        </div>
        <form>
        <div className='addcategcon'>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Name</p>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
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

        <div className='admineditnamecon2'>
            <div className='admineditname'>
            <p>Category</p>

            <Select
            options={options}
            onChange={setSelected2}
            defaultValue={selected2}
            isMulti
            />

            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Count in Stock</p>
            <input type='number' value={stock} onChange={(e)=> setStock(e.target.value)}/>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Regular Price</p>
            <input type='number' value={regular_price} onChange={(e)=> setRegular_price(e.target.value)}/>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Sale Price</p>
            <input type='number' value={sale_price} onChange={(e)=> setSale_price(e.target.value)}/>
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
            <p>Thumbnail(Image)</p>
            <div className='previewimg2' >
            {
            imggallerypreview.map((imgprev,i)=>{
                return (
            <div className='previewimg' key={i}>
            <img src={imgprev} alt={imgprev}/>
            </div>
                )
            })
            }
            </div>
            <input type='file' multiple onChange={imggalleryPreview}/>
        </div>
        </div>

        <div className='usereditbtn'>
        <button>Edit</button>
        </div>
        </div> 
        </form>           
        </div>
        </>
    )
}