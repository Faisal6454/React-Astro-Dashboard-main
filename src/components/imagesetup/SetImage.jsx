import React from 'react';
import "./SetImage.css";
import { Link } from 'react-router-dom';


const SetImage = (props) => {
    console.log('props',props)

  
    return (
    <>
    <div className="custom-image-gallery" style={{ width: '10rem', margin: '0.5rem' }}>
        <div className="custom-image-container">
        <div className="custom-image-wrapper" >
        <Link to={`/View/${props.index}`}>
           <img
                className="custom-image"
                src={URL.createObjectURL(props.image.file)}
                alt="blog"
              />
                  </Link>
            
          </div>
        </div>
        
        <div 
          className="custom-checkbox"
          >
          <input
            type="checkbox"
            id="cb1"
            value="cb1"
            className="custom-checkbox-input"
            style={{
              backgroundColor: `${props.image.colorCode}10`, // 80 is the alpha channel (50% opacity)
              border: `2px solid ${props.image.colorCode}`
            }}
          />
        </div>
        <div className='mt-2'>
          <h1>{props.image.file.name}</h1>
        </div>
      </div>
</>
    );
  };
  export default SetImage;
