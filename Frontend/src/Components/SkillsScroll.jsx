import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SkillsScroll = () => {
  const skills = [
    { name: "HTML5", icon: "HTML5.png" },
    { name: "CSS3", icon: "CSS3.png" },
    { name: "JavaScript", icon: "JavaScript.png" },
    { name: "TypeScript", icon: "TypeScript.png" },
    { name: "React", icon: "react.png" },
    { name: "Node.js", icon: "Node.js.png" },
    { name: "Express.js", icon: "Express.png" },
    { name: "NPM", icon: "NPM.png" },
    { name: "MongoDB", icon: "MongoDB.png" },
    { name: "GitHub", icon: "GitHub.png" },
    { name: "Git", icon: "Git.png" },
    { name: "Postman", icon: "Postman.png" },
    { name: "VS Code", icon: "vscode.png" },
  ];

  const containerRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [x, setX] = useState(0);

  /** Auto scroll */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setX((prev) => prev - 1);
    }, 20);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="w-full px-4">
      <h2 className="text-3xl font-mono font-medium text-center text-black dark:text-slate-400 mb-8">
        Skills & Technologies
      </h2>

      <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-zinc-900 dark:to-zinc-900 py-8">
        
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-100 dark:from-zinc-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-200 dark:from-zinc-900 to-transparent z-10 pointer-events-none" />

        {/* DRAG CONTAINER */}
        <motion.div
          ref={containerRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -3000, right: 0 }}
          dragElastic={0.1}
          style={{ x }}
          onHoverStart={() => setIsPaused(true)}
          onHoverEnd={() => setIsPaused(false)}
          onDragStart={() => setIsPaused(true)}
          onDragEnd={() => setIsPaused(false)}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.12 }}
              className="flex-shrink-0 min-w-[120px] flex flex-col items-center gap-3 p-6 rounded-xl bg-white dark:bg-zinc-800 shadow-md"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 object-contain"
              />

              <span
                className={`text-sm font-semibold transition-all duration-300 ${
                  hoveredSkill === skill.name
                    ? "opacity-100 text-black dark:text-white"
                    : "opacity-0 text-gray-400"
                }`}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <p className="text-center text-gray-600 dark:text-gray-400 mt-6 text-sm">
        Drag to explore • Auto-scroll pauses on hover or drag
      </p>
    </div>
  );
};

export default SkillsScroll;
