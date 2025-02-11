"use client"; 

export default function Pagination({ currentPage, setCurrentPage }) {
    return (
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-300 rounded mr-2"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="px-4 py-2">{currentPage}</span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-300 rounded ml-2"
        >
          Next
        </button>
      </div>
    );
  }
  