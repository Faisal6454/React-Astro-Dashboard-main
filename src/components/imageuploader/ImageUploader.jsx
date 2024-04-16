import React, { useState } from 'react';
import "./ImageUploader.css";

const ImageUpload = ({ onUpload ,onClick}) => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const updatedImages = files.map(file => {
      const colorCodes = ['#7f00ff', '#f2994a', '#0f3443'];
      const randomColor = colorCodes[Math.floor(Math.random() * colorCodes.length)];
      return { file, colorCode: randomColor };
    });
    console.log("updatedImages",updatedImages)
    setImages([...images, ...updatedImages]);
  };

  const handleRemove = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleUploadImages = () => {
    onUpload(images);
    setImages([]);
  };

    const handleFileChange = (e) => {
        if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };

  return (
    <div className=''>
      <div className="Uploader-Btn-G">
        <button 
        className="sr-only Btn-3" 
        onClick={() => document.querySelector('.img').click()}
        >
          Choose a file
        </button>
        <input type="file" multiple accept="image/*" onChange={handleUpload} className="img" style={{display: 'none'}} />

      <div className="Uploader-Btn">
        <button
          onClick={handleUploadImages}
          className="Btn-1"
        >
          Upload
        </button>
        <button
          onClick={onClick}
          className="Btn-2"
        >
          Close
        </button>
      </div>
    </div>

    <div className="Uploader-Card">
            {images.map((image, index) => (
        <div key={index} className="Uploader-Body">
          <div className="Uploader-Body-2" >
            <div className="Uploader-Body-3">
                <div className="Uploader-Body-Inner" >
                    <img
                        src={URL.createObjectURL(image.file)}
                        alt={`Image ${index}`}
                    />               
                </div>
            </div>

                <button onClick={() => handleRemove(index)} >
                    Remove
                </button>
          </div>
        </div>
        ))}
        </div>
    </div>
  );
};

export default ImageUpload;
