import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1320] text-white font-sans flex flex-col items-center justify-center py-16 px-6">
      {/* Heading */}
      <h1 className="mb-2 text-4xl font-bold text-center md:text-5xl">
        Experience <span className="text-yellow-400">& Education</span>
      </h1>
      {/* <div className="w-32 h-[3px] bg-yellow-400 mb-12"></div> */}
      <div className="w-full max-w-3xl mx-auto mt-16">
            <div className="h-1 bg-yellow-400 rounded-full" />
          </div>

      {/* Content Grid */}
      <div className="grid w-full max-w-6xl gap-12 mt-12 md:grid-cols-2">
        {/* Left Section - Professional Journey */}
        <div>
          <h2 className="flex items-center gap-2 mb-6 text-2xl font-semibold">
            <span className="text-3xl text-yellow-400">💼</span> Professional
            Journey
          </h2>

          {/* Card 1 */}
          <div className="bg-[#111a2c] p-6 rounded-2xl mb-8 shadow-lg border-l-4 border-yellow-400 hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 text-xl text-black bg-yellow-400 rounded-full">
                💼
              </div>
              <h3 className="text-lg font-bold">
                Frontend Developer 
              </h3>
            </div>
            <p className="mb-2 text-yellow-400"></p>
            <p className="text-sm leading-relaxed text-gray-300">
              Building modern, responsive, and scalable websites using React,
              Tailwind CSS, and Next.js for various clients.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111a2c] p-6 rounded-2xl shadow-lg border-l-4 border-yellow-400 hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 text-xl text-black bg-yellow-400 rounded-full">
                💼
              </div>
              <h3 className="text-lg font-bold">
                Internship - The Code Genesis DHA Lahore
              </h3>
            </div>
            <p className="mb-2 text-yellow-400">2024</p>
            <p className="text-sm leading-relaxed text-gray-300">
              Completed an internship, gaining experience in practical software
              development and corporate workflows.
            </p>
          </div>
        </div>

        {/* Right Section - Academic Background */}
        <div>
          <h2 className="flex items-center gap-2 mb-6 text-2xl font-semibold">
            <span className="text-3xl text-yellow-400">🎓</span> Academic
            Background
          </h2>

          {/* Card 1 */}
          <div className="bg-[#111a2c] p-6 rounded-2xl mb-8 shadow-lg border-l-4 border-yellow-400 hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 text-xl text-black bg-yellow-400 rounded-full">
                🎓
              </div>
              <h3 className="text-lg font-bold">
                BS Software Engineering - Superior University Lahore <br />
                2022-2026
              </h3>
            </div>
            <p className="mb-2 text-yellow-400"></p>
            <p className="text-sm leading-relaxed text-gray-300">
              Completed a Software Engineering degree with a strong foundation
              in frontend development, UI/UX design
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111a2c] p-6 rounded-2xl shadow-lg border-l-4 border-yellow-400 hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 text-xl text-black bg-yellow-400 rounded-full">
                🎓
              </div>
              <h3 className="text-lg font-bold">
                Pre-Medical - Unique Girls College Lahore
              </h3>
            </div>
            <p className="mb-2 text-yellow-400"></p>
            <p className="text-sm leading-relaxed text-gray-300">
              Focused on mathematics, physics,  during
              intermediate education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
