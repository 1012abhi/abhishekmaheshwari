import React from "react";

function Logo({ className }) {
  return (
    <div>
      <div className={`flex justify-center items-center ${className}`}>
        <img src="/mask.webp"
          alt="Abhishek Maheshwari"
          width="160"
          height="160"
          lazy="eager"
          fetchPriority="high"
          decoding="async" className={`flex bg-gray-200 rounded-full dark:bg-neutral-800`} />
        {/* <span className="font-bold">Abhishek</span> */}
      </div>
    </div>
  );
}

export default Logo;
