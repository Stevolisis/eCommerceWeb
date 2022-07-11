import {React, useState} from 'react';
import {Link} from 'react-router-dom'
import Checkoutaddress from './Checkoutaddress';
import $ from 'jquery';
import Swal from 'sweetalert2';

export default function Checkout(){
   const [trigger,setTrigger]=useState(false);

   const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
const vouchervalidate=(()=>{
Toast.fire({
    icon: 'success',
    title: 'Congrats Voucher Validated'
  })
})


   $(window).click((e)=>{
    if(e.target.className==='popupaddresscon'||e.target.className==='popupaddress'){
        setTrigger(false)
    }
    
  });   

    return(
        <>
        {trigger && <Checkoutaddress setTrigger={setTrigger}/>}
        <div className='main'>

<div className='headercon'>
<div className='header2'>
    <div className='categoryspace2'>
            <h2><Link to='/'><img src='favicon.svg' alt='Logo'/> GrandProSales </Link></h2>
    </div>


<div className='usercon2'>
<Link to='/help'><i className='fa fa-question-circle'></i></Link>

<div className='cart'>
<Link to='/'><i className='fa fa-shopping-cart'></i></Link>
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
    <input type='text' placeholder='Search products,brands and categories...'/>
    <button>Search</button>
    </div>
</div>


<div className='usercon'>
<Link to='/help'><i className='fa fa-question-circle'></i></Link>

<div className='cart'>
<Link to='/'><i className='fa fa-shopping-cart'></i></Link>
<div>3</div>
</div>

<Link to='/user/useraccount'><i className='fa fa-user-circle'></i></Link>
</div>
</div>
</div>



<div className='submain'>

<div className='checkoutcon'>

<div className='checkoutinfocon'>
<div className='checkoutaddresscon'>
    <div className='userorderheading'>
        <p>ADDRESS DETAILS</p>
        <button onClick={()=>setTrigger(true)}>CHANGE</button>
        </div>
    <div className='checkoutaddress'>
        <p>Steven Joseph</p>
        <p>Abubakar tafawa balewa university,yelwa canpus, Yelwa / Fed. Poly, Bauchi
+2348103987495</p>
    </div>
</div>

<div className='checkoutpaymentcon'>
<div className='userorderheading'><p>PAYMENT METHOD</p></div>
<div className='checkoutpayment'>
<div className='paymentmethods'>
<input type='radio'/><p>Flutterwave</p>
</div>
<div className='paymentmethods'>
<input type='radio'/><p>Payment on delivery</p>
</div>
<div className='paymentmethods'>
<input type='radio'/><p>Paypal</p>
</div>
<div className='paymentmethods'>
<input type='radio'/><p>Stripe</p>
</div>
</div>
<div>

</div>

</div>

</div>

<div className='checkoutsummarycon'>

<div className='checkoutvouchercon'>
<div className='checkoutvoucherheading'>
<p>Use a voucher</p>
</div>
<div className='checkoutvoucher'>
    <input type='text' placeholder='Enter Voucher Code'/>
    <button onClick={()=>vouchervalidate()}>Apply</button>
</div>
</div>

<div className='checkoutsummary'>
<div><p>Subtotal</p><p>N2,167</p></div>
<div><p>Shipping</p><p>N1,490</p></div>
<div><p>Total</p><p>N3,657</p></div>
<div><button>Pay</button></div>
</div>
</div>
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