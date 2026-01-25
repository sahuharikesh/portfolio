import { useEffect, useState } from "react";

const sections = ["about", "skills", "education", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("#hero");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `hover:text-indigo-400 ${
      active === id ? "text-indigo-400 font-semibold" : "text-white"
    }`;

  return (
    <nav className="bg-black px-6 md:px-10 py-4 flex justify-between items-center fixed w-full z-50">
      
      {/* Logo */}
      <div className="text-xl italic font-bold flex border-2 px-1.5 rounded-full bg-white">
        H<p className="text-[#D4AF37]">S</p>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm items-center">
        <li><a href="#about" className={linkClass("about")}>About</a></li>
        <li><a href="#skills" className={linkClass("skills")}>Skills</a></li>
        <li><a href="#education" className={linkClass("education")}>Education</a></li>
        <li className="px-4 py-1 rounded bg-white text-black">
          <a href="#contact" className={active === "contact" ? "font-semibold" : ""}>
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden">
          {sections.map((id) => (
            <li key={id} onClick={() => setIsOpen(false)}>
              <a href={`#${id}`} className={linkClass(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
