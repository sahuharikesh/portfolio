export default function Skills() {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "React",
    "Tailwind CSS", "Bootstrap", "Git", "Figma"
  ]

  return (
    <section id="skills" className="py-20 bg-gray-100 text-center px-5">
      <h2 className="inline-block border-2 border-black px-6 py-2 font-semibold mb-10">
        SKILLS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {skills.map(skill => (
          <div key={skill} className="bg-white p-6 shadow rounded hover:scale-105">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
