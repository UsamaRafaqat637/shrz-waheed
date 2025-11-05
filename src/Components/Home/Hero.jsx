// HeroSection.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function HeroSection() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: 0 },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" }, resize: true },
      modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
    },
    particles: {
      number: { value: 80 },
      color: { value: "#facc15" },
      links: { enable: true, color: "#facc15", opacity: 0.2, width: 1 },
      move: { enable: true, speed: 0.9 },
      opacity: { value: 0.15 },
      size: { value: { min: 1, max: 3 } },
    },
  };

  const navItems = [
    { id: "home", label: "Home", Icon: HomeIcon },
    { id: "Personal", label: "About", Icon: UserIcon },
    { id: "skills", label: "Skills", Icon: CodeIcon },
    { id: "portfolio", label: "Portfolio", Icon: SettingsIcon },
    { id: "Contact", label: "Contact", Icon: MailIcon },
    
  ];
  <style>
  {`
    html {
      scroll-behavior: smooth;
    }
  `}
</style>

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0d11] text-white"
    >
      {/* Background image with subtle zoom animation */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop')] bg-cover bg-center animate-[slowzoom_20s_ease-in-out_infinite_alternate]"
        style={{ filter: "brightness(0.35)" }}
      ></div>

      {/* Particle layer */}
      <Particles init={particlesInit} options={particlesOptions} />

      {/* Main Content */}
      <div className="relative z-10 grid items-center max-w-6xl grid-cols-1 gap-10 px-6 mx-auto lg:px-12 md:grid-cols-2">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative group">
            <div className="p-[2px] bg-gradient-to-br from-[#facc15] to-yellow-400 rounded-2xl">
              <div className="p-1 bg-white rounded-xl">
                <img
                  src="/Images/1.png"
                  alt="profile"
                  className="object-cover w-64 transition-transform duration-500 ease-out rounded-lg shadow-2xl h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Hi, I&apos;m <span className="text-[#facc15]">Sherazi Waheed</span>
          </h2>
          <h3 className="text-xl font-semibold sm:text-2xl text-[#facc15]">
            Front-End Developer
          </h3>

          <p className="max-w-xl mx-auto text-sm font-medium leading-relaxed text-gray-300 md:mx-0 sm:text-base">
            I specialize in creating responsive, interactive, and visually appealing web interfaces using
            React and Tailwind CSS. My focus is on clean code, performance, and seamless user experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 md:justify-start">
            <a
              href="#Personal"
              className="px-6 py-3 font-semibold rounded-lg bg-[#facc15] text-black transition-all duration-300 hover:brightness-125 hover:scale-105 hover:shadow-[0_0_15px_#facc15]"
            >
              More About Me
            </a>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind"].map((skill) => (
                <button
                  key={skill}
                  className="px-4 py-1.5 text-sm rounded-full border border-[#facc15]/40 text-[#facc15] hover:bg-[#facc15]/20 transition-all duration-300 hover:brightness-125"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      Sidebar - Right side for desktop
     {/* Sidebar - Right side for desktop */}




      {/* Mobile Bottom Navigation */}
     
    </section>
  );
}

/* ---------------- SVG ICONS ---------------- */
function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 10.5L12 4l9 6.5M5 21V11.5h14V21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 18l6-6-6-6M8 6L2 12l6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 8l9 6 9-6M3 5h18v14H3z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}
function SettingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M19.4 15a1.8 1.8 0 0 0 .34 1.95l.04.04a2 2 0 0 1-2.83 2.83"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
