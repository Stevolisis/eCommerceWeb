import {React} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function Grandprocart(){
   const navigate=useNavigate();
   
   const deletecartitem=(()=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Removed!',
            'Product removed from cart.',
            'success'
          )
        }
      })
   })

    return(
        <>
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


<div className='cartcon'>

<div className='cartproductcon2'>
<div className='cartheading'><h2>Cart (2)</h2></div>



<div className='cartproductcon'>
<div className='cartproduct'>
<div className='cartimg'>
<div className='cartdiscount'><p>-20%</p></div>
<img src='/media3/advert6.jpg' alt='cartimg' />
</div>

<div className='cartinfo'>
<div>
<div className='cartproductname'><p>Heinz Salad Cream 285 Kg</p></div>
<div className='cartproductprice'><span>₦ 500</span> <span>₦ 550</span></div>
</div>

<div className='cartnumber'>
<button>-</button><span>4</span><button>+</button>
</div>

</div>
</div>

<div className='cartactions'>
<button onClick={()=>deletecartitem()}>Remove</button>
</div>

</div>


<div className='cartproductcon'>
<div className='cartproduct'>
<div className='cartimg'>
<div className='cartdiscount'><p>-20%</p></div>
<img src='/media3/advert6.jpg' alt='cartimg' />
</div>

<div className='cartinfo'>
<div>
<div className='cartproductname'><p>Heinz Salad Cream 285 Kg</p></div>
<div className='cartproductprice'><span>₦ 500</span> <span>₦ 550</span></div>
</div>
<div className='cartnumber'>
<button>-</button><span>4</span><button>+</button>
</div>
</div>
</div>

<div className='cartactions'>
<button onClick={()=>deletecartitem()}>Remove</button>
</div>

</div>



<div className='cartproductcon'>
<div className='cartproduct'>
<div className='cartimg'>
<div className='cartdiscount'><p>-20%</p></div>
<img src='/media3/advert6.jpg' alt='cartimg' />
</div>

<div className='cartinfo'>
<div>
<div className='cartproductname'><p>Heinz Salad Cream 285 Kg</p></div>
<div className='cartproductprice'><span>₦ 500</span> <span>₦ 550</span></div>
</div>
<div className='cartnumber'>
<button>-</button><span>4</span><button>+</button>
</div>
</div>
</div>

<div className='cartactions'>
<button onClick={()=>deletecartitem()}>Remove</button>
</div>

</div>



<div className='cartproductcon'>
<div className='cartproduct'>
<div className='cartimg'>
<div className='cartdiscount'><p>-20%</p></div>
<img src='/media3/advert6.jpg' alt='cartimg' />
</div>

<div className='cartinfo'>
<div>
<div className='cartproductname'><p>Heinz Salad Cream 285 Kg</p></div>
<div className='cartproductprice'><span>₦ 500</span> <span>₦ 550</span></div>
</div>
<div className='cartnumber'>
<button>-</button><span>4</span><button>+</button>
</div>
</div>
</div>

<div className='cartactions'>
<button onClick={()=>deletecartitem()}>Remove</button>
</div>

</div>


<div className='cartproductcon'>
<div className='cartproduct'>
<div className='cartimg'>
<div className='cartdiscount'><p>-20%</p></div>
<img src='/media3/advert6.jpg' alt='cartimg' />
</div>

<div className='cartinfo'>
<div>
<div className='cartproductname'><p>Heinz Salad Cream 285 Kg</p></div>
<div className='cartproductprice'><span>₦ 500</span> <span>₦ 550</span></div>
</div>
<div className='cartnumber'>
<button>-</button><span>4</span><button>+</button>
</div>
</div>
</div>

<div className='cartactions'>
<button onClick={()=>deletecartitem()}>Remove</button>
</div>

</div>




</div>




<div className='cartsummarycon'>
<div className='cartsummary'>
<div className='cartsummaryheading'>CART SUMMARY</div>
<div className='cartsummaryinfo'>
<div><p>Subtotal</p></div>
<div><p>₦ 3,690</p></div>
</div>
<div className='cartsummarybutton'>
    <button onClick={()=>navigate('/checkout')}>CHECKOUT (₦3,690)</button>
</div>
</div>
</div>


</div>




<div className='section3'>
<div className='specialcateg'>

<div className='specialcateghead' style={{background:'#191a1c'}}>
<div className='specialhead1'>
<p>Related Products</p>
</div>
<div className='specialhead1'>
<Link to='/'>See All</Link>
</div>

</div>

<div className='specialcategproducts'>


<div className='specialproduct'>
<Link to='/'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/advert6.jpg' alt='productimg' /></div>
</div>

<div className='specialproductinfo'>

<div className='productname'>
<p>Heinz Salad Cream 285 Kg</p>
</div>

<div className='productprices'>
<span>₦ 500</span> <span>₦ 550</span>
</div>


</div>
</Link>
</div>




<div className='specialproduct'>
<Link to='/'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/advert6.jpg' alt='productimg' /></div>
</div>

<div className='specialproductinfo'>

<div className='productname'>
<p>Heinz Salad Cream 285 Kg</p>
</div>

<div className='productprices'>
<span>₦ 500</span> <span>₦ 550</span>
</div>


</div>
</Link>
</div>




<div className='specialproduct'>
<Link to='/'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/advert6.jpg' alt='productimg' /></div>
</div>

<div className='specialproductinfo'>

<div className='productname'>
<p>Heinz Salad Cream 285 Kg</p>
</div>

<div className='productprices'>
<span>₦ 500</span> <span>₦ 550</span>
</div>


</div>
</Link>
</div>




<div className='specialproduct'>
<Link to='/'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/advert6.jpg' alt='productimg' /></div>
</div>

<div className='specialproductinfo'>

<div className='productname'>
<p>Heinz Salad Cream 285 Kg</p>
</div>

<div className='productprices'>
<span>₦ 500</span> <span>₦ 550</span>
</div>


</div>
</Link>
</div>




<div className='specialproduct'>
<Link to='/'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/advert6.jpg' alt='productimg' /></div>
</div>

<div className='specialproductinfo'>

<div className='productname'>
<p>Heinz Salad Cream 285 Kg</p>
</div>

<div className='productprices'>
<span>₦ 500</span> <span>₦ 550</span>
</div>


</div>
</Link>
</div>



<div className='specialproduct'>
<Link to='/'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/advert6.jpg' alt='productimg' /></div>
</div>

<div className='specialproductinfo'>

<div className='productname'>
<p>Heinz Salad Cream 285 Kg</p>
</div>

<div className='productprices'>
<span>₦ 500</span> <span>₦ 550</span>
</div>


</div>
</Link>
</div>

<div className='specialproduct'>
<Link to='/'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/advert6.jpg' alt='productimg' /></div>
</div>

<div className='specialproductinfo'>

<div className='productname'>
<p>Heinz Salad Cream 285 Kg</p>
</div>

<div className='productprices'>
<span>₦ 500</span> <span>₦ 550</span>
</div>


</div>
</Link>
</div>



</div>
</div>
</div>

<div className='section1'>

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