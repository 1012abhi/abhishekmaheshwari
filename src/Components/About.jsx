import React from 'react'
import Button from './Button'
import Contact from './Contact'

function About() {
  return (
    <>
      <h1 className='text-3xl text-[#656465]'><b>About</b></h1>
       
       
          <p className='mt-16 text-2xl max-sm:mt-10 max-sm:text-lg text-[#656465]'>Hello,<br/> I’m Abhishek Maheshwari, a passionate MERN stack developer with a strong foundation in data structures and algorithms, web development, and C++ programming. I graduated with a BTech in Computer Science from Radharaman Engineering College, and I’m driven by a desire to create impactful projects that solve real-world problems.
          </p>
        
          <p className='mt-14 text-2xl max-sm:mt-8 max-sm:text-lg text-[#656465]'>I specialize in building dynamic, user-friendly applications with technologies like React.js, Node.js, Express.js, and MongoDB, alongside my expertise in frontend design using HTML, CSS, JavaScript, and frameworks like Tailwind CSS. 
          </p>

          <p className='mt-14 text-2xl max-sm:mt-8 max-sm:text-lg text-[#656465]'>I genuinely enjoy working on backend development, focusing on creating scalable APIs, robust authentication systems, and seamless database integrations. My projects reflect my dedication to crafting solutions that make a difference, including:
          </p>

          <li className='mt-14 text-2xl max-sm:mt-8 max-sm:text-lg text-[#656465]'>Employee Management System: A responsive web application designed to manage employees effectively. Features include an admin dashboard for task assignment, employee dashboards for task tracking, and task prioritization (high, medium, low). Built using React.js, Context API, and localStorage, the project ensures smooth functionality and efficient task management for admins and employees alike.
          </li>

          <li className='mt-14 text-2xl max-sm:mt-8 max-sm:text-lg text-[#656465]'>Resume Builder (Upcoming): A MERN stack project aimed at simplifying the resume creation process for users. It will include features like user authentication, dynamic form inputs, live previews, and downloadable templates. Built with React.js, Node.js, Express.js, and MongoDB, this project is set to highlight my expertise in creating intuitive user experiences and secure backend systems.
          </li>
       
          <p className='mt-14 text-xl max-sm:mt-8 max-sm:text-lg text-[#656465]'>I believe in working with honesty and dedication, and if you're interested in my work, I’d be thrilled to collaborate with you. Whether you’re looking for a developer to bring your vision to life or need support for specific tasks, I’m also available to contribute as a freelancer.</p>    

          <p className='mt-14 text-xl max-sm:mt-8 max-sm:text-lg font-semibold text-[#656465]'>Feel free to explore my portfolio and reach out for exciting collaborations. Let’s create something amazing <span><b>together!</b></span></p>
       
        <Button />
      <div className=''>
        {/* <Contact /> */}
      </div>
    </>
  )
}

export default About