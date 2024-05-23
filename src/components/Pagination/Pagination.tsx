import React from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void; // New prop for handling items per page change
  primary?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange, // Include this in the props destructuring
  primary = true,
}) => {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-3">
        {/* Previous Button */}
        <div className="flex w-1/4 justify-start">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(Math.max(1, currentPage - 1));
            }}
            className={`inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 ${
              currentPage === 1 ? "cursor-not-allowed" : ""
            }`}
          >
            <ArrowLongLeftIcon
              className="mr-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Previous
          </a>
        </div>
        {/* Page Numbers */}
        <div className="flex w-1/2 justify-center">
          {pageNumbers.map((number) => (
            <a
              key={number}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(number);
              }}
              className={`mx-2 inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 ${
                currentPage === number
                  ? "border-indigo-500 text-swyft-green-500"
                  : ""
              }`}
            >
              {number}
            </a>
          ))}
        </div>
        {/* Next Button */}
        <div className="flex w-1/4 justify-end">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(Math.min(pageNumbers.length, currentPage + 1));
            }}
            className={`inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 ${
              currentPage === pageNumbers.length ? "cursor-not-allowed" : ""
            }`}
          >
            Next
            <ArrowLongRightIcon
              className="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </a>
        </div>
      </nav>
      {/* Items per page selection */}
      {totalItems < 10 ? null : (
        <div className="mt-4 sm:mt-0">
          <select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(parseInt(e.target.value, 10))}
            className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {[10, 20, 30, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Pagination;
