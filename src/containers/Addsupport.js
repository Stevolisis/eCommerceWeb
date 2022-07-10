import {React,useRef} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import Swal from 'sweetalert2';

export default function Addsupport(){
    const editorRef=useRef();
    const addspec=(()=>{
        Swal.fire(
          'Successful!',
          'F.A.Q Added Successfully.',
          'success'
        )
        });

    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
        <p>ADD F.A.Q</p>
        </div>
        <div className='addcategcon'>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Question</p>
            <input type='text' />
            </div>
        </div>
        
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Answer</p>
            <div className='editorcon'>
                <Editor
                onInit={(evt,editor)=> editorRef.current=editor}
                init={{
                    menubar:false
                }}
                />
            </div>
            {/* <textarea/> */}
            </div>
        </div>

        <div className='usereditbtn'>
        <button onClick={()=>addspec()}>ADD</button>
        </div>
        </div>            
        </div>
        </>
    )
}