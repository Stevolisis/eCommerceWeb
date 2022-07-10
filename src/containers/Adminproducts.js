import {React} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Adminproducts(){
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
                'Product Deleted.',
                'success'
              )
            }
          })
       })

    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
            <p>Products</p>
            <button onClick={()=>navigate('/admin/addproduct')}>ADD</button>
            </div>
        <div className='admincategcon'>

            <div className='adminfilterscon'>
            <div className='adminfilters'>
                    <input type='text' placeholder='Search...'/>
                </div>
                <div className='adminfilters'>
                    <select>
                    <option defaultValue='All Category'>All Category</option>
                    <option>001</option>
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
            <th>SKU</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Categories</th>
            <th>Sold</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>

            <tr>
            <td><img src='/media3/advert6.jpg' alt='categimgs'/></td>
            <td>Tesla</td>
            <td>001</td>
            <td>In Stock</td>
            <td>$678.4</td>
            <td>Bags</td>
            <td>5</td>
            <td>10/06/2022</td>
            <td><Link to='/admin/editproduct/hjg242'><i className='fa fa-edit'/></Link></td>
            <td><button onClick={()=>deletespec()}>Delete</button></td>
            </tr>

            <tr>
            <td><img src='/media3/advert6.jpg' alt='categimgs'/></td>
            <td>Nike</td>
            <td>002</td>
            <td>In Stock</td>
            <td>$678.4</td>
            <td>Shoes</td>
            <td>5</td>
            <td>10/06/2022</td>
            <td><Link to='/admin/editproduct/hjg242'><i className='fa fa-edit'/></Link></td>
            <td><button onClick={()=>deletespec()}>Delete</button></td>
            </tr>

            <tr>
            <td><img src='/media3/advert6.jpg' alt='categimgs'/></td>
            <td>Addidas</td>
            <td>003</td>
            <td>In Stock</td>
            <td>$678.4</td>
            <td>Home Appliances</td>
            <td>5</td>
            <td>10/06/2022</td>
            <td><Link to='/admin/editproduct/hjg242'><i className='fa fa-edit'/></Link></td>
            <td><button onClick={()=>deletespec()}>Delete</button></td>
            </tr>

            <tr>
            <td><img src='/media3/advert6.jpg' alt='categimgs'/></td>
            <td>Nivea Men</td>
            <td>004</td>
            <td>In Stock</td>
            <td>$678.4</td>
            <td>Tablets</td>
            <td>5</td>
            <td>10/06/2022</td>
            <td><Link to='/admin/editproduct/hjg242'><i className='fa fa-edit'/></Link></td>
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