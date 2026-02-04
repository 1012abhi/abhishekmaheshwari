import React from 'react'
import { Link } from 'react-router'

function Card({title,live,Img}) {
    return (
    <div>
        <div className="flex justify-center">
            <div className="relative flex flex-wrap w-[90%] max-w-[350px] h-[250px] rounded-3xl bg-white shadow-lg shadow-blue-500/50 md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[350px]  hover:bg-gray-500 ">
                <img 
                    className=' ml-12 mt-24 max-sm:ml-12 max-sm:mt-20  max-w-[300px] h-[100px] rounded-3xl bg-white shadow-lg hover:scale-95 translate-x-0 shadow-blue-500/50 md:w-[250px] md:h-[140px] lg:w-[250px] lg:h-[150px] transition-all '
                    src={Img} alt="" />
                <div className=" absolute p-6 top-0 flex justify-center w-full">
                    <h2 className="text-xl font-bold text-blue-600 mb-2 max-sm:text-lg max-sm:mt-0">{title}</h2>
                </div>
                <div className='flex'>
                    <p className='ml-[22px] mt-[38%] max-sm:mt-0 max-sm:text-sm bg-gray-600 w-fit h-fit pb-1 px-1 text-zinc-100'>React.Js</p>
                        
                </div>
                <Link
                    to={live}
                    className="absolute flex flex-col bottom-5 right-6 px-4 py-1 border-1 text-white bg-black border-black rounded-full font-semibold shadow-md shadow-blue-600/50 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-800/70 transition-all duration-300"
                >
                    Live
                </Link>
            
            </div>

        </div>
    </div>
    
    )
}

export default Card