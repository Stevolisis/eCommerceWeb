import {React,useState} from 'react';
import { Link ,Outlet} from 'react-router-dom';
import Navbar from './Navbar';

export default function Grandprouser(){
    const [trigger,setTrigger]=useState(false);

 

    return(
        <>
{trigger &&<div className='popupaddresscon' >
</div>}
<div className='main' >


<div className='headercon'>
<div className='header2'>
<div className='categoryspace2'>
        <h2><Link to='/'><img src='favicon.svg' alt='Logo'/> GrandProSales </Link></h2>
</div>


<div className='usercon2'>
<Link to='/help'><i className='fa fa-question-circle'></i></Link>

<div className='cart'>
<Link to='/cart'><i className='fa fa-shopping-cart'></i></Link>
<div>3</div>
</div>

<Link to='/user/useraccount'><i className='fa fa-user-circle'></i></Link>
</div>
</div>


<div className='header'>
    <div className='categoryspace'>
            <h2><Link to='/'><img src='favicon.svg' alt='Logo'/> GrandProSales </Link></h2>
    </div>


<div className='searchcon'>
    <div className='search'>
    <Navbar id='nav' setTrigger={setTrigger}/>    
    <input type='text' placeholder='Search products,brands and categories...'/>
    <button className='searchbtn'>Search</button>
    </div>
</div>


<div className='usercon'>
<Link to='/help'><i className='fa fa-question-circle'></i></Link>

<div className='cart'>
<Link to='/cart'><i className='fa fa-shopping-cart'></i></Link>
<div>3</div>
</div>

<Link to='/user/useraccount'><i className='fa fa-user-circle'></i></Link>
</div>
</div>
</div>


<div className='submain'>

<div className='userdashboardcon'>

<nav>
<div className='navlinkscon'>
<div className='navusername'><i className='fa fa-user-circle'/><span>Steven Joseph</span></div>
<div className='usernavlinkscon'>
<p>Customer Links</p>    
<div className='navlinks'><Link className='navlink' to='useraccount'>My Account</Link></div>
<div className='navlinks'><Link className='navlink' to='userorders'>My Orders</Link></div>
<div className='navlinks'><Link className='navlink' to='useraddress'>Addresses</Link></div>
<div className='navlinks'><Link className='navlink' to='wishlist'>Wishlist</Link></div>
<div className='navlinks'><Link className='navlink' to='useraccount'>Logout</Link></div>
</div>

<div className='navcetegories'>
<p>categories</p>    
<div className='navlinks'><Link className='navlink' to='/product'>Phones and Tablets</Link></div>
<div className='navlinks'><Link className='navlink' to='/product'>Kitchen</Link></div>
<div className='navlinks'><Link className='navlink' to='/product'>Electronics</Link></div>
<div className='navlinks'><Link className='navlink' to='/product'>Nike</Link></div>
<div className='navlinks'><Link className='navlink' to='/product'>Hats</Link></div>
<div className='navlinks'><Link className='navlink' to='/product'>Music Instruments</Link></div>
<div className='navlinks'><Link className='navlink' to='/product'>Sports</Link></div>
<div className='navlinks'><Link className='navlink' to='/product'>Sports</Link></div>
<div className='navlinks'><Link className='navlink' to='/product'>Sports</Link></div>
<div className='navlinks'><Link className='navlink' to='/product'>Sports</Link></div>
<div className='navlinks'><Link className='navlink' to='/product'>Sports</Link></div>
<div className='navlinks'><Link className='navlink' to='/product'>Sports</Link></div>
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