import {React} from 'react';
import Swal from 'sweetalert2';

export default function Userorder({origin}){

    const confirmspec=(()=>{
        Swal.fire({
            title: 'Confirm Delivery',
            text: `Product Delivered on ${Date()}`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Successful!',
                'Product Delivered.',
                'success'
              )
            }
          })
       })

    return(
        <>
        <div className='usermaincon'>
        <div className='userorderheading'><p>ORDER DETAILS</p></div>

        <div className='orderdetailcon'>
        <div className='orderdetailheading'><p>Order Id: 75694r5</p></div>  
        <div className='orderdetail'>
        <p><span>Quantity:</span> 3 items</p>
        <p><span>Date: </span> 10-06-2022</p>
        <p><span>Total: </span> N2,350</p>
        <p><span>Status: </span> {origin==='user' ? 'Successful' :
        <> <button onClick={()=>confirmspec()}>Delivered</button></>}</p>
        </div>  
        </div>

        <div className='userorderscon'>
        <div className='userorder'>
        <div className='userorderimg'><img src='/media3/advert6.jpg' alt='UserOrderImg'/></div>
        <div className='userorderinfo'>
        <div className='orderinfo1'>
        <p>Bluetooth Headset - Extra Bass -MDR-XB950BT- Red</p>
        <p>Price: N34,000</p>
        <p>STATUS: Cancelled</p>
        </div>
        <div className='orderinfo2'>
            <p>On 14-11-2019</p>
        </div>
        </div>
        </div>
        </div>

        <div className='detailscon'>
        <div className='orderdetailcon2'>
        <div className='orderdetailheading'><p>PAYMENT METHOD</p></div>  
        <div className='orderdetail'>
        <p><span>Gateway: </span>Flutterwave</p>
        </div>  
        </div>

        <div className='orderdetailcon2'>
        <div className='orderdetailheading'><p>ADDRESS</p></div>  
        <div className='orderdetail'>
        <p><span>Name: </span>Steven Joseph</p>
        <p><span>Address: </span>Abubakar tafawa balewa university,yelwa campus</p>
        <p><span>Location: </span>Yelwa / Fed. Poly, Bauchi</p>
        <p><span>Phone Number: </span>+234 8103987495</p>
        </div>  
        </div>
        </div>

        </div>    
        </>

    )
}