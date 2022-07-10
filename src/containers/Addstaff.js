import {React, useState} from 'react';
import { MultiSelect } from 'react-multi-select-component';
import Swal from 'sweetalert2';

export default function Addstaff(){
    const [selected,setSelected]=useState([]);
    const options = [
        { value: 'categories', label: 'categories' },
        { value: 'products', label: 'products' },
        { value: 'users', label: 'users' },
        { value: 'staffs', label: 'staffs' }, 
        { value: 'SMS Management', label: 'SMS Management' },
        { value: 'Email Management', label: 'Email Management' }, 
        { value: 'Banner Images', label: 'Banner Images' }, 
        { value: 'Customer Support', label: 'Customer Support' }, 
        { value: 'Events & Coupons', label: 'Events & Coupons' }, 
        { value: 'Analytics', label: 'Analytics' }, 
        { value: 'Payment Management', label: 'Payment Management' } 
      ];

      const addstaff=(()=>{
        Swal.fire(
          'Successful!',
          'Staff Added.',
          'success'
        )
        });

    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
        <p>Add Staff</p>
        </div>
        <div className='addcategcon'>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Name</p>
            <input type='text' />
            </div>
        </div>
        
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Phone Number</p>
            <input type='number'/>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Email Address</p>
            <input type='email'/>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Role</p>
            <input type='text'/>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Description</p>
            <textarea/>
            </div>
        </div>

        <div className='admineditnamecon2'>
            <div className='admineditname'>
            <p>Priveledges</p>
            {/* <Select options = {options} 
            isSearchable={true} 
            isMulti={true}
            isOptionSelected={true}/>           */}
            <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy='Select'
            />
            </div>

            
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Status</p>
            <select>
            <option defaultValue='active'>Acive</option>
            <option>Inacive</option>
            </select>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Password</p>
            <input type='password'/>
            </div>
        </div>

        <div className='usereditbtn'>
        <button onClick={()=>addstaff()}>ADD</button>
        </div>
        </div>            
        </div>        
        </>
    )
}