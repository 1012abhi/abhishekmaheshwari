import React from 'react'
import { Link } from 'react-router'

function Comming({title,description}) {
    return (
    <div>
        <div className="flex flex-wrap justify-center hover:text-white">
     
            <div className="relative w-[90%] max-w-[350px] h-[250px] rounded-3xl bg-white shadow-lg shadow-blue-500/50 md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[350px] transition-all hover:bg-gray-500 group">
                <div className=" absolute p-6 top-0">
                    <h2 className="text-xl font-bold text-blue-600 mb-2">{title}</h2>
                    <p className="text-gray-700 group-hover:text-white">{description}</p>
                </div>

                    <p className='absolute left-24 mt-[45%] w-fit h-fit px-3 py-2 rounded-md bg-slate-700 font-bold  text-zinc-100'>Full stack project </p>
                <div className='flex'>
                    <p className=' ml-[4%] mt-[65%] bg-gray-600 w-fit h-fit pb-1 px-1 text-zinc-100'>React.Js</p>
                    <p className=' ml-[4%] mt-[65%] bg-gray-600 w-fit h-fit pb-1 px-1 text-zinc-100'>Node.Js</p>
                    <p className=' ml-[4%] mt-[65%] bg-gray-600 w-fit h-fit pb-1 px-1 text-zinc-100'>Express.Js</p>
                    <p className=' ml-[4%] mt-[65%] bg-gray-600 w-fit h-fit pb-1 px-1 text-zinc-100'>MongoDB</p>
                </div>
                <Link
                to={``}
                className="absolute flex flex-col bottom-5 right-5 px-3 py-1 border-1 text-white text-xl pb-2 font-semibold bg-slate-700 border-black rounded-full shadow-md shadow-blue-600/50 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-800/70 transition-all duration-300"
                >
                Comming Soon...
                </Link>
                
                
            </div>

        </div>
    </div>
  )
}

export default Comming