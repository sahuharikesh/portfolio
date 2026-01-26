import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa"
import contactBg from "../assets/bgImage1.jpg"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="inline-block border-2 border-[#D4AF37]
                       text-[#D4AF37] px-8 py-2 font-semibold tracking-wider mb-6">
          GET IN TOUCH
        </h2>

        <p className="text-slate-300 max-w-xl mx-auto mb-8">
          Looking for a{" "}
          <span className="font-medium text-white">
            Software Engineer
          </span>{" "}
          or{" "}
          <span className="font-medium text-white">
            Full-Stack Developer
          </span>
          ? Let’s connect.
        </p>

        {/* Contact Card */}
        <div
          className="border border-white/20 rounded-md p-6 md:p-12
                     max-w-xl mx-auto space-y-6
                     bg-white/10 backdrop-blur-md shadow-xl"
        >
          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sahuharikesh0@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full px-6 py-3
                       rounded-xl bg-[#D4AF37] text-black font-medium text-base md:text-lg
                       hover:bg-yellow-500 transition"
          >
            <FaEnvelope />
            sahuharikesh0@gmail.com
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918422053051"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full px-6 py-3
                       rounded-xl border border-green-500 text-green-500
                       hover:bg-green-400 hover:text-black transition font-medium"
          >
            <FaWhatsapp />
            WhatsApp: 8422053051
          </a>

          {/* Call */}
          <a
            href="tel:8097809081"
            className="flex items-center justify-center gap-3 w-full px-6 py-3
                       rounded-xl border border-white text-white
                       hover:bg-white hover:text-black transition font-medium"
          >
            <FaPhoneAlt />
            Call: 8097809081
          </a>

          {/* Location */}
          <div className="pt-4 border-t border-white/20
                          flex items-center justify-center gap-2
                          text-white font-semibold text-sm">
            <FaMapMarkerAlt className="text-red-400" />
            <span>Airoli, Navi Mumbai-400708, Maharashtra</span>
          </div>
        </div>
      </div>
    </section>
  )
}
