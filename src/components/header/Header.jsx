import React from 'react';
import "./Header.css";
import { HiPlus } from "react-icons/hi2";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import Pagination from '../pagination/Pagination';


const Header = (props) => {

    // Pagination
const totalItems = 200; // Total number of items
const itemsPerPage = 10; // Number of items per page

const handlePageChange = (page) => {
  // Handle page change here
  console.log(`Go to page ${page}`);
};

  return (
    <>
    <div className='main-title'>
                <header className="Header">
                     {/* Title */}
                <h3>DASHBOARD</h3>
                {/* Pagination */}
                    <div>
                    {/* Your content here */}
                    <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
                    </div>

                   {/* Filter */}
                    <div className="Filter">
                        <label htmlFor="filter">Filter</label>
                        <select id="filterType"
                                value={props.filterType}
                                onChange={props.handleFilterTypeChange}
                        >
                            <option value="positive">Positive</option>
                            <option value="negative">Negative</option>
                        </select>

        <div>
          <button>
          {/* Check box color data hear */}
            
          </button>
        </div>
      </div>

      {/* Upload and Detect buttons */}
      <div className="Image-Upload">
        <button onClick={props.UploadImage}>
        <HiPlus size={20} />  Upload Image
        </button>
        <button>
        <PiMagnifyingGlassFill size={20} />  Detect
        </button>
      </div>
    </header>
</div>
    </>
  );
};

export default Header;
