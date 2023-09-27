"use client";
import React from 'react'; // You need to import React when using JSX

const MenuItem = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="
          px-4
          py-3
          sm:px-0
          hover:bg-neutral-100
          transition
          font-semibold
        "
    >
      {label}
    </div>
  );
};

export default MenuItem;

