import profile from "../assets/profile1.png"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Hero() {
  return (
    <section className="h-[90vh] flex items-center bg-gray-100 overflow-x-hidden" id="hero">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">

        {/* RIGHT (IMAGE FIRST ON MOBILE) */}
        <div className="relative flex justify-center overflow-hidden order-1 md:order-2">
          <div className="absolute bg-black w-full h-full skew-x-[-12deg] right-[-2rem] md:right-[-4rem]"></div>

          <img
            src={profile}
            alt="Harikesh"
            className="relative z-10 h-[280px] md:h-[460px]"
          />
        </div>

        {/* LEFT (TEXT SECOND ON MOBILE) */}
        <div className="flex flex-col items-center justify-center text-center py-6 px-6 md:px-10 order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3 md:mb-4">
            Hi, I’m <span className="text-[#D4AF37]">Harikesh Sahu</span>
          </h2>

          <p className="text-base md:text-lg font-bold text-gray-900 max-w-xl">
            MCA Graduate | Software Engineer | Full-Stack Developer
          </p>

          <p className="text-gray-600 text-sm mt-2 max-w-md">
            Building scalable web applications using React, Ruby on Rails, Node.js,
            REST APIs and modern databases.
          </p>

          <div className="mt-6 md:mt-8 flex gap-4 justify-center">
            <a
              href="Harikesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="px-5 py-1.5 text-white rounded-lg bg-[#D4AF37] hover:bg-yellow-600 transition"
            >
              Download Resume
            </a>

            <a
              href="#skills"
              className="px-5 py-1.5 border-2 border-black rounded-lg hover:border-gray-500 transition"
            >
              View Skills
            </a>
          </div>

          <div className="flex gap-5 mt-5 md:mt-6 text-2xl justify-center">
            <a href="https://github.com/sahuharikesh" alt="Github"><FaGithub /></a>  
            <a href="https://www.linkedin.com/in/harikesh-sahu-a94875155/" alt="Linkdin"><FaLinkedin /></a>
           <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sahuharikesh0@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send email via Gmail"
            >
              <FaEnvelope />
            </a>

          </div>
        </div>

      </div>
    </section>
  )
}
