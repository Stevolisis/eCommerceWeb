import {React,useState,useMemo} from 'react';
import {Link} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Accordion from './Accordion'
import 'font-awesome/css/font-awesome.min.css';

export default function Reusable(){
  const [status,setStatus]=useState(false)

  const toplinks=useMemo(()=>{
 return (
    [{name:'Home',path:'/'},
    {name:'Services',path:'/todo'},
    {name:'Blog',path:'/backtodo'},
    {name:'Login',path:'/'},
    {name:'Contact',path:'/parent'}]
 )

  },[])

//   localStorage.setItem("Todo",toplinks)  
//   const data= localStorage.getItem("Todo");
//   console.log(data)    

    return(
        <>
    <Header logo='DawnTime' toplinks={toplinks}>

    </Header>
        <div className='main'>

<p>hhh</p>

<h2>Laser
    <h3>Nice</h3>
    <p>Well Done </p>
</h2>
<h3>Lies</h3>
        </div>

<section className='accordsec'>

<Accordion 
 heading='What services do we provide?'
 text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
 Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
  natoque penatibus et magnis dis parturient montes, nasceturec
    pede justo, fringilla vel, aliquet nec, vulputate eget,
 arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae.'
 status={status}
 setStatus={setStatus}
 id='details1'
 />

<Accordion 
 heading='How might this help you?'
 text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
 Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
  natoque penatibus et magnis dis parturient montes, nasceturec
    pede justo, fringilla vel, aliquet nec, vulputate eget,
 arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae.'
 id='details2'
 type='non-slide'
 />


 
<Accordion 
 heading='How Accordion was made?'
 text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
 Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
  natoque penatibus et magnis dis parturient montes, nasceturec
    pede justo, fringilla vel, aliquet nec, vulputate eget,
 arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae.'
 id='details3'
 type='slide'
 />

</section>
<Footer/>

        </>
    )
}