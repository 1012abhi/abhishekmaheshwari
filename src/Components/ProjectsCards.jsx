import React, { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
const ProjectsCards = () => {
  const { scrollY } = useScroll();

  const cards = [
    {
      id: 1,
      title: "Website-Monitor",
      description: "A comprehensive full-stack application for monitoring website availability, performance, and sending alerts when issues are detected.",
      imageUrl: "monitor.png",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      category: ["Fullstack"],
      icon: "GitHub.png",
      liveLink: "https://websitemonitor-coral.vercel.app"
    },
    {
      id: 2,
      title: "Exclusive",
      description: "A full-stack e-commerce application with user authentication, product management, and payment processing.",
      imageUrl: "ecom.png",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      category: ["Fullstack"],
      icon: "GitHub.png",
      githubLink: "https://github.com/ayush789815/ecommerce"
    },
    {
      id: 3,
      title: "Resume Builder Application ",
      description: "A full-stack application for creating and managing professional resumes.",
      imageUrl: "resume.png",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      category: ["Fullstack"],
      icon: "GitHub.png",
      liveLink: "https://resbuilder-beta.vercel.app"
    },
    {
      id: 4,
      title: "Uber Clone",
      description: "A full-stack application that mimics the core functionality of Uber, including user registration, ride booking, and driver management.",
      imageUrl: "uber1.png",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      category: ["Fullstack"],
      icon: "GitHub.png",
      liveLink: "https://ridebook.vercel.app"
    },
    {
      id: 5,
      title: "Employee Management System",
      description: "A full-stack application for managing employee information, roles, and permissions.",
      imageUrl: "ems2.png",
      technologies: ["React", "Tailwind CSS", "Local Storage"],
      category: ["Frontend"],
      icon: "GitHub.png",
      liveLink: "https://employee-management-system-tau-seven.vercel.app/"
    },
    {
      id: 6,
      title: "Lenis Scroller",
      description: "A smooth scrolling experience using Lenis and Framer Motion.",
      imageUrl: "leniss.png",
      technologies: ["React", "Lenis", "Framer Motion", "Tailwind CSS", "Gsap"],
      category: ["Frontend"],
      icon: "GitHub.png",
      liveLink: "https://lenis-scroller.vercel.app"
    },
    {
      id: 7,
      title: "YouTube Backend",
      description: "A backend system for managing YouTube-like video content and user interactions.",
      imageUrl: "youtube.png",
      technologies: ["Node.js", "Express", "MongoDB"],
      category: ["Backend"],
      icon: "GitHub.png",
      githubLink: "https://github.com/1012abhi/youtube-backend"
    },

  ]

  // Transform scroll position to card animation
  const cardY = useTransform(scrollY, [0, 500, 1000], [100, 0, -100]);
  const cardScale = useTransform(scrollY, [0, 500, 1000], [0.8, 1, 0.8]);
  const cardZIndex = useTransform(scrollY, [0, 500, 1000], [1, 100, 1]);

  // 🔥 SHOW ALL STATE
  const [showAll, setShowAll] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

  // pagination logic
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;


  const filteredCards =
    activeFilters.length === 0
      ? cards
      : cards.filter((card) =>
        activeFilters.some((filter) =>
          card.category.includes(filter)
        )
      );

  const visibleCards = showAll
    ? filteredCards
    : filteredCards.slice(startIndex, startIndex + itemsPerPage);

  // 👇 IMPORTANT
  // const visibleCards = showAll
  //   ? cards
  //   : cards.slice(startIndex, startIndex + itemsPerPage);


  const toggleFilter = (filter) => {
    setCurrentPage(1);
    if (filter === "All") {
      setActiveFilters([]);
      return;
    }

    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter) // remove
        : [...prev, filter] // add
    );
  };

  return (
    <div className="relative w-full mb-16 mt-24">
      <h1 className="font-mono font-medium text-3xl text-center mb-12 pt-8 dark:text-slate-400">Projects</h1>
      <h3 className="text-center text-gray-500 dark:text-gray-400 mb-8">Click on a project to see more details</h3>

      <div className="w-full flex flex-col items-start gap-4 sm:ml-28 mt-8 px-4">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          Filter
        </h3>

        <div className="flex flex-wrap sm:justify-start gap-3">
          {["All", "Fullstack", "Frontend", "Backend"].map((filter) => {
            const isActive =
              filter === "All"
                ? activeFilters.length === 0
                : activeFilters.includes(filter);

            return (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`
            px-4 py-1 rounded-full border transition-all duration-300
            text-sm sm:text-base
            ${isActive
                    ? "bg-black text-white border-black dark:bg-white dark:text-black"
                    : "bg-slate-200 text-gray-600 dark:bg-zinc-800 dark:text-gray-400"
                  }
          `}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* <span className="ml-4">Frontend</span> <span className="ml-4">Backend</span> */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-4 min-h-screen mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ y: cardY, scale: cardScale, zIndex: cardZIndex }}
      >
        {
          visibleCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="h-auto max-w-[350px] bg-slate-50 dark:bg-zinc-900 p-8 rounded-lg shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)", y: -10 }}
            >
              <motion.img
                src={card.imageUrl}
                alt={card.title}
                whileHover={{
                  rotate: -6,
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                }}
                className="mx-auto"
              />

              <div className="flex justify-between items-center">
                <h2 className="my-4 dark:text-gray-300 text-lg font-bold">{card.title}</h2>
                <div className="flex gap-4 mt-3">
                  {/* GitHub Link */}
                  {card.githubLink && (
                    <a
                      href={card.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                    >
                      <img src="GitHub.png" alt="GitHub" className="w-5 h-5" />
                    </a>
                  )}

                  {/* Live / Deploy Link */}
                  {card.liveLink && (
                    <a
                      href={card.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <img src="browser-access.png" alt="Live" className="w-5 h-5" />
                    </a>
                  )}
                </div>

              </div>
              <p className="mb-4 dark:text-gray-400 tracking-tighter">{card.description}</p>
              <h1 className="dark:text-gray-300 text-md font-semibold mb-4">Technologies</h1>
              <div className="flex flex-wrap gap-2">
                {card.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="bg-gradient-to-tr from-zinc-500 to-zinc-600 text-white text-sm px-3 py-1 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))
        }
      </motion.div>
      <div className="flex justify-center mt-8">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 font-mono border rounded-md shadow hover:shadow-lg transition dark:text-white"
          >
            Show all projects
          </button>
        ) : (
          <button
            onClick={() => {
              setShowAll(false);
              setCurrentPage(1);
            }}
            className="px-6 py-2 font-mono border rounded-md shadow hover:shadow-lg transition dark:text-white"
          >
            Show less
          </button>
        )}
      </div>

    </div>
  );
};

export default ProjectsCards;
