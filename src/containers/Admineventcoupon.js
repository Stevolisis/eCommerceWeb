import {React} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Admineventcoupon(){
    const navigate=useNavigate();
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
                'Event Deleted.',
                'success'
              )
            }
          })
       })

       const deletespec2=(()=>{
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
                'Coupon Deleted.',
                'success'
              )
            }
          })
       })

    return(
        <>
        
        <div className='admindashcon'>
        <div className='userorderheading'>
            <p>Events</p>
            <button onClick={()=>navigate('/admin/addevent')}>ADD NEW</button>
            </div>
        <div className='admincategcon'>

            <div className='adminfilterscon'>
            <div className='adminfilters'>
                    <input type='text' placeholder='Search...'/>
                </div>
                <div className='adminfilters'>
                    <select>
                    <option defaultValue='All Category'>All Category</option>
                    <option>Phones</option>
                    <option>Shirts</option>
                    <option>Home Appliances</option>
                    <option>Underwears</option>
                    </select>
                    <select>
                    <option defaultValue='All Category'>Recent Added</option>
                    <option>High product</option>
                    <option>Desc</option>
                    <option>Home Appliances</option>
                    </select>
                </div>
            </div>



            <div className='adminstat3con'>
        <div className='adminstat3'>
            <div className='adminstat3info2'>
            <table>
            <tbody>

            <tr>
            <th>Title</th>
            <th>Banner Color</th>
            <th>Valid Till</th>
            <th>Total Products</th>
            <th>Sold</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Arrange</th>
            </tr>

            <tr>
            <td>Flash Deals</td>
            <td>Crimson</td>
            <td>10/06/2022</td>
            <td>19</td>
            <td>12</td>
            <td><Link to='/admin/editcoupon/wdhfvj44'><i className='fa fa-edit'/></Link></td>
            <td><button onClick={()=>deletespec()}>Delete</button></td>
            <td><i className='fa fa-bars'/></td>
            </tr>

            <tr>
            <td>Special Category</td>
            <td>Crimson</td>
            <td>10/06/2022</td>
            <td>19</td>
            <td>12</td>
            <td><Link to='/admin/editcoupon/wdhfvj44'><i className='fa fa-edit'/></Link></td>
            <td><button onClick={()=>deletespec()}>Delete</button></td>
            <td><i className='fa fa-bars'/></td>
            </tr>

            <tr>
            <td>Grandpro New Release</td>
            <td>Crimson</td>
            <td>10/06/2022</td>
            <td>19</td>
            <td>12</td>
            <td><Link to='/admin/editcoupon/wdhfvj44'><i className='fa fa-edit'/></Link></td>
            <td><button onClick={()=>deletespec()}>Delete</button></td>
            <td><i className='fa fa-bars'/></td>
            </tr>

            <tr>
            <td>Grandpro Brands</td>
            <td>Crimson</td>
            <td>10/06/2022</td>
            <td>19</td>
            <td>12</td>
            <td><Link to='/admin/editcoupon/wdhfvj44'><i className='fa fa-edit'/></Link></td>
            <td><button onClick={()=>deletespec()}>Delete</button></td>
            <td><i className='fa fa-bars'/></td>
            </tr>

            </tbody>
            </table>
            </div>
        </div>
        <div className='adminmorebtn'>
            <button>See More</button>
        </div>
        </div>

        </div>

        <div className='userorderheading'>
            <p>Coupon</p>
            <button onClick={()=>navigate('/admin/addcoupon')}>ADD NEW</button>
            </div>
            <div className='admincategcon'>

<div className='adminfilterscon'>
<div className='adminfilters'>
        <input type='text' placeholder='Search...'/>
    </div>
    <div className='adminfilters'>
        <select>
        <option defaultValue='All Category'>All Category</option>
        <option>Phones</option>
        <option>Shirts</option>
        <option>Home Appliances</option>
        <option>Underwears</option>
        </select>
        <select>
        <option defaultValue='All Category'>Recent Added</option>
        <option>High product</option>
        <option>Desc</option>
        <option>Home Appliances</option>
        </select>
    </div>
</div>



<div className='adminstat3con'>
<div className='adminstat3'>
<div className='adminstat3info2'>
<table>
<tbody>

<tr>
<th>Coupon Title</th>
<th>Code</th>
<th>Offer Value</th>
<th>Offer Type</th>
<th>Valid Till</th>
<th>Status</th>
<th>Edit</th>
<th>Delete</th>
</tr>

<tr>
<td>Restraunt 15% Offer</td>
<td>Crimson</td>
<td>10/06/2022</td>
<td>19</td>
<td>12</td>
<td>Active</td>
<td><Link to='/admin/editcoupon/wdhfvj44'><i className='fa fa-edit'/></Link></td>
<td><button onClick={()=>deletespec2()}>Delete</button></td>
</tr>

<tr>
<td>Restraunt 15% Offer</td>
<td>Crimson</td>
<td>10/06/2022</td>
<td>19</td>
<td>12</td>
<td>Active</td>
<td><Link to='/admin/editcoupon/wdhfvj44'><i className='fa fa-edit'/></Link></td>
<td><button onClick={()=>deletespec2()}>Delete</button></td>
</tr>

<tr>
<td>Restraunt 15% Offer</td>
<td>Crimson</td>
<td>10/06/2022</td>
<td>19</td>
<td>12</td>
<td>Active</td>
<td><Link to='/admin/editcoupon/wdhfvj44'><i className='fa fa-edit'/></Link></td>
<td><button onClick={()=>deletespec2()}>Delete</button></td>
</tr>

<tr>
<td>Restraunt 15% Offer</td>
<td>Crimson</td>
<td>10/06/2022</td>
<td>19</td>
<td>12</td>
<td>Active</td>
<td><Link to='/admin/editcoupon/wdhfvj44'><i className='fa fa-edit'/></Link></td>
<td><button onClick={()=>deletespec2()}>Delete</button></td>
</tr>

</tbody>
</table>
</div>
</div>
<div className='adminmorebtn'>
<button>See More</button>
</div>
</div>

</div>
   
        </div>
        </>
    )
}