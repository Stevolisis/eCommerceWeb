import {React} from  'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Useraddresses({popup,setView}){
    const navigate=useNavigate();
    const setdefault=(()=>{
        Swal.fire({
            title: 'Confirm?',
            text: "Are you sure you want to make this your default address?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Default Address!',
                'This is set as your default address.',
                'success'
              )
            }
          })
       })

    return(
        <>
        <div className='usermaincon'>
        <div className='userorderheading'>
            <p>Address(3)</p>
           {popup==='true'? 
            <button onClick={()=>setView('adduseraddress')}>Add Popup</button>
           :
             <button onClick={()=>navigate('/user/addaddress')}>Add</button>} 
        </div>
        <div className='userorderscon'>
            <div className='useraddresscon'>
            <div className='overview'>

            <div className='overviewdetails'>
            <div><p>ADDRESS BOOK</p></div>
            <div>
            <p><b>Your default shipping address:</b></p>
            <p>Steven Joseph</p>
            <p>Abubakar tafawa balewa university,yelwa campus</p>
            <p>Yelwa / Fed. Poly, Bauchi</p>
            <p>+234 8103987495 </p>
            </div>
            <div>
            {popup==='true'? 
            ''
            :
            <button onClick={()=>navigate('/user/editaddress/2343')}>EDIT ADDRESS</button>
            }
            <button onClick={()=>setdefault()}>SET AS DEFAULT ADDRESS</button>
            </div>
            </div>

            </div>

            <div className='overview'>

            <div className='overviewdetails'>
            <div><p>ADDRESS BOOK</p></div>
            <div>
            <p><b>Your default shipping address:</b></p>
            <p>Steven Joseph</p>
            <p>Abubakar tafawa balewa university,yelwa campus</p>
            <p>Yelwa / Fed. Poly, Bauchi</p>
            <p>+234 8103987495 </p>
            </div>
            <div>
            {popup==='true'? 
            ''
            :
            <button onClick={()=>navigate('/user/editaddress/2343')}>EDIT ADDRESS</button>
            }
            <button onClick={()=>setdefault()}>SET AS DEFAULT ADDRESS</button>
            </div>
            </div>

            </div>

            <div className='overview'>

            <div className='overviewdetails'>
            <div><p>ADDRESS BOOK</p></div>
            <div>
            <p><b>Your default shipping address:</b></p>
            <p>Steven Joseph</p>
            <p>Abubakar tafawa balewa university,yelwa campus</p>
            <p>Yelwa / Fed. Poly, Bauchi</p>
            <p>+234 8103987495 </p>
            </div>
            <div>
            {popup==='true'? 
            ''
            :
            <button onClick={()=>navigate('/user/editaddress/2343')}>EDIT ADDRESS</button>
            }
            <button onClick={()=>setdefault()}>SET AS DEFAULT ADDRESS</button>
            </div>
            </div>

            </div>
            </div>
        </div>    
        </div>    
        </>
    )
}