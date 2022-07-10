import {React} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Userorders(){
     
    const navigate=useNavigate();

    return(
        <>
        <div className='usermaincon'>
        <div className='userorderheading'><p>Orders(3)</p></div>
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
            <button onClick={()=>navigate('/user/userorder')}>View</button>
        </div>
        </div>
        </div>

        <div className='userorder'>
        <div className='userorderimg'><img src='/media3/advert5.jpg' alt='UserOrderImg'/></div>
        <div className='userorderinfo'>
        <div className='orderinfo1'>
        <p>Bluetooth Headset - Extra Bass -MDR-XB950BT- Red</p>
        <p>Price: N34,000</p>
        <p>STATUS: Cancelled</p>
        </div>
        <div className='orderinfo2'>
            <p>On 14-11-2019</p>
            <button onClick={()=>navigate('userorder')}>View</button>
        </div>        
        </div>
        </div>

        <div className='userorder'>
        <div className='userorderimg'><img src='/media3/advert4.jpg' alt='UserOrderImg'/></div>
        <div className='userorderinfo'>
        <div className='orderinfo1'>
        <p>Bluetooth Headset - Extra Bass -MDR-XB950BT- Red</p>
        <p>Price: N34,000</p>
        <p>STATUS: Cancelled</p>
        </div>
        <div className='orderinfo2'>
            <p>On 14-11-2019</p>
            <button onClick={()=>navigate('userorder')}>View</button>
        </div>
        </div>
        </div>

        </div>
        </div>
        </>
    )
}