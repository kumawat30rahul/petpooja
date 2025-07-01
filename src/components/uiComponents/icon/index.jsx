import React from "react";

const Iconwrapper = ({ children, className }) => {
  return (
    <div
      className={`flex-shrink-0 flex items-center justify-center w-4 h-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Iconwrapper;
