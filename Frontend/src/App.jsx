import { useRef, useEffect, useState } from 'react';
import SkillsScroll from './Components/SkillsScroll';
import Navebar from './Components/Navebar';
import Container from './Components/Container';
import ProjectsCards from './Components/ProjectsCards';
import Hero from './Components/Hero';
import About from './Components/About';
import VisitorCounter from './Components/VisitorCounter';

function App() {
  const projectsRef = useRef(null);
  const skillref = useRef(null);
  const aboutRef = useRef(null);

  const skillsScroll = () => {
    skillref.current?.scrollIntoView({ behavior: 'smooth'});
  }
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth'});
  };
  const scrollToAboutMe = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='relative min-h-screen'>
        <Navebar onProjectsClick={scrollToProjects} onSkillsClick={skillsScroll} onAboutClick={scrollToAboutMe} />
        <Container className={`m-4`}>
          <Hero />
          <div ref={projectsRef}>
            <ProjectsCards />
          </div>
          <div ref={skillref}>
            <SkillsScroll />
          </div>
          <div ref={aboutRef}>
          <About />
          </div>
          <VisitorCounter />
        <div className='mt-20 mb-16 text-neutral-500 dark:text-neutral-600'>
          <p className="text-center text-sm">Design & Developed by <span className='font-bold'>Abhishek </span><br/>
            © 2026. All rights reserved.
          </p>
        </div>
      
        </Container>

        {/* Bottom blur overlay */}
        <div className="pointer-events-none fixed inset-x-0 top-0 h-16 max-w-4xl mx-auto bg-gradient-to-t from-white/80 dark:from-black/80 backdrop-blur-xl" />
        <div className="pointer-events-none fixed inset-x-0 bottom-0 h-16 max-w-4xl mx-auto bg-gradient-to-t from-white/80 dark:from-black/80 backdrop-blur-xl" />

      </div>
    </>
  );
}

export default App;
