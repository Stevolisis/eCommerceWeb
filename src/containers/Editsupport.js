import {React,useRef} from 'react';
import { useParams } from 'react-router-dom';
import {Editor} from '@tinymce/tinymce-react';
import Swal from 'sweetalert2';

export default function Editsupport(){
    const editorRef=useRef();
    const {id}=useParams();
    const editsupport=(()=>{
        Swal.fire(
          'Successful!',
          'Edit F.A.Q Successful.',
          'success'
        )
        });

    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
        <p>EDIT F.A.Q({id})</p>
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
        <button onClick={()=>editsupport()}>EDIT</button>
        </div>
        </div>            
        </div>
        </>
    )
}