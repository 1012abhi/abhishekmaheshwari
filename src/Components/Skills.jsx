import React from "react";
import { Link } from "react-router";
import Button from "./Button";

function Skills() {
  return (
    <>
      <h1 className="text-3xl text-center text-[#656465] mb-6">
        <b>Skills</b>
        </h1>

      <div className="relative mx-auto mt-10 w-[90%] max-w-5xl h-fit shadow-lg px-5 py-10 rounded-3xl text-black bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-gray-700  transition-all duration-300">
        {/* First Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
          <img className="h-16 sm:h-20 md:h-24" src="HTML5_Logo_512.png" alt="HTML5" />
          <img className="h-16 sm:h-20 md:h-24" src="css-3.png" alt="CSS3" />
          <img className="h-16 pt-5 sm:h-20 md:h-24" src="js.png" alt="JavaScript" />
          <img className="h-14 pt-2 sm:h-18 md:h-20" src="nodejs.png" alt="Node.js" />
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
          <img className="h-14 sm:h-18 md:h-20" src="science.png" alt="Science Icon" />
          <img className="h-14 sm:h-18 md:h-20 bg-zinc-300" src="c-.png" alt="Express.js" />
          {/* <Link>
            <svg
              className="h-14 sm:h-18 md:h-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 306 344.35"
              fill="currentColor"
            >
              <path fill="#00599C" d="M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262z" />
              <path fill="#004482" d="M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z" />
              <path fill="#659AD2" d="M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z" />
              <g>
                <path
                  fill="#FFFFFF"
                  d="M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"
                />
              </g>
            </svg>
          </Link> */}
          <img className="h-8 sm:h-10 md:h-12" src="MongoDB_SpringGreen.png" alt="MongoDB" />
        </div>

        {/* Third Row */}
        <div className="flex flex-wrap justify-center gap-8">
          <img className="h-14 sm:h-18 md:h-20" src="github-logo.png" alt="GitHub" />
          <img className="h-14 sm:h-18 md:h-20" src="Visual_Studio_Code_1.35_icon.svg" alt="VS Code" />
        </div>
      </div>

      <Button />
    </>
  );
}

export default Skills;
