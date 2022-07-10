import {React} from 'react'
import Swal from 'sweetalert2';

export default function Userwishlist(){
  const deleteitem=(()=>{
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
            'Product removed Wishlist.',
            'success'
          )
        }
      })
   })
    return(
        <>
          <div className='usermaincon'>
        <div className='userorderheading'><p>Wishlist (3)</p></div>
        <div className='userorderscon'>
        
        <div className='userorder'>
        <div className='userorderimg'><img src='/media3/advert6.jpg' alt='UserOrderImg'/></div>
        <div className='savediteminfo'>
        <div className='savedinfo1'>
        <p>Bluetooth Headset - Extra Bass -MDR-XB950BT- Red</p>
        <div className='saveditemprice'><span>Price: N34,000</span><span>39,000</span></div>
        <p>-20%</p>
        </div>
        <div className='savedinfo2'>
        
        <div className='savedinfobtn1'><button>View</button></div>
        <div className='savedinfobtn2'><button onClick={()=>deleteitem()}>Remove</button></div>
        
        </div>
        </div>
        </div>

        <div className='userorder'>
        <div className='userorderimg'><img src='/media3/advert5.jpg' alt='UserOrderImg'/></div>
        <div className='savediteminfo'>
        <div className='savedinfo1'>
        <p>Bluetooth Headset - Extra Bass -MDR-XB950BT- Red</p>
        <div className='saveditemprice'><span>Price: N34,000</span><span>39,000</span></div>
        <p>-20%</p>
        </div>
        <div className='savedinfo2'>
        
        <div className='savedinfobtn1'><button>View</button></div>
        <div className='savedinfobtn2'><button onClick={()=>deleteitem()}>Remove</button></div>
        
        </div>
        </div>
        </div>

        <div className='userorder'>
        <div className='userorderimg'><img src='/media3/advert4.jpg' alt='UserOrderImg'/></div>
        <div className='savediteminfo'>
        <div className='savedinfo1'>
        <p>Bluetooth Headset - Extra Bass -MDR-XB950BT- Red</p>
        <div className='saveditemprice'><span>Price: N34,000</span><span>39,000</span></div>
        <p>-20%</p>
        </div>
        <div className='savedinfo2'>
        
        <div className='savedinfobtn1'><button>View</button></div>
        <div className='savedinfobtn2'><button onClick={()=>deleteitem()}>Remove</button></div>
        
        </div>
        </div>
        </div>

        </div>
        </div>
        </>
    )
}