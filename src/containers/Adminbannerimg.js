import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import { MultiSelect } from 'react-multi-select-component';
import Swal from 'sweetalert2';

export default function Adminbannerimg(){
    const [selected,setSelected]=useState([]);
    const [options,setOptions]=useState([]);

    const addspec=(()=>{
        Swal.fire(
          'Successful!',
          'Updated Successfully.',
          'success'
        )
        });

    return(
        <>
            <div className='usermaincon'>
        <div className='userorderheading'><p>Banner Images</p></div>
        <div className='userorderscon'>









        <div className='previewimg2' style={{justifyContent:'space-between',width:'100%'}}>
        <div className='previewimg' >
            <img src='/media3/advert6.jpg' alt='Banner 1'/>
            </div>
            <div className='previewimg'>
            <img src='/media3/advert6.jpg' alt='Banner 1'/>
            </div>
            </div>

        <div className='usereditnamecon' style={{paddingBottom:'20px'}}>
        <div className='usereditname'>
            <p>Banner 1</p>
            <input type='file' />
        </div>
        <div className='usereditname'>
            <p>Banner 2</p>
            <input type='file' />
        </div>

        </div>
        <div className='usereditadditionalinfocon' style={{marginTop:'-25px'}}>
            <div className='usereditadditionalinfo'>
            <p>Label</p>
            <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy='Select'
            />
            <p>Select label(Category/Product) to which the user will be sent to after clicking the banners.</p>
            <p><b>Note: </b>Select the labels chronologically, e.g the first label you ticked, will be allocated to the first banner and so on.</p>
            </div>
        </div>
<hr/>






        <div className='previewimg2' style={{marginTop:'30px'}}>
        <div className='previewimg' >
            <img src='/media3/advert6.jpg' alt='Banner 1'/>
            </div>
            <div className='previewimg' >
            <img src='/media3/advert6.jpg' alt='Banner 1'/>
            </div>
            <div className='previewimg' >
            <img src='/media3/advert6.jpg' alt='Banner 1'/>
            </div>
            <div className='previewimg' >
            <img src='/media3/advert6.jpg' alt='Banner 1'/>
            </div>
            <div className='previewimg' >
            <img src='/media3/advert6.jpg' alt='Banner 1'/>
            </div>
            <div className='previewimg' >
            <img src='/media3/advert6.jpg' alt='Banner 1'/>
            </div>
            <div className='previewimg'>
            <img src='/media3/advert6.jpg' alt='Banner 1'/>
            </div>
            </div>
        <div className='usereditadditionalinfocon' style={{paddingTop:'6px'}}>
            <div className='usereditadditionalinfo'>
            <p>Slider Images</p>
            <input type='file' multiple/>
            <p>select multiple images for you slider. Recommended number of images (6)</p>
            </div>
        </div>

        <div className='usereditadditionalinfocon' style={{marginTop:'-25px'}}>
            <div className='usereditadditionalinfo'>
            <p>Label</p>
            <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy='Select'
            />
            <p>Select label(Category/Product) to which the user will be sent to after clicking the banners.</p>
            <p><b>Note: </b>Select the labels chronologically, e.g the first label you ticked, will be allocated to the first slider and so on.</p>
            </div>
        </div>

<hr/>










        <div className='previewimg2' style={{marginTop:'30px'}}>
        <div className='previewimg' >
            <img src='/media3/advert6.jpg' alt='Banner 1'/>
            </div>
            <div className='previewimg' >
            <img src='/media3/advert6.jpg' alt='Banner 1'/>
            </div>
            <div className='previewimg' >
            <img src='/media3/advert6.jpg' alt='Banner 1'/>
            </div>
            <div className='previewimg' >
            <img src='/media3/advert6.jpg' alt='Banner 1'/>
            </div>
            </div>

            <div className='usereditadditionalinfocon' style={{paddingTop:'6px'}}>
            <div className='usereditadditionalinfo'>
            <p>Banner Images</p>
            <input type='file' multiple/>
            <p>select multiple images for you slider. Recommended number of images (6)</p>
            </div>
        </div>
        <div className='usereditadditionalinfocon' style={{marginTop:'-25px'}}>
            <div className='usereditadditionalinfo'>
            <p>Label</p>
            <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy='Select'
            />
            <p>Select label(Category/Product) to which the user will be sent to after clicking the banners.</p>
            <p><b>Note: </b>Select the labels chronologically, e.g the first label you ticked, will be allocated to the first slider and so on.</p>
            </div>
        </div>









        <div className='usereditbtn'>
        <button onClick={()=>addspec()}>UPDATE</button>
        </div>
        </div>    
        </div>    
        </>
    )
}