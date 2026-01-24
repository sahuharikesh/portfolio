import profile from "../assets/profile1.png"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gray-100 overflow-x-none">
      <div className="grid md:grid-cols-2 w-full px-10">
        
        {/* LEFT */}
        <div className="flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hi, I’m <span className="text-[#D4AF37]">Harikesh Sahu</span>
        </h2>
        <p className="text-lg text-purple-900 max-w-2xl">
          MCA Graduate | Software Engineer | Full-Stack Developer
        </p>
            <p className="text-gray-600 text-sm mt-2 max-w-md">
            Building scalable web applications using React, Node.js, Rails,
            REST APIs, and modern databases.
            </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#contact" className="px-5 text-white py-2 rounded-xl bg-[#D4AF37] hover:bg-yellow-600 transition">
            Contact Me
          </a>
          <a href="#skills" className="px-5 py-2 border-black rounded-xl border-2  hover:border-gray-500 transition">
            View Skills
          </a>
        </div>

          <div className="flex gap-5 mt-6 text-2xl">
            <FaGithub />
            <FaLinkedin />
            <FaEnvelope />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          <div className="absolute bg-black w-full h-full skew-x-[-12deg] right-[-80px]"></div>
          <img
            src={profile}
            alt="Harikesh"
            className="relative z-10 h-[460px]"
          />
        </div>
      </div>
    </section>
  )
}
