// src/App.jsx
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1720] to-[#0f1a23] text-white font-sans" id="Personal">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">
            <span className="text-white">Personal </span>
            <span className="text-yellow-400">Info</span>
          </h1>
          <div className="w-full max-w-3xl mx-auto mt-16">
            <div className="h-1 bg-yellow-400 rounded-full" />
          </div>
        </header>

        <div className="relative">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left column - Info cards */}
            <div className="lg:col-span-7">
              <div className="flex flex-col gap-6">
                {/* Title */}
                <div className="flex items-center gap-2 text-2xl font-bold text-white">
                  <span>Personal</span><span className="text-yellow-400">Info</span>
                </div>

                {/* Info grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <InfoCard label="First Name" value="Sherazi" icon="👤" />
                  <InfoCard label="Last Name" value="Waheed" icon="👔" />
                  {/* <InfoCard label="Age" value="23 Years" icon="🎂" /> */}
                  <InfoCard label="Nationality" value="Pakistani" icon="🌍" />
                  <InfoCard label="Address" value="Lahore, PUNJAB, Pakistan" icon="📍" />
                  {/* <InfoCard label="Phone" value="+92 3094876831" icon="📱" /> */}
                  <InfoCard label="Email" value="sheraziwaheed4@gmail.com" icon="✉️" fullWidth />
                  <InfoCard label="Languages" value="Urdu, English" icon="🗣️" />
                </div>

                {/* CV CTA */}
                <div className="mt-6 text-center">
                  <a
        href="/Images/Sherazi waheed -Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full inline-flex flex-col items-center gap-2 px-6 py-4 border-2 border-yellow-400 rounded-lg bg-transparent hover:bg-yellow-400/10 transition-all transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,196,0,0.3)] focus:outline-none"
  >
                    <div className="p-3 font-bold text-black bg-yellow-400 rounded">📄</div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-400 ">Download My CV</div>
                      <div className="text-sm text-gray-300">Click to open PDF</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right column - stats + philosophy */}
            <div className="flex flex-col gap-6 mt-12 lg:col-span-5">
              {/* top stats grid */}
              <div className="grid grid-cols-2 gap-6">
                <StatCard title="Years Experience" value="1+" emoji="⏳" />
                <StatCard title="Projects" value="3+" emoji="🚀" />
                <StatCard title="Happy Clients" value="5" emoji="😊" />
                {/* <StatCard title="Awards" value="5+" emoji="🏆" /> */}
              </div>

              {/* Philosophy box */}
              <div className="rounded-xl border border-gray-700 p-6 bg-[#0b1216]/60 hover:shadow-[0_0_30px_rgba(255,196,0,0.2)] hover:scale-[1.02] transition-all transform hover:-translate-y-1">
                <h3 className="mb-3 text-xl italic font-semibold text-yellow-400">My Philosophy</h3>
                <p className="leading-relaxed text-gray-300">
                  I believe in creating digital experiences that are not just visually stunning, but also intuitive and accessible. Every pixel and line of code serves a purpose in crafting solutions that users love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- small components ---------- */

function InfoCard({ label, value, icon, fullWidth = false }) {
  return (
    <div className={fullWidth ? "sm:col-span-2" : ""}>
      <div className="p-5 rounded-xl bg-[#11161A]/60 border border-gray-700 flex items-center gap-4 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,196,0,0.25)]">
        <div className="text-2xl">{icon}</div>
        <div>
          <div className="font-semibold text-yellow-400">{label}:</div>
          <div className="text-gray-200">{value}</div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, emoji }) {
  return (
    <div className="rounded-xl p-5 bg-[#0f1720]/40 border border-gray-700 flex items-center gap-4 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.04] hover:shadow-[0_0_25px_rgba(255,196,0,0.3)]">
      <div className="p-3 rounded-lg bg-[#0b1216] border border-gray-800 text-3xl">{emoji}</div>
      <div>
        <div className="text-2xl font-bold text-yellow-400">{value}</div>
        <div className="text-xs tracking-wide text-gray-400 uppercase">{title}</div>
      </div>
    </div>
  );
}
