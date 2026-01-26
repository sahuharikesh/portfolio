export default function About() {
  return (
    <section className="py-20 text-center bg-white px-5" id="about">
      <h2 className="inline-block border-2 border-black px-6 py-2 font-semibold mb-6">
        ABOUT ME 
      </h2>

      <p className="max-w-4xl mx-auto text-gray-600 leading-relaxed italic">
        I am <strong>Harikesh Sahu</strong>, an MCA graduate and
        <strong> Software Engineer / Full-Stack Developer </strong>
        with hands-on experience in designing and developing
        scalable web applications.
        <br /><br />
        I specialize in building responsive user interfaces using
        <strong> React, Tailwind CSS, and JavaScript</strong>,
        while developing robust backend systems using
        <strong> Ruby on Rails, Node.js, RESTful APIs</strong>,
        and database technologies like
        <strong> PostgreSQL and MySQL</strong>.
        <br /><br />
        I enjoy solving real-world problems, writing clean and
        maintainable code, and continuously learning modern
        technologies to deliver high-quality software solutions.
      </p>

      <button className="mt-8 border bg-black border-black text-white px-6 py-2 hover:bg-white hover:text-black transition">
        READ MORE...
      </button>
      
    </section>
  )
}
