import {React} from 'react';
import { Link } from 'react-router-dom';
import Accordion2 from './Accordion2';

export default function Help(){

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

<div className='customercare1con'>
<div className='customercarerecog'>
<div><i className='fa fa-rocket'/></div>
<h2>GrandPro Customer Care</h2>
<p>How can we help you?</p>
</div>

<div className='customercarelinks'>
<Link to='/' style={{background:'#128C7E'}}><i className='fa fa-whatsapp'/>Whatsapp</Link>
<Link to='/' style={{background:'#3b5998'}}><i className='fa fa-facebook'/>Facebook</Link>
<Link to='/' style={{background:'#00acee'}}><i className='fa fa-twitter'/>Twitter</Link>
<Link to='/' style={{background:'linear-gradient(40deg,#e95950,#bc2a8d)'}}><i className='fa fa-instagram'/>Instagram</Link>
</div>

</div>


<div className='customercare2con'>
<div className='customercare2heading'><h2>Fequently Asked Questions</h2></div>

<div className='customercare2'>
<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide1'
/>

<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide2'
/>
<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide3'
/>
<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide4'
/>
<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide5'
/>
<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide6'
/>
<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide7'
/>

<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide8'
/>

<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide9'
/>

<Accordion2
type='slide'
heading='How to Order'
detail='Firsyt'
id='helpslide10'
/>
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