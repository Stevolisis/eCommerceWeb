import {React} from 'react';

export default function Reviews({listing}){

    return(
        <>
       <div style={{display:listing==='some' ? 'block' : 'none'}}>
        <div className='reviewsdetailscon'>
        <div className='reviewsdetails'>
       <p>by Michael Obi</p>
       <p>10-06-2022</p>
       </div>

       <div className='reviewsratings'>
        <i className='fa fa-star'/>
        <i className='fa fa-star'/>
        <i className='fa fa-star'/>
        <i className='fa fa-star'/>
        <i className='fa fa-star'/>
       </div>

       <div className='reviewscoments'>
        <p>It stain the body and cloth,it bring out permanent spot on the cloth 
            until is washed</p>
       </div>
        </div>

        <div className='reviewsdetailscon'>
        <div className='reviewsdetails'>
       <p>by Tasha Obi</p>
       <p>10-06-2022</p>
       </div>

       <div className='reviewsratings'>
        <i className='fa fa-star'/>
        <i className='fa fa-star'/>
        <i className='fa fa-star'/>
        <i className='fa fa-star'/>
        <i className='fa fa-star'/>
       </div>

       <div className='reviewscoments'>
        <p>It stain the body and cloth,it bring out permanent spot on the cloth 
            until is washed</p>
       </div>
        </div>

        <div className='reviewsdetailscon'>
        <div className='reviewsdetails'>
       <p>by Mary Obi</p>
       <p>10-06-2022</p>
       </div>

       <div className='reviewsratings'>
        <i className='fa fa-star'/>
        <i className='fa fa-star'/>
        <i className='fa fa-star'/>
        <i className='fa fa-star'/>
        <i className='fa fa-star'/>
       </div>

       <div className='reviewscoments'>
        <p>It stain the body and cloth,it bring out permanent spot on the cloth 
            until is washed</p>
       </div>
        </div>

       </div>

       



       <div  style={{display:listing==='some' ? 'none' : 'block'}}>
       <div className='reviewsdetailscon'>
       <div className='reviewsdetails'>
       <p>by Michael Obi</p>
       <p>10-06-2022</p>
       </div>

       <div className='reviewsratings'>
        <i className='fa fa-star'/>
        <i className='fa fa-star'/>
        <i className='fa fa-star'/>
        <i className='fa fa-star'/>
        <i className='fa fa-star'/>
       </div>

       <div className='reviewscoments'>
        <p>It stain the body and cloth,it bring out permanent spot on the cloth 
            until is washed</p>
       </div>
       </div>
       </div>

        </>
    )
}