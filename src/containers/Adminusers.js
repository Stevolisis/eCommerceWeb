import {React} from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Adminusers(){
   // const navigate=useNavigate();
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
            'User Deleted.',
            'success'
          )
        }
      })
   })

    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
            <p>Users</p>
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
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Orders</th>
            <th>WishList</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>

            <tr>
            <td>James Saint</td>
            <td>jamessaint@gmail.com</td>
            <td>+234 9234568923</td>
            <td>4</td>
            <td>6</td>
            <td>10/06/2022</td>
            <td><Link to='/admin/edituser/sdh56g'><i className='fa fa-edit'/></Link></td>
            <td><button onClick={()=>deletespec()}>Delete</button></td>
            </tr>

            <tr>
            <td>James Saint</td>
            <td>jamessaint@gmail.com</td>
            <td>+234 9234568923</td>
            <td>4</td>
            <td>6</td>
            <td>10/06/2022</td>
            <td><Link to='/admin/edituser/sdh56g'><i className='fa fa-edit'/></Link></td>
            <td><button onClick={()=>deletespec()}>Delete</button></td>
            </tr>

            <tr>
            <td>James Saint</td>
            <td>jamessaint@gmail.com</td>
            <td>+234 9234568923</td>
            <td>4</td>
            <td>6</td>
            <td>10/06/2022</td>
            <td><Link to='/admin/edituser/sdh56g'><i className='fa fa-edit'/></Link></td>
            <td><button onClick={()=>deletespec()}>Delete</button></td>
            </tr>

            <tr>
            <td>James Saint</td>
            <td>jamessaint@gmail.com</td>
            <td>+234 9234568923</td>
            <td>4</td>
            <td>6</td>
            <td>10/06/2022</td>
            <td><Link to='/admin/edituser/sdh56g'><i className='fa fa-edit'/></Link></td>
            <td><button onClick={()=>deletespec()}>Delete</button></td>
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