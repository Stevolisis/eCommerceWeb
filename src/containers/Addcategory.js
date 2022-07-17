import {React,useState} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import ImageUploading from 'react-images-uploading';

export default function Addcategory(){
    const [images, setImages] = useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
      };

    const addcategory=(()=>{
        console.log(images)
       const category={
        name:'Rexona',
        slug:'Rexonabrand',
        img_link:'Rexonatoolkit.jpg'
       }
       
        axios.post('http://localhost:80/addcategory',{category},{withCredentials:true})
        .then(res=>{
            let data=res.data.data;

            Swal.fire(
                'Successful!',
                `Data Done: ${data}`,
                'success'
              )
        }).catch(err=>{

            Swal.fire(
                'Successful!',
                `Error Occured: ${err}`,
                'success'
              )
        });
        });

    return(
        <>
        <div className='admindashcon'>
        <div className='userorderheading'>
        <p>Add Category</p>
        </div>
        <div className='addcategcon'>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Name</p>
            <input type='text' />
            </div>
        </div>
        
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Slug</p>
            <input type='text'/><p>the 'slug is the URL-friendly version of the 
                name. It should contain only lowercase letters, numbers and hyphens'</p>
        </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Thumbnail(Image)</p>
            <img src='/media3/advert6.jpg' alt='addcategimg'/>


            <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        className='upload'
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop Image here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
        </div>
        </div>

        <div className='usereditbtn'>
        <button onClick={()=>addcategory()}>ADD</button>
        </div>
        </div>            
        </div>
        </>
    )
}