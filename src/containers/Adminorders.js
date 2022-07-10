import {React} from 'react';
import { Link } from 'react-router-dom';

export default function Adminorders(){

    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
            <p>Orders</p>
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
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Date</th>
            <th>View</th>
            </tr>

            <tr>
            <td>Raegan</td>
            <td>Heinz Stew Cream 120kg</td>
            <td>6</td>
            <td>Delivered</td>
            <td>10/06/2022</td>
            <td><Link to='/admin/order'><i className='fa fa-eye'/></Link></td>
            </tr>

            <tr>
            <td>Raegan</td>
            <td>Heinz Stew Cream 120kg</td>
            <td>6</td>
            <td>Delivered</td>
            <td>10/06/2022</td>
            <td><Link to='/admin/order'><i className='fa fa-eye'/></Link></td>
            </tr>

            <tr>
            <td>Raegan</td>
            <td>Heinz Stew Cream 120kg</td>
            <td>6</td>
            <td>Delivered</td>
            <td>10/06/2022</td>
            <td><Link to='/admin/order'><i className='fa fa-eye'/></Link></td>
            </tr>

            <tr>
            <td>Raegan</td>
            <td>Heinz Stew Cream 120kg</td>
            <td>6</td>
            <td>Delivered</td>
            <td>10/06/2022</td>
            <td><Link to='/admin/order'><i className='fa fa-eye'/></Link></td>
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