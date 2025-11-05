import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "HTML", percent: 95, color: "#f97316" },
  { name: "JAVASCRIPT", percent: 89, color: "#facc15" },
  { name: "CSS", percent: 90, color: "#3b82f6" },
  { name: "REACT", percent: 85, color: "#06b6d4" },
  { name: "BOOTSTRAP", percent: 78, color: "#22c55e" },
  { name: "TAILWIND", percent: 92, color: "#0ea5e9" },
//   { name: "PYHTHON", percent: 30, color: "#ec4899" },
  // { name: "EXCEL", percent: 70, color: "#84cc16" },
  // { name: "SQL", percent: 60, color: "#9ca3af" },
];

// ✅ Counter animation for percentages
const AnimatedCounter = ({ target, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = target / (duration * 60); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="text-xl font-bold">
      {count}%
    </span>
  );
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="bg-[#0b1221] text-white py-24 px-8 sm:px-16 md:px-24 min-h-screen flex flex-col justify-center"
    >
      {/* Heading */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold">
          My <span className="text-[#facc15]">Skills</span>
        </h2>
        {/* <div className="w-48 h-[3px] bg-[#facc15] mx-auto mt-4"></div> */}
        <div className="w-full max-w-3xl mx-auto mt-16">
            <div className="h-1 bg-yellow-400 rounded-full" />
          </div>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { type: "spring", stiffness: 200, damping: 10 },
            }}
          >
            {/* Circular Skill Progress */}
            <div className="relative mb-5 w-36 h-36">
              <svg className="w-full h-full">
                <circle
                  cx="72"
                  cy="72"
                  r="60"
                  stroke="#1e293b"
                  strokeWidth="10"
                  fill="none"
                />
                <motion.circle
                  cx="72"
                  cy="72"
                  r="60"
                  stroke={skill.color}
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="377"
                  strokeDashoffset="377"
                  whileInView={{
                    strokeDashoffset: 377 - (skill.percent / 100) * 377,
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <AnimatedCounter target={skill.percent} />
                <p className="mt-1 text-sm text-gray-300">{skill.name}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 overflow-hidden bg-gray-700 rounded-full shadow-inner w-28">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: skill.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
