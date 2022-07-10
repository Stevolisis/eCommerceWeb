import {React} from 'react';
import $ from 'jquery';

export default function Accordtoggle({id}){

    return(

        <>
        <div className={id+id+id} style={{display:'none'}}><i  className='fa fa-arrow-up' onClick={()=>{
            $(`.${id}`).css('display','none');
            $(`.${id+id}`).css('display','block');
            $(`.${id+id+id}`).css('display','none');
           }} ></i></div>


        <div className={id+id}><i  className='fa fa-arrow-down' onClick={()=>{
            $(`.${id}`).css('display','block');
            $(`.${id+id+id}`).css('display','block');
            $(`.${id+id}`).css('display','none');
           }}></i></div>
        </>

    )  
}

   // <i className='fa fa-arrow-down' onClick={()=>setStatus(!status)}></i>
