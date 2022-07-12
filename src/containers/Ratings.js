import {React} from 'react';

export default function Ratings({value}){
    const goldenstars=(()=>{
        for (let i=0; i < parseInt(value);i++) {
                return ( 
                    <>
                    <i className='fa fa-star' style={{color:'Gold'}}/>
                    <i className='fa fa-star' style={{color:'Gold'}}/>
                    <i className='fa fa-star' style={{color:'Gold'}}/>
                    <i className='fa fa-star' style={{color:'Gold'}}/>
                    </>
                );
        }
    })
    return(
        <>
    <div className='ratings1'>
    {goldenstars()}

    </div>
        </>
    )
}