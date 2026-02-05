import React from 'react'
import { ExpressIcon, MongoDBIcon, NodeIcon, ReactIcon } from './Svg.jsx'
import Logo from './Logo.jsx'
import Contact from './Contact.jsx';

function Hero() {

  return (
    <>
      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-12 md:mt-20 mb-10 gap-8 px-4">

        {/* LOGO */}
        <div className="rounded-lg p-4 border-neutral-200 dark:border-gray-700 shadow-lg shadow-blue-600/10">
          <Logo className="size-28 md:size-40 rounded-full bg-slate-600 hover:scale-105 transition duration-700 shadow-lg" />
        </div>

        {/* TEXT CONTENT */}
        <div className="text-black dark:text-gray-300 md:ml-8 text-center md:text-left max-w-3xl">

          <h1 className="antialiased text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 bg-gradient-to-b from-gray-800 to-neutral-400 bg-clip-text text-transparent">
            Hi! I'm Abhishek Maheshwari <br />
            <span className="bg-gradient-to-b from-gray-300 to-neutral-500 bg-clip-text text-transparent">
              MERN Stack Developer
            </span>
          </h1>

          <p className="leading-7 tracking-wide md:leading-8 text-sm sm:text-base text-neutral-400 dark:text-neutral-500">

            I build scalable and interactive web applications using

            {/* MongoDB */}
            <span className="inline-flex items-center outline-dashed rounded-lg mx-2 px-2 -outline-offset-4">
              <MongoDBIcon className="w-4 h-4" />
              <span className="font-semibold text-[#4AA73C] px-1">MongoDB</span>
            </span>,

            {/* Express */}
            <span className="inline-flex items-center outline-dashed rounded-lg mx-2 px-2 -outline-offset-4">
              <ExpressIcon className="w-4 h-4 dark:bg-white" />
              <span className="font-semibold px-1 text-black">Express.js</span>
            </span>,

            {/* React */}
            <span className="inline-flex items-center outline-dashed rounded-lg mx-2 px-2 -outline-offset-4">
              <ReactIcon className="w-4 h-4" />
              <span className="text-blue-400 font-semibold px-1">React</span>
            </span>,

            {/* Node */}
            <span className="inline-flex items-center outline-dashed rounded-lg ml-2 px-2 -outline-offset-4">
              <NodeIcon className="w-4 h-4" />
              <span className="text-green-700 font-semibold px-1">Node.js</span>
            </span>

            . Focused on clean
            <b className="ml-1 text-black dark:text-white">UI</b>,
            performance, and building real-world products.
          </p>
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-center mb-16 px-4">
        <button
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1WxbYTA2AEC_ZAwdOzV-NYIH8whbIr-lo/view?usp=drivesdk',
              '_blank'
            )
          }
          className="bg-black px-6 py-2 rounded-full text-white text-sm md:text-base shadow-lg hover:bg-gray-900 hover:scale-105 transition duration-700 dark:bg-neutral-800"
        >
          Resume / CV
        </button>
      </div>

      <Contact />
    </>
  )
}

export default Hero
