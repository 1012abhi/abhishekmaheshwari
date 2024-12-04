import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, NavLink, useNavigate } from 'react-router'
function App() {
const navigate = useNavigate()
  return (
    <>  
      <div className='bg-[#dedad7b3] w-full h-screen'>
          <div className="flex flex-wrap justify-center items-center mt-16 gap-x-8 gap-y-8 sm:gap-x-16 sm:mt-20 md:gap-x-24 md:mt-24">
            <div className="flex justify-center">
              <img 
                src="1359.jpg" 
                alt="Responsive Image" 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border border-black"
              />
            </div>

            <div className="text-center sm:text-left font-normal text-xl sm:text-2xl md:text-3xl">
              <p>Hii!</p>
              <p>I'm <b>Abhishek Maheshwari</b></p>
              <br />
              <p>MERN Stack Developer</p>
            </div>
          </div>
          
          <div className='fixed flex flex-wrap justify-center bottom-60 inset-x-0 px-2 py-2'>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg px-5 py-2 rounded-full text-black bg-black shadow-blue-600/50 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-800/70 transition-all duration-300">
              <div className='flex flex-col'>
                <button 
                  onClick={() => navigate('/home')}
                  className="outline-none px-4 py-1 rounded-full text-white bg-black shadow-lg"
                  ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                {/* <p className=''>Home</p> */}
                </button>
              </div>
              <Link 
              className='outline-none px-4 py-1 rounded-full text-white bg-black shadow-lg'
              to='/about'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                {/* About */}
              </Link>
              <Link 
              className='outline-none px-4 py-1 rounded-full text-white bg-black shadow-lg'
              to={'/project'}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6">
                  <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M3.75 8.25V6.75c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v.75h6c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 0 1 3.75 16.5v-8.25Z" />
                </svg>
                {/* Projects */}

              </Link>
            </div>
          
          </div>

          {/* fixed flex flex-wrap justify-center rounded-3xl w-fit h-fit mt-60 bg-zinc-950 py-3 text-white */}
      </div>
  </>
  )
}

export default App
