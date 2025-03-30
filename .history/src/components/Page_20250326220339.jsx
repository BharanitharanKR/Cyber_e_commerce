import React, { useState } from "react";

const Page = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="flex gap-4">
        {[...Array(totalPages)].map((_, num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num + 1)}
            className={`px-4 py-2 transition-all duration-300 rounded-md border border-red-700 ${
              currentPage === num + 1
                ? "bg-red-700 text-white"
                : "hover:bg-red-700 hover:text-white"
            } cursor-pointer`}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
