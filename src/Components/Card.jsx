import React from 'react'
import { Link } from 'react-router'

function Card({title,live,Img}) {
    return (
    <div>
        <div className="flex flex-wrap gap-6 justify-center">
            <div className="relative w-[90%] max-w-[350px] h-[250px] rounded-3xl bg-white shadow-lg shadow-blue-500/50 md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[350px] transition-all  hover:bg-gray-500 ">
                <img 
                    className=' ml-12 mt-24 w-[290px] h-[150px] rounded-3xl bg-white shadow-lg hover:scale-95 translate-x-0 shadow-blue-500/50 md:w-[400px] md:h-[150px] lg:w-[250px] lg:h-[150px] transition-all '
                    src={Img} alt="" />
                <div className=" absolute p-6 top-0">
                    <h2 className="text-xl font-bold text-blue-600 mb-2">{title}</h2>
                {/* <p className="text-gray-700"></p> */}
                </div>
                <div className='flex'>
                        <p className='absolute ml-[5%] mt-[16%] bg-gray-600 w-fit h-fit pb-1 px-1 text-zinc-100'>React.Js</p>
                        
                    </div>
                <Link
                    to={live}
                    className="absolute flex flex-col bottom-5 right-6 px-4 py-1 border-1 text-white bg-black border-black rounded-full font-semibold shadow-md shadow-blue-600/50 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-800/70 transition-all duration-300"
                >
                    Live
                </Link>
                {/* <Link
                    to={live}
                    className="absolute flex flex-col bottom-5 right-28 px-3 py-1 border-1 text-white bg-black border-black rounded-full font-semibold shadow-md shadow-blue-600/50 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-800/70 transition-all duration-300"
                >
                    Live
                </Link> */}
            
            </div>

        </div>
    </div>
    )
}

export default Card