import {React,useState} from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Admin(){
    const [trigger,setTrigger]=useState(false);
    const navigate=useNavigate();

    return(
        <>
{trigger &&<div className='popupaddresscon' >
</div>}
<div className='main' >


<div className='adminheadercon'>
<div className='adminheader'>
<div className='admincategoryspace'>
<Navbar id='nav' setTrigger={setTrigger} admin='true'/>    
<h2><Link to='/'><img src='favicon.svg' alt='Logo'/> GrandProSales </Link></h2>
</div>


<div className='adminusercon'>

<Link to='/user/useraccount'><i className='fa fa-user-circle'></i></Link>
</div>
</div>

</div>


<div className='submain2'>

<div className='admindashboardcon'>

<nav>
<div className='navlinkscon'>
<div className='navusername'><i className='fa fa-user-circle'/><span>Admin Steven</span></div>
<div className='usernavlinkscon'>
<p>Customer Links</p>    
<div className='navlinks' onClick={()=>navigate('/admin/dashboard')}><Link className='navlink' to='/admin/dashboard'>Dashboard</Link></div>
<div className='navlinks' onClick={()=>navigate('/admin/categories')}><Link className='navlink' to='/admin/categories'>Categories</Link></div>
<div className='navlinks' onClick={()=>navigate('/admin/products')}><Link className='navlink' to='/admin/products'>Products</Link></div>
<div className='navlinks' onClick={()=>navigate('/admin/orders')}><Link className='navlink' to='/admin/orders'>Orders</Link></div>
<div className='navlinks' onClick={()=>navigate('/admin/sales')}><Link className='navlink' to='/admin/sales'>Sales</Link></div>
<div className='navlinks' onClick={()=>navigate('/admin/users')}><Link className='navlink' to='/admin/users'>Users</Link></div>
<div className='navlinks' onClick={()=>navigate('/admin/staffs')}><Link className='navlink' to='/admin/staffs'>Staffs</Link></div>
<div className='navlinks' onClick={()=>navigate('/admin/sales')}><Link className='navlink' to='/admin/sales'>SMS Management</Link></div>
<div className='navlinks' onClick={()=>navigate('/admin/sales')}><Link className='navlink' to='/admin/sales'>Email Management</Link></div>
<div className='navlinks' onClick={()=>navigate('/admin/bannerimg')}><Link className='navlink' to='/admin/bannerimg'>Banner Images</Link></div>
<div className='navlinks' onClick={()=>navigate('/admin/support')}><Link className='navlink' to='/admin/support'>Customer Support</Link></div>
<div className='navlinks' onClick={()=>navigate('/admin/eventandcoupon')}><Link className='navlink' to='/admin/eventandcoupon'>Events & Coupons</Link></div>
<div className='navlinks' onClick={()=>navigate('/admin/analytics')}><Link className='navlink' to='/admin/analytics'>Analytics</Link></div>
<div className='navlinks' onClick={()=>navigate('/admin/payment')}><Link className='navlink' to='/admin/payment'>Payment Management</Link></div>
<div className='navlinks' onClick={()=>navigate('/')}><Link className='navlink' to='useraccount'>Logout</Link></div>
</div>


</div>
</nav>








<Outlet/>










</div>

</div>

<div className='footercon'>
    <div className='infocollection'>
     <form>
        <input type='email' placeholder='email address'/>
        <button>Sign Up</button>
     </form>
    </div>

    
<footer>
<div className='footer1'>

<div className='links'>
<Link to='/'>Need Help?</Link>
</div>
<div className='links'>
<Link to='/'>How to shop on GrandPro?</Link>
</div>
<div className='links'>
<Link to='/'>Report a product</Link>
</div>

</div>
<div className='footer1'>
<div className='links'>
<Link to='/'>Need Help?</Link>
</div>
<div className='links'>
<Link to='/'>How to shop on GrandPro?</Link>
</div>
<div className='links'>
<Link to='/'>Report a product</Link>
</div>
</div>


<div className='footer1'>
<div className='links'>
<Link to='/'>Need Help?</Link>
</div>
<div className='links'>
<Link to='/'>How to shop on GrandPro?</Link>
</div>
<div className='links'>
<Link to='/'>Report a product</Link>
</div>
</div>


</footer>

    <div className='infocollection2'>
    <p>Copyright © 2022 GrandProsales.com. All rights reserved</p>
    </div>
</div>
</div>
        </>
    )
}