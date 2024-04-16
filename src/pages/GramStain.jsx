import React, { useState, useEffect } from 'react';
import "./Common.css";
import Header from '../components/header/Header';
import ImageUpload from '../components/imageuploader/ImageUploader';
import Modal from 'react-modal';
import { useDataContext } from '../context/Context';
import SetImage from '../components/imagesetup/SetImage';

export default function GramStain() {

    const { handleUpload,images } = useDataContext();

//  const [images, setImages] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [filterValue, setFilterValue] = useState('');
    const [filterType, setFilterType] = useState('positive'); // Default value

    const onUpload = (newImages) => {
        console.log('onUpload', newImages);
    handleUpload(newImages)
    setModalIsOpen(false);
};
    const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
};

return (
<>
    <main className='main-container'>
        <div className="card">
			 {/* Header */}
			<Header 
        filterType={filterType}
        handleFilterTypeChange={handleFilterTypeChange}
        UploadImage={() => setModalIsOpen(true)}
        />
			<div className="card-inner">
			{images?.map((item, i) => {
				console.log("item",item)
        return (
					<SetImage image={item} index={i} />
				)
				})}
			</div>
			<div className="flex flex-row gap-4 w-full">
				
			</div>

			 {/* ImageUploader modal Start */}
		<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <ImageUpload onUpload={onUpload} onClick={() => setModalIsOpen(false)} />
        </Modal>
		{/* ImageUploader modal End*/}

		</div>
    </main>
</>
  );
};


