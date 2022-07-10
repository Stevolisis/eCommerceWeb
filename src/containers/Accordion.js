import {React} from 'react';
import Accordtoggle from './Accordtoggle';
import Accordtoggle2 from './Accordtoggle2';
import Reviews from './Reviews';

export default function Accordion({heading,preshow,children,id,type}){

    return(
<>
<div className='productdetailscon'>

<div className='summary'>
<div><h3>{heading}</h3></div>
<div className='slideicon'>
{type==='non-slide' ? <Accordtoggle id={id}/> :<Accordtoggle2 id={id}/>}
</div>
</div>


<div style={{display:preshow==='show' ? 'block' : 'none'}} id='hiddendetails'>
    <Reviews
    listing='some'
    />
</div>


<div className={`${id}`} style={{display:'none'}} id='hiddendetails'>
<div>
{children}
</div>
</div>


</div>
</>
    )
}
