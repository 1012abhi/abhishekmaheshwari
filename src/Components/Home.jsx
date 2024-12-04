import React from "react";

const projects = [
  {
    id: 1,
    title: "MERN Stack Ecommerce",
    description: "A full-stack ecommerce website with user authentication and cart functionality.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    id: 2,
    title: "Video Call Platform",
    description: "Real-time video conferencing with WebRTC and WebSockets.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Task tracking and assignment application for teams.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="block mt-4 bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
