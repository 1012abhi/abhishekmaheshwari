import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../utils/ThemeContext';
import Container from "./Container.jsx";
import { Link } from "react-router";
import Logo from "./logo.jsx";

const Navebar = ({ onProjectsClick, onSkillsClick, onAboutClick }) => {

  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="w-full sticky top-0 z-50 bg-transparent">
      <Container className={`py-4`}>
        <div className="flex items-baseline justify-between p-4 rounded-2xl backdrop-blur-sm dark:bg-[#212121]/80 ">
          <div className="flex items-baseline gap-4">
            <Logo className={`size-8 blur-[1px]`}/>
            <button onClick={onProjectsClick} className="text-black dark:text-gray-300 bg-transparent border-none cursor-pointer hover:underline hover:underline-offset-4">Projects</button>
            <Link onClick={onSkillsClick} className="text-black dark:text-gray-300 translate-x-0 hover:underline hover:underline-offset-4">Skills</Link>
            <Link onClick={onAboutClick} className="text-black dark:text-gray-300 translate-x-0 hover:underline hover:underline-offset-4">Me</Link>
            {/* <Link to='/contact' className=" text-black dark:text-gray-300 hover:underline hover:underline-offset-4">Contact</Link> */}
          </div>
          <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-600 transition-colors duration-200 bg-transparent backdrop-blur-md">
            {theme === 'light' ? <Sun /> : <Moon />}
          </button>
        </div>

      </Container>
    </div>
  );
};

export default Navebar;
