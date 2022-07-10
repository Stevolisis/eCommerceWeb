import {React} from 'react';

export default function Slider({datas,nextslide,prevslide,currentslide}){

    const body=datas.filter((data,i)=>{
        if(i===currentslide){
        return data
        }else{
        return null
        }
    }).map((data,i)=>{
        const{imagelink,description}=data;

        return(
            <div className='slidercon' key={i}>
            <div className='icons' onClick={()=>prevslide()}>
                <i className='fa fa-arrow-left' style={{marginTop:'50%'}}></i>
            </div>
            <div className='slider'>
            <img src={imagelink} alt={description} />
            </div>
            <div className='icons2' onClick={()=>nextslide()}>
                <i className='fa fa-arrow-right' style={{marginTop:'50%'}}></i>
            </div>
 
            </div>
        )
    })


    return(
        <>
{body}
        </>
    )
}


// return(
//     <div className='slidercon' key={i}>

//     <div className='icons' onClick={()=>prevslide()}>
//         <i className='fa fa-arrow-left' style={{marginTop:'50%'}}></i>
//     </div>
//     <div className={i!==currentslide ? 'slider' : 'slider2'}>

// {i!==currentslide && <img src={imagelink} alt={description} />}

//     </div>
//     <div className='icons2' onClick={()=>nextslide()}>
//         <i className='fa fa-arrow-right' style={{marginTop:'50%'}}></i>
//     </div>

//     </div>
// )