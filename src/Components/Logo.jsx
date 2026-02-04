import React from "react";

function Logo({className}) {
  return (
    <div>
      <div className={`flex justify-center items-center ${className}`}>
        <img src="1359.jpg" alt="abhishek" className={`flex bg-gray-200 rounded-full dark:bg-gray-800`} />
        {/* <span className="font-bold">Abhishek</span> */}
      </div>
    </div>
  );
}

export default Logo;
