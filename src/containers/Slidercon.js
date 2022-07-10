import {React,useState,useEffect, useCallback} from 'react'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios';
import Slider from './Slider';
import { Link } from 'react-router-dom';


export default function Slidercon(){
    const [datas,setDatas]=useState([])
    const [currentslide,setCurrentslide]=useState(0)
    const slideslength=datas.length;


    function fetchimages(){
    axios.get('http://localhost:80/fetchimages',{withCredentials:true})
    .then(res=>{
    setDatas(res.data.data);
    }).catch(err=>{
    console.log(err);
   })

    }


  const nextslide=useCallback(()=>{
    setCurrentslide(currentslide===slideslength-1 ? 0 : currentslide+1)
    console.log(currentslide)
  },[currentslide])


    function prevslide(){
setCurrentslide(currentslide===0 ? slideslength-1 : currentslide-1);
    }

    useEffect(()=>{
        fetchimages();
    },[])
    

    setTimeout(nextslide,4000);


    return(

<>
<div className='chartlink' style={{padding:'10px 0 0 0'}}>
    <Link to='/chart'>Image slider</Link>
    <i className='fa fa-arrow-down'></i>
</div>
<div className='body'>
<Slider 
datas={datas}
nextslide={nextslide}
prevslide={prevslide}
currentslide={currentslide}
/>
</div>

<div className='slots'>
    {
        datas.map((data,i)=>{
        if(i===currentslide){
        return(
         <div className='slot' key={i} onClick={()=>setCurrentslide(i)}>
        
        </div>
            )
        }else{
        return(
        <div className='slot2' key={i} onClick={()=>setCurrentslide(i)}>

        </div>
            )
        }

        })
    }

</div>


<div className='chartlink'>
    <Link to='/chart'>Chart Room</Link>
    <i className='fa fa-arrow-right'></i>
</div>

</>

    )
}