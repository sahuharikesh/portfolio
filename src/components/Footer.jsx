import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6">
      <p className="mb-3">Back to top</p>
      <div className="flex justify-center gap-6 mb-3">
        <FaGithub />
        <FaLinkedin />
      </div>
      <p className="text-sm">© 2026 Harikesh Sahu</p>
    </footer>
  )
}
