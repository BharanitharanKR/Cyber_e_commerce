import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const Tracker = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="py-4 px-6 text-gray-600 text-sm flex items-center"
    >
      <Link to="/" className="flex items-center gap-1 hover:text-black">
        <FiHome />
        <span>Home</span>
      </Link>
      {pathnames.map((value, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={index} className="flex items-center gap-1">
            <span className="mx-2">{">"}</span>
            {isLast ? (
              <span className="text-red-600">{value.replace("-", " ")}</span>
            ) : (
              <Link to={routeTo} className="hover:text-black">
                {value.replace("-", " ")}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Tracker;
