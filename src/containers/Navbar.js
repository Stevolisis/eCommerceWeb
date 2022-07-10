import {React} from 'react';
import $ from 'jquery';

export default function Navbar({id,setTrigger,admin}){
    $(window).resize(()=>{
     if(window.innerWidth>750){
        setTrigger(false);
       }
    })


    $(window).click((e)=>{
       if(window.innerWidth<=750){
        if(e.target.className==='popupaddresscon'||e.target.className==='navlink'){
            setTrigger(false);
            $(`${id}`).css('margin-left','-50%');
        }
       }
       
        
      });  



    return(
<>
      {admin==='true' ?
              <div className={id+id} id='nav'>
              <i  className='fa fa-bars' onClick={()=>{
              $(`${id}`).css('margin-left','0');
              setTrigger(true);
             }}></i></div>
             :
       <div className={id+id} id='nav'>
       <i  className='fa fa-bars' onClick={()=>{
       $(`${id}`).css('margin-left','0');
       setTrigger(true);
      }}></i></div>
        
    }
</>
    )
}
