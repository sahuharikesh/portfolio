import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa"
import { SiRubyonrails, SiTailwindcss } from "react-icons/si"
import bgImage from "../assets/bgImage.jpg"

export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-600" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-600" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-500" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-500" />,
      url: "https://react.dev",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-500" />,
      url: "https://tailwindcss.com",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-600" />,
      url: "https://getbootstrap.com",
    },
    {
      name: "Ruby on Rails",
      icon: <SiRubyonrails className="text-red-600" />,
      url: "https://rubyonrails.org",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-600" />,
      url: "https://nodejs.org",
    },
    {
      name: "Git",
      icon: <FaGit className="text-orange-500" />,
      url: "https://git-scm.com",
    },
    {
      name: "Figma",
      icon: <FaFigma className="text-pink-600" />,
      url: "https://www.figma.com",
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 text-center px-5 bg-cover bg-center relative bg-fixed
"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] px-6 py-2 font-semibold mb-10">
          SKILLS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur p-6 shadow rounded
                         flex flex-col items-center gap-3
                         hover:scale-105 hover:shadow-lg transition"
            >
              <div className="text-4xl">
                {skill.icon}
              </div>
              <p className="font-medium text-sm">
                {skill.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
