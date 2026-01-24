export default function Navbar() {
  return (
    <nav className="bg-black px-10 py-4 flex justify-between items-center fixed w-full z-50">
      <div className="text-xl italic font-bold flex border-2 px-1.5 rounded-full  bg-white">
       H<p className="text-[#D4AF37]">S</p>
      </div>
     
      <ul className="flex gap-8 text-sm text-white">
        <li><a href="#about" className="hover:text-indigo-400">About</a></li>
        <li><a href="#skills" className="hover:text-indigo-400">Skills</a></li>
        <li> <a href="#education" className="hover:text-indigo-400">Education</a></li>
        <li className="bg-white text-black px-4 py-1 rounded"> <a href="#contact" className="hover:text-indigo-400">Contact</a></li>
      </ul>
    </nav>
  )
}
