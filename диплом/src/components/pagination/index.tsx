// import React from 'react'

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// }

// export const Pagination: React.FC<PaginationProps> = ({
//   currentPage,
//   totalPages,
//   onPageChange
// }) => {
//   const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

//   return (
//     <div className="pagination">
//       {pageNumbers.map((page) => (
//         <button
//           key={page}
//           className={`page-link ${page === currentPage ? 'active' : ''}`}
//           onClick={() => onPageChange(page)}
//         >
//           {page}
//         </button>
//       ))}
//     </div>
//   )
// }
