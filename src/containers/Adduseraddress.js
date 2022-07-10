import {React} from 'react';
import Swal from 'sweetalert2';

export default function Adduseraddress(){
    const addspec=(()=>{
        Swal.fire(
          'Successful!',
          'Added to your Addresses.',
          'success'
        )
        });

    return(
        <>
          <div className='usermaincon'>
        <div className='userorderheading'><p>Add Address</p></div>
        <div className='userorderscon'>
         
        <div className='usereditnamecon'>
        <div className='usereditname'>
            <p>First Name</p>
            <input type='text'/>
        </div>
        <div className='usereditname'>
            <p>Last Name</p>
            <input type='text' />
        </div>

        </div>

        <div className='usereditnumbercon'>

        <div className='usereditnumber'>
        <div className='usereditprefix'>
            <p>Prefix</p>
            <select>
                <option defaultValue='selected' value='+234'>Nigeria (+234)</option>
            </select>
        </div>
        <div className='usereditphonenumber'>
            <p>Phone Number</p>
            <input type='text' />
        </div>
        </div>

        <div className='usereditnumber'>
        <div className='usereditprefix'>
            <p>Prefix</p>
            <select>
                <option defaultValue='selected' value='+234'>Nigeria (+234)</option>
            </select>
        </div>
        <div className='usereditphonenumber'>
            <p>Phone Number 2</p>
            <input type='text' />
        </div>
        </div>

        </div>

        <div className='usereditnamecon'>
        <div className='usereditname'>
            <p>Address</p>
            <input type='text' placeholder='Street address, P.O.box...'/>
        </div>
        <div className='usereditname'>
            <p>Zip/Postal Code</p>
            <input type='text'/>
        </div>

        </div>

        <div className='usereditadditionalinfocon'>
            <div className='usereditadditionalinfo'>
            <p>Additional Information</p>
            <input type='text' />
            </div>
        </div>

        <div className='usereditloactioncon'>
            <div className='usereditloaction'>
            <p>Country</p>
            <select>
            <option defaultValue='selected' value='+234'>Afghanistan</option>
            <option value='+234'>Angola</option>
            <option value='+234'>Ethopia</option>
            <option value='+234'>Germany</option>
            </select>
            </div>

            <div className='usereditloaction'>
            <p>State</p>
            <select>
            <option defaultValue='selected' value='+234'>Abia</option>
            <option value='+234'>Adamawa</option>
            <option value='+234'>Bauchi</option>
            <option value='+234'>Plateau</option>
            </select>
            </div>

            <div className='usereditloaction'>
            <p>Country</p>
            <select>
            <option defaultValue='selected' value='+234'>Yelwa</option>
            <option value='+234'>Darazo </option>
            <option value='+234'>Wunti </option>
            <option value='+234'>ATBU </option>
            </select>
            </div>
        </div>

        <div className='usereditbtn'>
        <button onClick={()=>addspec()}>ADD</button>
        </div>
        </div>    
        </div>    
        </>
    )
}