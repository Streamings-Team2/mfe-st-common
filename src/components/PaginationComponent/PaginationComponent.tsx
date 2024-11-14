import React from 'react';
import "./paginationComponent.css"
import Button from '../Button/Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  visiblePages: number[];
  onPageChange: (page: number) => void;
}
  
const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  visiblePages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <Button 
          className='previous'
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={!(currentPage > 1)}
      >
        Previous
      </Button>

      {visiblePages[0] > 1 && (
        <>
          <Button onClick={() => handlePageChange(1)}>1</Button>
          {visiblePages[0] > 2 && <span>...</span>}
        </>
      )}

      {visiblePages.map((page) => (
        <Button
          key={page}
          onClick={() => handlePageChange(page)}
          className={page === currentPage ? 'active' : ''}
        >
          {page}
        </Button>
      ))}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && <span>...</span>}
          <Button onClick={() => handlePageChange(totalPages)}>{totalPages}</Button>
        </>
      )}

      <Button 
        className='next'
        onClick={() => handlePageChange(currentPage + 1)} 
        disabled={!(currentPage < totalPages)}>
        Next
      </Button>
    </div>
  );
};

export default PaginationComponent;