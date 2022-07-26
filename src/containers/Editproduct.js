import {React, useRef,useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Editor} from '@tinymce/tinymce-react';
import { MultiSelect } from 'react-multi-select-component';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Editproduct(){
    const {id}=useParams();
    const editorRef=useRef();
    const [selected,setSelected]=useState([]);
    const [name,setName]=useState([]);
    const [stock,setStock]=useState([]);
    const [regular_price,setRegular_price]=useState([]);
    const [sale_price,setSale_price]=useState([]);
    const [status,setStatus]=useState([]);
    const [options,setOptions]=useState([]);
    const [imggallerypreview,setImggallerypreview]=useState([]);
    const cancelalert=useRef(true)



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
                product.category.forEach(option=>{
                setSelected(oldOption=>[...oldOption,{value:option.name, label:option.name}])
                })                
            }

        }).catch(err=>{
            Swal.fire(
                'Error At Axios!',
                `Error Occured: ${err}`,
                'warning'
              )
        })
    }

    const loadCategories=()=>{
        axios.get('http://localhost:80/categories/getcategories')
        .then(res=>{
            let response=res.data.data;
            console.log(response);
            if(response==='Error Occured'){
                Swal.fire(
                    'Error After Fetch!',
                    `Error Occured: ${response}`,
                    'warning'
                  )
            }else{
               response.forEach(option=>{
                setOptions(oldOption=>[...oldOption,{value:option.name, label:option.name}])
               })

            }
        }).catch(err=>{
            Swal.fire(
                'Error At Axios2!',
                `Error Occured: ${err}`,
                'warning'
              )
        })
    }


    function handleSumbit(e){
        e.preventDefault();
        const formData=new FormData(e.target);
        formData.append('category',JSON.stringify(selected));

            axios.put(`http://localhost:80/products/editproduct/${id}`,formData,{withCredentials:true})
            .then(res=>{
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
            }).catch(err=>{
        
                Swal.fire(
                    'Error!',
                    `Error In Axios ${err}`,
                    'warning'
                  )
            })

            
    }

    console.log(options)

      
    function imggalleryPreview(e){
        setImggallerypreview([])
        const toSet=Array.from(e.target.files);
        toSet.forEach(set=>{
            setImggallerypreview(oldstat=>[...oldstat,URL.createObjectURL(set)])
        });
}

useEffect(()=>{
    if(cancelalert.current){
        cancelalert.current=false;
        loadProduct();
        loadCategories();
    }

   },[])



    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
        <p>Edit Product({id})</p>
        </div>
        <form onSubmit={handleSumbit}>
        <div className='addcategcon'>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Name</p>
            <input type='text' name='name' value={name} onChange={(e)=> setName(e.target.value)}/>
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
            <input type='number' name='stock' value={stock} onChange={(e)=> setStock(e.target.value)}/>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Regular Price</p>
            <input type='number' name='regular_price' value={regular_price} onChange={(e)=> setRegular_price(e.target.value)}/>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Sale Price</p>
            <input type='number' name='sale_price' value={sale_price} onChange={(e)=> setSale_price(e.target.value)}/>
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
            <select name='status' value={status} onChange={(e)=>setStatus(e.target.value)}>
            <option value='Active'>Active</option>
            <option value='Deactive'>Deactive</option>
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
            <input type='file' name='img_gallery' multiple onChange={imggalleryPreview}/>
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