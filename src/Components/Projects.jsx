// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Correct import
// import axios from 'axios';

// function ProjectCard() {
//   const [data, setData] = useState([]);

//   // Fetch data inside useEffect to prevent infinite loop
//   useEffect(() => {
//     axios
//       .get('https://api.github.com/users/1012abhi/repos')
//       .then((response) => setData(response.data))
//       .catch((err) => console.error(err));
//   }, []); // Empty dependency array ensures it runs only once on mount

//   return (
//     <div className="flex flex-wrap gap-6 justify-center">
//       {data.map((repo) => (
//         <div
//           key={repo.id}
//           className="relative w-[90%] max-w-[350px] h-[250px] rounded-3xl bg-white shadow-lg shadow-blue-500/50 md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[350px] transition-all"
//         >
//           <div className="p-4">
//             <h2 className="text-xl font-bold text-blue-600 mb-2">{repo.full_name}</h2>
//             <p className="text-gray-700">{repo.description || 'No description available'}</p>
//           </div>
//           <Link
//             to={`/repo/${repo.name}`}
//             className="absolute flex flex-col bottom-5 right-5 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-md shadow-blue-600/50 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-800/70 transition-all duration-300"
//           >
//             View
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProjectCard;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router'; // Correct import
import axios from 'axios';
import Card from './Card';
import Comming from './Comming';

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
              <p className=' text-4xl font-semibold mb-5 mt-0 pt-0'>Live Project</p>
            <div className='flex justify-center gap-8'>
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


            <p className=' text-4xl font-semibold mb-5 mt-4 pt-0'>Github Projects Repo</p>
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
                  <h2 className="text-xl font-bold text-blue-600 mb-2">{repo.name}</h2>
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
        </div>
    </>
  );
}

export default ProjectCard;