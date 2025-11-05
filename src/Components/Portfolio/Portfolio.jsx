import React, { useState } from "react";

export default function App() {
  const allProjects = [
    {
      id: 1,
      title: "Festival",
      image: "/Images/2.png",
      tech: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"],
      github: "https://github.com/sheraziwaheed/themewagon-FestavaLive",
      live: "https://themewagon-festava-live-79fm.vercel.app/",
      category: "Frontend",
    },
    {
      id: 2,
      title: "Eflyer",
      image: "/Images/3.png",
      tech: ["HTML", "Tailwind", "BOOTSTRAP",],
      github: "https://github.com/sheraziwaheed/Eflyer",
      live: "https://eflyer.vercel.app/#",
      category: "Frontend",
    },
    {
      id: 3,
      title: "Edu-Meeting",
      image: "/Images/4.png",
      tech: ["HTML", "Tailwind", "BOOTSTRAP", "CSS"],
      github: "https://github.com/sheraziwaheed/education_meeting",
      live: "https://education-meeting.vercel.app/",
      category: "Frontend",
    },
    // {
    //   id: 4,
    //   title: "Todo LocalStorage",
    //   image: "/Images/6.png",
    //   tech: ["React", "Tailwind"],
    //   github: "https://github.com/UsamaRafaqat637/Todo-LocalStorage",
    //   live: "https://todo-local-storage-fm1q.vercel.app//",
    //   category: "Frontend",
    // },
    // {
    //   id: 5,
    //   title: "Ecommerce Web",
    //   image: "https://via.placeholder.com/400x250",
    //   tech: ["React", "Node", "Tailwind"],
    //   github: "https://github.com/",
    //   live: "https://vercel.com/",
    //   category: "Frontend",
    // },
    // {
    //   id: 6,
    //   title: "Portfolio v2",
    //   image: "https://via.placeholder.com/400x250",
    //   tech: ["React", "Tailwind"],
    //   github: "https://github.com/",
    //   live: "https://vercel.com/",
    //   category: "Frontend",
    // },
  ];

  const [filter, setFilter] = useState("All Projects");
  const [visible, setVisible] = useState(3);

  const filtered =
    filter === "All Projects"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  const showMore = () => setVisible(filtered.length);
  const showLess = () => setVisible(3);

  return (
    <div className="min-h-screen bg-[#0b1220] text-white font-sans flex flex-col items-center py-16" id="portfolio">
      {/* Heading */}
      <h1 className="mb-2 text-4xl font-bold">
        My <span className="text-yellow-400">Portfolio</span>
      </h1>
      <div className="w-24 h-[2px] bg-yellow-400 mb-6"></div>

      {/* Paragraph */}
      <p className="max-w-xl mb-10 text-center text-gray-300">
        Here are some of my recent projects. Each one was crafted with attention
        to detail and user experience.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        {["All Projects", "Frontend"].map((name) => (
          <button
            key={name}
            onClick={() => {
              setFilter(name);
              setVisible(3);
            }}
            className={`px-6 py-2 rounded-full font-medium transition ${
              filter === name
                ? "bg-yellow-400 text-black"
                : "bg-[#1a2332] hover:bg-yellow-400 hover:text-black"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.slice(0, visible).map((project) => (
          <div
            key={project.id}
            className="bg-[#111b2b] rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-400/40 transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-52"
            />
            <div className="p-5">
              <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-[#1f2b3f] text-yellow-300 text-sm px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1 font-medium text-yellow-400 hover:underline"
                >
                  View Project →
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className="px-3 py-1 text-sm text-white transition bg-blue-600 rounded-lg hover:bg-blue-500"
                >
                  🎥 Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons: View All / Show Less */}
      <div className="mt-10">
        {visible < filtered.length ? (
          <button
            onClick={showMore}
            className="px-6 py-3 font-semibold text-black transition bg-yellow-400 rounded-full hover:bg-yellow-300"
          >
            View All Projects
          </button>
        ) : (
          filtered.length > 3 && (
            <button
              onClick={showLess}
              className="bg-[#1a2332] border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              Show Less
            </button>
          )
        )}
      </div>
    </div>
  );
}
