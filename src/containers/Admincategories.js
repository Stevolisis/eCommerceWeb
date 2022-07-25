import {React} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Admincategories(){
    const navigate=useNavigate();
    const deletecateg=(()=>{
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
                'Category Deleted.',
                'success'
              )
            }
          })
       })

    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
            <p>Categories</p>
            <button onClick={()=>navigate('/admin/addcategory')}>ADD</button>
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
            <th>Img</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Products</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Arrange</th>
            </tr>

            <tr draggable='true'>
            <td><img src='/media3/advert6.jpg' alt='categimgs'/></td>
            <td>Phone Accessories</td>
            <td>phones</td>
            <td>9</td>
            <td>10/06/2022</td>
            <td><Link to='/admin/editcategory/62de9788c65a44226ca7e69e'><i className='fa fa-edit'/></Link></td>
            <td><button onClick={()=>deletecateg()}>Delete</button></td>
            <td><i className='fa fa-bars'/></td>
            </tr>

            <tr draggable='true'>
            <td><img src='/media3/advert6.jpg' alt='categimgs'/></td>
            <td>Phone Accessories</td>
            <td>phones</td>
            <td>8</td>
            <td>10/06/2022</td>
            <td><Link to='/admin/editcategory/62de9788c65a44226ca7e69e'><i className='fa fa-edit'/></Link></td>
            <td><button onClick={()=>deletecateg()}>Delete</button></td>
            <td><i className='fa fa-bars'/></td>
            </tr>

            <tr draggable='true'>
            <td><img src='/media3/advert6.jpg' alt='categimgs'/></td>
            <td>Phone Accessories</td>
            <td>phones</td>
            <td>8</td>
            <td>10/06/2022</td>
            <td><Link to='/admin/editcategory/62de9788c65a44226ca7e69e'><i className='fa fa-edit'/></Link></td>
            <td><button onClick={()=>deletecateg()}>Delete</button></td>
            <td><i className='fa fa-bars'/></td>
            </tr>

            <tr>
            <td><img src='/media3/advert6.jpg' alt='categimgs'/></td>
            <td>Phone Accessories</td>
            <td>phones</td>
            <td>8</td>
            <td>10/06/2022</td>
            <td><Link to='/admin/editcategory/62de9788c65a44226ca7e69e'><i className='fa fa-edit'/></Link></td>
            <td><button onClick={()=>deletecateg()}>Delete</button></td>
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
        </div>
        </>
    )
}