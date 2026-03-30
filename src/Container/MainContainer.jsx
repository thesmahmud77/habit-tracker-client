import React from "react";

const MainContainer = ({ children }) => {
  return (
    <div className="max-w-7xl min-h-screen mx-auto px-4 text-center items-center">
      {children}
    </div>
  );
};

export default MainContainer;
