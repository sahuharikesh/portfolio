export default function Contact() {
  return (
    // <section className="py-20 bg-gray-200 text-center">
    //   <h2 className="inline-block border-2 border-black px-6 py-2 font-semibold mb-6">
    //     CONTACT
    //   </h2>

    //   <form className="max-w-xl mx-auto flex flex-col gap-6 mt-8">
    //     <input className="border-b bg-transparent outline-none" placeholder="Enter Your Name" />
    //     <input className="border-b bg-transparent outline-none" placeholder="Enter Your Email" />
    //     <input className="border-b bg-transparent outline-none" placeholder="Phone Number" />
    //     <textarea className="border-b bg-transparent outline-none" placeholder="Your Message" />

    //     <button className="border px-6 py-2 hover:bg-black hover:text-white">
    //       SUBMIT
    //     </button>
    //   </form>
    // </section>

      <section id="contact" className="bg-gray-100 py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="inline-block border-2 border-black px-6 py-2 font-semibold mb-6">
                GET IN TOUCH
            </h2>
          <p className="text-slate-600 mb-6">Looking for a Software Engineer or Full-Stack Developer? Let’s connect.</p>
          <a
            href="mailto:sahuharikesh0@gmail.com"
            className="inline-block px-8 py-4 text-white rounded-xl bg-[#D4AF37] hover:bg-yellow-600 transition"
          >
            sahuharikesh0@gmail.com
          </a>
          <p className="mt-4 text-gray-800">Navi Mumbai, Maharashtra</p>
        </div>
      </section>
  )
}
