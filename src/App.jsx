import { Link } from 'react-router';
import './App.css';
import Button from './Components/Button';
import Contact from './Components/Contact';
import Skills from './Components/Skills'

function App() {
  return (
    <>  
        <div className=''>


          <div className="flex flex-wrap justify-center items-center mt-16 gap-x-12 gap-y-12 sm:gap-x-20 sm:mt-24 md:gap-x-28 md:mt-28">
            {/* Enlarged Image */}
            <div className="flex justify-center">
              <img 
                src="1359.jpg" 
                alt="Responsive Image" 
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border border-black"
              />
            </div>

            {/* Enlarged Text */}
            <div className="text-center sm:text-left font-normal text-[#656465] text-2xl sm:text-3xl md:text-4xl">
              <p>Hii!</p>
              <p>I'm <b>Abhishek Maheshwari</b></p>
              <br />
              <p><span className='text-[#049C43]'>M</span><span className='text-[#656465]'>E</span><span className='text-[#37CEDE]'>R</span><span className='text-[#74C05A]'>N</span> Stack Developer</p>
              <Link 
              className='underline max-sm:mt-[2rem] max-sm-ml-[2rem] text-[#656465] text-3xl max-sm:text-xl'
              to='https://drive.google.com/file/d/12Deg6sLJdHfxGsqLjyD1kZbIX0M_75Fg/view?usp=drivesdk'>Resume</Link>
            </div>
          </div>
          
          <Button />
          <Contact />
      {/* <Skills />   */}

          {/* fixed flex flex-wrap justify-center rounded-3xl w-fit h-fit mt-60 bg-zinc-950 py-3 text-white */}
        </div>

    </>
  );
}

export default App;
