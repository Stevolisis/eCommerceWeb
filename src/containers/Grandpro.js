import {React,useState,useEffect,useCallback,useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Firstslider from './Firstslider';

export default function Grandpro(){
    const cancelalert=useRef(true)
    //const cancelslide=useRef(true)
    const navigate=useNavigate();
    const [currentslide,setCurrentslide]=useState(0);

const images=[
    {url:'/media3/ecommerceGrandPro2.png',link:'/categories',alt:'firstbanner'},
    {url:'/media3/advert4.jpg',link:'/categories',alt:'firstbanner'},
    {url:'/media3/advert5.jpg',link:'/categories',alt:'firstbanner'},
    {url:'/media3/pexel4.jpg',link:'/categories',alt:'firstbanner'},
    {url:'/media3/pexel6.jpg',link:'/categories',alt:'firstbanner'}
];
    const nextslide=useCallback(()=>{
        setCurrentslide(currentslide===images.length-1 ? 0 : currentslide+1)
        console.log(currentslide)
      },[currentslide,images.length])
    
    
        const prevslide=useCallback(()=>{
    setCurrentslide(currentslide===0 ? images.length-1 : currentslide-1);
        },[currentslide,images.length])
    
    

useEffect(()=>{
    setTimeout(() => {
        nextslide();
    }, 3000);
},[currentslide,nextslide]);


      
    
useEffect(()=>{
        if(cancelalert.current){
            cancelalert.current=false;
           setTimeout(()=>{
            Swal.fire({
                title: 'Grandpro 12th Anniversary',
                text: 'Enjoy Products with 20% discount',
                imageUrl: '/media3/advert6.jpg',
                imageHeight: 230,
                imageWidth: 540,
                imageAlt: 'Custom image',
                padding:10,
                confirmButtonText:'View',
                denyButtonText:'Ok',
                confirmButtonColor:'#5972b9',
                denyButtonColor:'#fa568d',
                showDenyButton:true
              }).then((result) => {
                if (result.isConfirmed) {
               navigate('/categories');
              }
              })
           },2000) 
        }
},[navigate])
   
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

<div className='section1'>

<div className='sub1section1'>
<div className='subimage'>
<Link to='/categories'><img src='/media3/advert6.jpg' alt='mainbanner' />
</Link>
</div>
<div className='subimage'>
<Link to='/categories'><img src='/media3/advert7.jpg' alt='mainbanner' />
</Link>
</div>
</div>

<Firstslider
images={images}
currentslide={currentslide}
nextslide={nextslide}
prevslide={prevslide}
/>


</div>



<div className='section2'>
<div className='slidecategcon'>


<div className='slidecateg'>
<Link to='/categories'>
<div className='slidecategimg'>
<img src='/media3/pexel6.jpg' alt='slidecateg'/>
</div>

<div className='slidecategname'>
    <p>Phone and Tablets</p>
</div>
</Link>
</div>


<div className='slidecateg'>
<Link to='/categories'>
<div className='slidecategimg'>
<img src='/media3/pexel7.jpg' alt='slidecateg'/>
</div>

<div className='slidecategname'>
    <p>Accessories</p>
</div>
</Link>
</div>

<div className='slidecateg'>
<Link to='/categories'>
<div className='slidecategimg'>
<img src='/media3/pexel8.jpg' alt='slidecateg'/>
</div>

<div className='slidecategname'>
    <p>Computers</p>
</div>
</Link>
</div>

<div className='slidecateg'>
<Link to='/categories'>
<div className='slidecategimg'>
<img src='/media3/pexel9.jpg' alt='slidecateg'/>
</div>

<div className='slidecategname'>
    <p>Home and Office</p>
</div>
</Link>
</div>


<div className='slidecateg'>
<Link to='/categories'>
<div className='slidecategimg'>
<img src='/media3/pexel10.jpg' alt='slidecateg'/>
</div>

<div className='slidecategname'>
    <p>Bags</p>
</div>
</Link>
</div>


<div className='slidecateg'>
<Link to='/categories'>
<div className='slidecategimg'>
<img src='/media3/pexel11.jpg' alt='slidecateg'/>
</div>

<div className='slidecategname'>
    <p>Detergents</p>
</div>
</Link>
</div>

<div className='slidecateg'>
<Link to='/categories'>
<div className='slidecategimg'>
<img src='/media3/pexel12.jpg' alt='slidecateg'/>
</div>

<div className='slidecategname'>
    <p>Cutleries</p>
</div>
</Link>
</div>

<div className='slidecateg'>
<Link to='/categories'>
<div className='slidecategimg'>
<img src='/media3/pexel13.jpg' alt='slidecateg'/>
</div>

<div className='slidecategname'>
    <p>Underwears</p>
</div>
</Link>
</div>

</div>
</div>



<div className='section3'>
<div className='specialcateg'>

<div className='specialcateghead'>
<div className='specialhead1'>
<p>Flash Sales | Free Delivery</p>
</div>
<div className='specialhead1'>
<p>Time Left: 18h : 21m : 07s</p>
</div>
<div className='specialhead1'>
<Link to='/categories'>See All</Link>
</div>

</div>

<div className='specialcategproducts'>


<div className='specialproduct'>
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background.jpg' alt='productimg' /></div>
</div>

<div className='specialproductinfo'>

<div className='productname'>
<p>Heinz Salad Cream 285 Kg</p>
</div>

<div className='productprices'>
<span>₦ 500</span> <span>₦ 550</span>
</div>

<div className='productvolume'>
<p>50 items left</p>
</div>
</div>
</Link>
</div>




<div className='specialproduct'>
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background.jpg' alt='productimg' /></div>
</div>

<div className='specialproductinfo'>

<div className='productname'>
<p>Heinz Salad Cream 285 Kg</p>
</div>

<div className='productprices'>
<span>₦ 500</span> <span>₦ 550</span>
</div>

<div className='productvolume'>
<p>50 items left</p>
</div>
</div>
</Link>
</div>




<div className='specialproduct'>
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background.jpg' alt='productimg' /></div>
</div>

<div className='specialproductinfo'>

<div className='productname'>
<p>Heinz Salad Cream 285 Kg</p>
</div>

<div className='productprices'>
<span>₦ 500</span> <span>₦ 550</span>
</div>

<div className='productvolume'>
<p>50 items left</p>
</div>
</div>
</Link>
</div>




<div className='specialproduct'>
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background.jpg' alt='productimg' /></div>
</div>

<div className='specialproductinfo'>

<div className='productname'>
<p>Heinz Salad Cream 285 Kg</p>
</div>

<div className='productprices'>
<span>₦ 500</span> <span>₦ 550</span>
</div>

<div className='productvolume'>
<p>50 items left</p>
</div>
</div>
</Link>
</div>




<div className='specialproduct'>
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background.jpg' alt='productimg' /></div>
</div>

<div className='specialproductinfo'>

<div className='productname'>
<p>Heinz Salad Cream 285 Kg</p>
</div>

<div className='productprices'>
<span>₦ 500</span> <span>₦ 550</span>
</div>

<div className='productvolume'>
<p>50 items left</p>
</div>
</div>
</Link>
</div>



<div className='specialproduct'>
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background.jpg' alt='productimg' /></div>
</div>

<div className='specialproductinfo'>

<div className='productname'>
<p>Heinz Salad Cream 285 Kg</p>
</div>

<div className='productprices'>
<span>₦ 500</span> <span>₦ 550</span>
</div>

<div className='productvolume'>
<p>50 items left</p>
</div>
</div>
</Link>
</div>

<div className='specialproduct'>
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background.jpg' alt='productimg' /></div>
</div>

<div className='specialproductinfo'>

<div className='productname'>
<p>Heinz Salad Cream 285 Kg</p>
</div>

<div className='productprices'>
<span>₦ 500</span> <span>₦ 550</span>
</div>

<div className='productvolume'>
<p>50 items left</p>
</div>
</div>
</Link>
</div>



</div>



</div>
</div>
















<div className='section3'>
<div className='specialcateg'>

<div className='specialcateghead' style={{background:'#191a1c'}}>
<div className='specialhead1'>
<p>Top Selling Products</p>
</div>
<div className='specialhead1'>
<Link to='/categories'>See All</Link>
</div>

</div>

<div className='specialcategproducts'>


<div className='specialproduct'>
<Link to='/product'>
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
<Link to='/product'>
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
<Link to='/product'>
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
<Link to='/product'>
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
<Link to='/product'>
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
<Link to='/product'>
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
<Link to='/product'>
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







<div className='section3'>
<div className='specialcateg'>

<div className='section4'>
<div className='midbannercon'>

<div className='midbanner'>
<Link to='/product'>
<img src='/media3/advert4.jpg' alt='midbanner' /> 
</Link>
</div>
<div className='midbanner'>
<Link to='/product'>
<img src='/media3/advert5.jpg' alt='midbanner' />
</Link>
</div>

</div>
</div>

<div className='section4'>
<div className='midbannercon'>

<div className='midbanner'>
<Link to='/product'>
<img src='/media3/advert3.jpg' alt='midbanner' />
</Link>
</div>
<div className='midbanner'>
<Link to='/product'>
<img src='/media3/advert7.jpg' alt='midbanner' />
</Link>
</div>

</div>
</div>


</div>
</div>





<div className='section3'>
<div className='specialcateg'>

<div className='productcateghead'>
<div className='producthead1'>
<p>Amazing Products</p>
</div>
</div>


<div className='categproducts'>


<div className='specialproduct'>
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background2.jpg' alt='productimg' /></div>
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
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background2.jpg' alt='productimg' /></div>
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
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background2.jpg' alt='productimg' /></div>
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
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background2.jpg' alt='productimg' /></div>
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
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background2.jpg' alt='productimg' /></div>
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
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background2.jpg' alt='productimg' /></div>
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
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background2.jpg' alt='productimg' /></div>
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
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background2.jpg' alt='productimg' /></div>
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
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background2.jpg' alt='productimg' /></div>
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
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background2.jpg' alt='productimg' /></div>
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
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background2.jpg' alt='productimg' /></div>
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
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background2.jpg' alt='productimg' /></div>
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
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background2.jpg' alt='productimg' /></div>
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
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background2.jpg' alt='productimg' /></div>
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
<Link to='/product'>
<div className='specialproductimg'>
<div className='discount'><p>-20%</p></div>
<div className='productimg'><img src='/media3/background2.jpg' alt='productimg' /></div>
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