import {React} from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Adminbannerimg(){
    const addspec=(()=>{
        Swal.fire(
          'Successful!',
          'Updated Successfully.',
          'success'
        )
        });

    return(
        <>
            <div className='usermaincon'>
        <div className='userorderheading'><p>Banner Images</p></div>
        <div className='userorderscon'>
         
        <div className='usereditnamecon'>
        <div className='usereditname'>
            <p>Banner 1</p>
            <input type='file' />
        </div>
        <div className='usereditname'>
            <p>Banner 2</p>
            <input type='file' />
        </div>

        </div>
        <div className='usereditadditionalinfocon'>
            <div className='usereditadditionalinfo'>
            <p>Slider Images</p>
            <input type='file' multiple/>
            <p>select multiple images for you slider. Recommended number of images (6)</p>
            </div>
        </div>


<div className='section4'>
<div className='midbannercon'>

<div className='midbanner'>
<Link to='/product'>
<img src='/media3/advert4.jpg' alt='midbanner' /> 
</Link>
</div>
<div className='midbanner'>
<Link to='/product'>
<img src='/media3/advert5.jpg' alt='midbanner' />
</Link>
</div>

</div>
</div>

<div className='section4'>
<div className='midbannercon'>

<div className='midbanner'>
<Link to='/product'>
<img src='/media3/advert3.jpg' alt='midbanner' />
</Link>
</div>
<div className='midbanner'>
<Link to='/product'>
<img src='/media3/advert7.jpg' alt='midbanner' />
</Link>
</div>

</div>
</div>



        <div className='usereditnamecon'>
        <div className='usereditname'>
            <p>Banner 3</p>
            <input type='file'/>
        </div>
        <div className='usereditname'>
            <p>Banner 4</p>
            <input type='file' />
        </div>
        </div>
        <div className='usereditnamecon' style={{padding:'13px 10px'}}>
        <div className='usereditname'>
            <p>Banner 5</p>
            <input type='file'/>
        </div>
        <div className='usereditname'>
            <p>Banner 6</p>
            <input type='file' />
        </div>

        </div>

        <div className='usereditbtn'>
        <button onClick={()=>addspec()}>UPDATE</button>
        </div>
        </div>    
        </div>    
        </>
    )
}