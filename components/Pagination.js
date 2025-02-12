"use client";

export default function Pagination({ currentPage, setCurrentPage }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "4rem",
        fontSize: "1.5rem",
      }}
    >
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Prevvvvv
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
