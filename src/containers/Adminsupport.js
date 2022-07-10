import {React} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Accordion2 from './Accordion2';
import Swal from 'sweetalert2';

export default function Adminsupport(){
    const navigate=useNavigate();
    const addspec=(()=>{
        Swal.fire(
          'Successful!',
          'Updated Successful.',
          'success'
        )
        });

        const deletespec=(()=>{
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'F.A.Q Deleted.',
                    'success'
                  )
                }
              })
           })

    return(

        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
            <p>Customer support </p>
            </div>

            <div className='addcategcon'>
            <div className='usereditadditionalinfocon' style={{display:'flex',alignItems:'center',overflowY:'auto'}}>
            <div className='customercarerecog'>
            <div><i className='fa fa-rocket'/></div>
            <h2>GrandPro Customer Care</h2>
            <p>How can we help you?</p>
            </div>
            <div className='usereditadditionalinfo' >
            <p>Choose image</p>
            <input type='file'/>
            <p>Heading 1</p>
            <input type='text' />
            <p>heading 2</p>
            <input type='text' />
            <div className='usereditbtn' style={{marginTop:'15px'}}>
        <button onClick={()=>addspec()}>UPDATE</button>
        </div>
            </div>
            
        </div>

        <div className='customercarelinks'>
        <Link to='/' style={{background:'#128C7E'}}><i className='fa fa-whatsapp'/>Whatsapp</Link>
        <Link to='/' style={{background:'#3b5998'}}><i className='fa fa-facebook'/>Facebook</Link>
        <Link to='/' style={{background:'#00acee'}}><i className='fa fa-twitter'/>Twitter</Link>
        <Link to='/' style={{background:'linear-gradient(40deg,#e95950,#bc2a8d)'}}><i className='fa fa-instagram'/>Instagram</Link>
        </div>
        <div className='usereditnumbercon'>

        <div className='usereditnumber'>
        <div className='usereditprefix'>
            <p>Status</p>
            <select>
                <option defaultValue='selected' value='active'>Activate</option>
                <option value='deactive'>Deativate</option>
            </select>
        </div>
        <div className='usereditphonenumber'>
            <p>Whatsapp Link</p>
            <input type='text' />
        </div>
        </div>

        <div className='usereditnumber'>
        <div className='usereditprefix'>
            <p>Status</p>
            <select>
                <option defaultValue='selected' value='active'>Activate</option>
                <option value='deactive'>Deativate</option>
            </select>
        </div>
        <div className='usereditphonenumber'>
            <p>Facebook Link</p>
            <input type='text' />
        </div>
        </div>
        </div>


        <div className='usereditnumbercon'>

        <div className='usereditnumber'>
        <div className='usereditprefix'>
            <p>Status</p>
            <select>
                <option defaultValue='selected' value='active'>Activate</option>
                <option value='deactive'>Deativate</option>
            </select>
        </div>
        <div className='usereditphonenumber'>
            <p>Twitter Link</p>
            <input type='text' />
        </div>
        </div>

        <div className='usereditnumber'>
        <div className='usereditprefix'>
            <p>Status</p>
            <select>
            <option defaultValue='selected' value='active'>Activate</option>
            <option value='deactive'>Deativate</option>
        </select>
        </div>
        <div className='usereditphonenumber'>
            <p>Instagram Link</p>
            <input type='text' />
        </div>
        </div>

        </div>
        <div className='usereditbtn'>
        <button onClick={()=>addspec()}>UPDATE</button>
        </div>
        <div className='customercare2heading' style={{marginTop:'20px'}}>
    <h2>Fequently Asked Questions</h2> <button onClick={()=>navigate('/admin/addfaq')}>Add F.A.Q</button> </div>

<div className='customercare2'>
<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide1'
editdelid='fgh245t'
deletespec={deletespec}
/>

<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide2'
editdelid='fgh245t'
deletespec={deletespec}
/>
<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide3'
editdelid='fgh245t'
deletespec={deletespec}
/>
<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide4'
editdelid='fgh245t'
deletespec={deletespec}
/>
<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide5'
editdelid='fgh245t'
deletespec={deletespec}
/>
<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide6'
editdelid='fgh245t'
deletespec={deletespec}
/>
<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide7'
editdelid='fgh245t'
deletespec={deletespec}
/>

<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide8'
editdelid='fgh245t'
deletespec={deletespec}
/>

<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide9'
editdelid='fgh245t'
deletespec={deletespec}
/>

<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide10'
editdelid='fgh245t'
deletespec={deletespec}
/>
</div>

            </div>
            </div>
        </>
    )
}