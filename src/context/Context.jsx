//Context.js
import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const useDataContext = () => {
  return useContext(Context);
};

export const DataProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const handleUpload = (newImages) => {
    const updatedImages = [...images, ...newImages];
    console.log("updatedImages",updatedImages)
    setImages(updatedImages);
  };


  return (
    <Context.Provider value={{ images, handleUpload }}>
      {children}
    </Context.Provider>
  );
};