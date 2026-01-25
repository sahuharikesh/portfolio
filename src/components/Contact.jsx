import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="inline-block border-2 border-black px-8 py-2 font-semibold tracking-wider mb-6">
          GET IN TOUCH
        </h2>

        <p className="text-slate-600 max-w-xl mx-auto mb-5">
          Looking for a <span className="font-medium text-black">Software Engineer</span> or
          <span className="font-medium text-black"> Full-Stack Developer</span>?  
          Let’s connect.
        </p>

        {/* Transparent Contact Box */}
        <div
          className="border border-gray-300 rounded-md p-5 md:p-10 max-w-xl mx-auto 
                     bg-white/40 backdrop-blur-sm space-y-6"
        >

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sahuharikesh0@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full px-8 py-3 
                       rounded-xl bg-[#D4AF37] text-white font-medium text-lg 
                       hover:bg-yellow-600 transition"
          >
            <FaEnvelope /> sahuharikesh0@gmail.com
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918422053051"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full px-8 py-3 
                       rounded-xl border border-green-500 text-green-600 
                       hover:bg-green-50 transition font-medium text-lg"
          >
            <FaWhatsapp /> WhatsApp: 8422053051
          </a>

          {/* Call */}
          <a
            href="tel:8097809081"
            className="flex items-center justify-center gap-3 w-full px-8 py-3
                       rounded-xl border border-blue-500 text-blue-600 
                       hover:bg-blue-50 transition font-medium text-lg"
          >
            <FaPhoneAlt /> Call: 8097809081
          </a>

          {/* Location */}
          <div className="pt-4 border-t border-gray-300 flex items-center justify-center gap-2 text-gray-700 text-sm">
            <FaMapMarkerAlt className="text-red-500" />
            <span>Navi Mumbai, Maharashtra</span>
          </div>

        </div>
      </div>
    </section>
  );
}
