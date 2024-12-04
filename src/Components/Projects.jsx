import React, { useState, useEffect } from 'react';
import { Link } from 'react-router'; // Correct import
import axios from 'axios';
import Card from './Card';
import Comming from './Comming';
import Button from './Button';
import Contact from './Contact';

function ProjectCard() {
  const [data, setData] = useState([]);
  console.log('data:', data);
  
  const title = {
    id1: 'Employee Management System',
    id2: 'lenis-scroller',
    id3: 'resbuilder'
  }

  const live = {
    live1: 'https://employee-management-system-tau-seven.vercel.app/',
    live2: 'https://lenis-scroller-2z3aemijn-1012abhis-projects.vercel.app/',
    live3: '',
  }
  
  const Img = {
    img1: 'ems.png',
    img2: 'leniss.png',
  }
  const description = {
    des3: 'A streamlined web application designed to help users create professional resumes effortlessly.'
  }
  // Fetch data inside useEffect to prevent infinite loop
  useEffect(() => {
    try {
      axios
        .get('https://api.github.com/users/1012abhi/repos')
        .then((response) => setData(response.data))
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
      
    }
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <>  
        <div className='w-full '>
              <p className=' text-4xl mb-5 mt-0 pt-0 max-sm:text-3xl'><b>Live Project</b></p>
            <div className='flex flex-wrap gap-6 justify-center '>
              <Card 
                title={title.id1}
                live={live.live1}
                Img={Img.img1}
                />

              <Card 
                title={title.id2}
                live={live.live2}
                Img={Img.img2}
                />
              <Comming 
                title={title.id3}
                description={description.des3}
              />
            
            </div>
            <div className=' '>
        <Contact />
      </div>

            <p className=' text-4xl mb-12 mt-14 pt-0 max-sm:text-3xl'><b>Github Projects Repo</b></p>
          <div className="flex flex-wrap gap-6 justify-center">
            
            {data.map((repo) => (
              <div
                key={repo.id}
                className="relative w-[90%] max-w-[350px] h-[250px] rounded-3xl bg-white shadow-lg shadow-blue-500/50 md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[350px] transition-all hover:bg-gray-500 group"
              > 
                {/* <img 
                className='w-[90%] max-w-[350px] h-[250px] rounded-3xl bg-white shadow-lg shadow-blue-500/50 md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[350px] transition-all'
                src="1359.jpg" alt="" /> */}
                <div className=" absolute p-6 top-0">
                  <h2 className="text-xl font-bold text-blue-600 mb-2 items-center">{repo.name}</h2>
                  <p className="text-gray-700 mt-5 group-hover:text-white">{repo.description || 'No description available'}</p>
                </div>
                <Link
                  to={`${repo.html_url}`}
                  className="absolute flex flex-col bottom-5 right-5 px-3 py-1 border-1 text-white bg-black border-black rounded-full font-semibold shadow-md shadow-blue-600/50 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-800/70 transition-all duration-300"
                >
                  Github
                </Link>
                {/* <Link
                  to={`https://employee-management-system-tau-seven.vercel.app/`}
                  className="absolute flex flex-col bottom-5 right-28 px-3 py-1 border-1 text-white bg-black border-black rounded-full font-semibold shadow-md shadow-blue-600/50 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-800/70 transition-all duration-300"
                >
                  Live
                </Link> */}
                
              </div>
            ))}
          </div>
        <Button />
      
        </div>
    </>
  );
}

export default ProjectCard;
