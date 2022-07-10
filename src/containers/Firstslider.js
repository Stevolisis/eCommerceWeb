import {React} from 'react';
import { Link } from 'react-router-dom';

export default function Firstslider({nextslide,prevslide,images,currentslide}){


const slides=images.filter((data,i)=>{
        if(i===currentslide){
        return data
        }else{
        return null
        }
    }).map((image,i)=>{
    return (
<Link to='/product' key={i}>
        <div className='slidebanner' 
        style={{backgroundImage:`url(${image.url})`,
        backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
        </div>
</Link>
    )
});



    return(
    <div className='sub2section1'>

{slides}
    
    <div className='slidebtncon'>
    <div className='slidebtn1'>
    <i className='fa fa-arrow-left' onClick={()=>prevslide()}/>
    </div> 
    <div className='slidebtn2'>
    <i className='fa fa-arrow-right' onClick={()=>nextslide()}/>
    </div> 
    </div>

    </div>
    )
}