export default function Education() {
  const education = [
    {
      id: 1,
      course: "Master of Computer Applications (MCA)",
      clg: "NCRD's Sterling Institute, Mumbai (2020–2022)",
      score :"8.84 CGPI"
    },
    {
      id: 2,
      course: "Bachelor of Science (Info. Technology)",
      clg: "J.K. College of Science & Commerce (2016–2019)",
      score :"9.15 CGPI"
    },
    {
      id: 3,
      course: "HSC (12th)",
      clg: "N.K.T.T. College of Commerce, Thane (2014–2016)",
      score :"68.31 %"
    },
    {
      id: 4,
      course: "SSC (10th)",
      clg: "Shree Vivekananda Hindi High School (2013–2014)",
      score :"89 %"
    },
  ]

  return (
    <section id="education" className="py-20  text-center px-5">
      <h2 className="inline-block border-2 border-black px-6 py-2 font-semibold mb-10">
        EDUCATIONS
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {education.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-1 border-[#D4AF37] p-6 text-[#D4AF37] shadow-md rounded text-left hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-2">
              {item.course}
            </h3>
            <p className="text-sm text-gray-600">
              {item.clg}
            </p>
             <p className="text-sm text-yellow-600">
              {item.score}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
