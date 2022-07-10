import {React} from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

export default function Accordtoggle2({id,editdelid,deletespec}){

    return(

        <>
        <div className={id+id+id} style={{display:'none'}}><i  className='fa fa-minus' onClick={()=>{
            $(`.${id}`).slideUp();
            $(`.${id+id}`).css('display','block');
            $(`.${id+id+id}`).css('display','none');
           }} ></i></div>


        <div className={id+id}>
           {editdelid && 
           <>
           <Link to={`/admin/editfaq/${editdelid}`}> <i className='fa fa-edit' style={{padding:'0 0 0 25px',color:'dodgerblue',cursor:'pointer'}}></i></Link>
           <i className='fa fa-trash' style={{padding:'0 25px',color:'red',cursor:'pointer'}} onClick={()=>deletespec()}></i>
           </>}

            <i  className='fa fa-plus' onClick={()=>{
            $(`.${id}`).slideDown();
            $(`.${id+id+id}`).css('display','block');
            $(`.${id+id}`).css('display','none');
           }} ></i>
           </div>
        </>

    )  
}

   // <i className='fa fa-arrow-down' onClick={()=>setStatus(!status)}></i>
