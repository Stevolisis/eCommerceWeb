import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import Accordion from './Accordion'
import Reviews from './Reviews'
import Swal from 'sweetalert2';

export default function Grandproitem(){
    const [currentslide,setCurrentslide]=useState(0);

    const images=[
        {url:'/media3/ecommerceGrandPro2.png',link:'/categories',alt:'firstbanner'},
        {url:'/media3/advert4.jpg',link:'/categories',alt:'firstbanner'},
        {url:'/media3/advert5.jpg',link:'/categories',alt:'firstbanner'},
        {url:'/media3/pexel4.jpg',link:'/categories',alt:'firstbanner'},
        {url:'/media3/pexel6.jpg',link:'/categories',alt:'firstbanner'}
    ];

    const moveslide=(id)=>{
        setCurrentslide(id)
    }

const slide=images.filter((data,i)=>{
        if(i===currentslide){
        return data
        }else{
        return null
        }
    }).map((image,i)=>{
    return (
<img src={image.url} alt='sliderimages' key={i}/>
    )
});

const slides=images.map((image,i)=>{
return (
<div key={i} className='productimgslides'>
<img src={image.url} alt={image.alt} onClick={()=>moveslide(i)}/>
</div>
)
});


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
    const addcart=((info)=>{
    Toast.fire({
        icon: 'success',
        title: info
      })
    })


    return(
        <>
       <div className='main'>


       <div className='headercon'>
<div className='header2'>
    <div className='categoryspace2'>
    <h2>GrandProSales</h2>
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
    <h2>GrandProSales</h2>
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
<Link to='/cart'><i className='fa fa-shopping-cart'></i></Link>
<div>3</div>
</div>

<Link to='/user/useraccount'><i className='fa fa-user-circle'></i></Link>
</div>
</div>
</div>





<div className='submain'>


<div className='productcon'>

<div className='productimgslidercon'>
<div className='productimgslider'>
{slide}
</div>
<div className='productimgslidescon'>


{slides}

</div>
</div>

<div className='productinfocon'>
<div className='gproductname'><p>Heinz Salad Cream 285 Kg</p></div>
<div className='gproductcateg'><p>Brand : NIVEA | Similar products from NIVEA</p></div>
<div className='gproductratings'>
    <div className='gratings1'>
    <i className='fa fa-star'/>
    <i className='fa fa-star'/>
    <i className='fa fa-star'/>
    <i className='fa fa-star'/>
    <i className='fa fa-star'/>
    </div>

    <div className='gratings2'>
    <i className='fa fa-share-alt'/>
    <i className='fa fa-heart' onClick={()=>addcart('Product added to your Wishlist')}/>
    </div>
</div>
<div className='gproductprice'><span>₦ 500</span> <span>₦ 550</span><span>-20%</span></div>
<div className='gproductshippinginfo'>+ shipping from ₦ 180 to LEKKI-AJAH (SANGOTEDO)</div>
<div className='gproductaction'><button onClick={()=>addcart('Product added to cart')}>ADD TO CART</button></div>
</div>
</div>



<Accordion 
 heading='Product Details'
 id='accordioncon'
 type='slide'
 preshow='hidden'
 >
<h4>NIVEA MEN DEEP</h4> Anti-Perspirant Deodorant Spray with a Black Charcoal formula acts
 powerfully against bacteria and sweat while eliminating body odour with a modern
  and masculine Dark Wood Fragrance. The effective formula leaves you feeling as 
  if you have just stepped out of the shower and gives you long-lasting dryness all day. 
The Spray is the 48 hour deodorant men need to get through the day and is combined with
 a deep and invigorating scent.Specially designed for men, NIVEA's Anti-Perspirant men's
  deodorant spray protects and cares for your skin during the day with its 
  anti-bacterial Black Charcoal formula while leaving no black residue on skin 
  or clothes. 
Skin tolerance dermatologically approved; the spray is kind to your skin whilst 
offering great protection from sweat and body odour.
<br/>
<br/>
<br/>
<h4>Directions:</h4> Apply in the morning or after showering. Shake well before use and then hold the can 15cm from the underarm and spray.
 Do not apply to broken or irritated skin. Allow product to dry completely before dressing.
Product benefits; 

Anti-Perspirant Deodorant
Dark Wood Fragrance
Black Charcoal Formula
Leaves No Residue

<br/>
<br/>
<br/>

<h4>INGREDIENTS</h4>
Aluminum Chlorohydrate, PPG-15 Stearyl Ether, Steareth-2, Steareth-21, 
Parfum, Persea Gratissima Oil, Charcoal Powder, Trisodium EDTA, BHT, Linalool, Limonene, Citronellol, Alpha-Isomethyl Ionone, Geraniol
</Accordion>    

<Accordion 
 heading='Specifications'
 id='accordioncon2'
 type='slide'
 preshow='hidden'
 >
<h4>SKU:</h4> NI930ST26E710NAFAMZ
<h4>Weight (kg):</h4> 1
<h4>Shop Type:</h4> Jumia Mall

 </Accordion>

 <Accordion 
 heading='Reviews (6)'
 id='accordioncon3'
 type='slide'
 preshow='show'
 >
<Reviews
listing='All'
/>
 </Accordion>


 

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