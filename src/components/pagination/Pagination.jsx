import React, { useState } from 'react';
import './Pagination.css';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";


const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="Pagination">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <HiChevronLeft size={22} />
      </button>
      <span>{`${currentPage}/${totalPages}`}</span>
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <HiChevronRight size={22} />
      </button>
    </div>
  );
};

export default Pagination;
