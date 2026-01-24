import React from "react"


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur border-b border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">Harikesh<span className="text-indigo-400">.dev</span></h1>
          <div className="space-x-6 text-sm hidden md:block">
            <a href="#about" className="hover:text-indigo-400">About</a>
            <a href="#skills" className="hover:text-indigo-400">Skills</a>
            <a href="#education" className="hover:text-indigo-400">Education</a>
            <a href="#contact" className="hover:text-indigo-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hi, I’m <span className="text-indigo-400">Harikesh Sahu</span>
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          MCA Graduate • React Developer • Frontend Engineer
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#contact" className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition">
            Contact Me
          </a>
          <a href="#skills" className="px-6 py-3 rounded-xl border border-slate-600 hover:border-indigo-400 transition">
            View Skills
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-slate-300 leading-relaxed">
          I am an MCA graduate with a strong foundation in Information Technology and
          hands-on experience in modern frontend development. I love building clean,
          scalable, and user-friendly web applications using React, Vite, and Tailwind CSS.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-slate-800/50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Vite", "Git", "Node.js"].map(skill => (
              <div key={skill} className="rounded-xl bg-slate-900 p-6 text-center shadow hover:scale-105 transition">
                <p className="font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold mb-8">Education</h3>
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-slate-800">
            <h4 className="font-semibold">Master of Computer Applications (MCA)</h4>
            <p className="text-slate-400">NCRD's Sterling Institute, Mumbai (2020–2022)</p>
          </div>
          <div className="p-6 rounded-xl bg-slate-800">
            <h4 className="font-semibold">BSc – Information Technology</h4>
            <p className="text-slate-400">J.K. College of Science & Commerce (2016–2019)</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-800/50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
          <p className="text-slate-300 mb-6">Looking for a React developer? Let’s connect.</p>
          <a
            href="mailto:sahuharikesh0@gmail.com"
            className="inline-block px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition"
          >
            sahuharikesh0@gmail.com
          </a>
          <p className="mt-4 text-slate-400">Navi Mumbai, Maharashtra</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Harikesh Sahu. All rights reserved.
      </footer>
    </div>
  )
}

export default App
