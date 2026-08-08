const education = [
  {
    period: "2023 — Present",
    institution: "The Hong Kong Polytechnic University",
    programme: "BBA (Hons) in Accounting and Finance",
    location: "Hong Kong",
    description:
      "Currently pursuing a degree in Accounting and Finance, with interests spanning financial markets, business and technology.",
    highlights: [
      "Current CGPA: 3.6",
      "Dean's List 2023/24",
      "Dean's List 2024/25",
    ],
  },
  {
    period: "Spring 2026",
    institution: "Warwick Business School",
    programme: "Undergraduate Spring Exchange",
    location: "United Kingdom",
    description:
      "Spent a semester studying at Warwick Business School as part of an international exchange experience.",
    highlights: [
      "Studied business subjects in an international academic environment",
      "Worked alongside students from different academic and cultural backgrounds",
      "Adapted to a different university and learning environment",
    ],
  },
  {
    period: "Summer 2025",
    institution: "University of Cambridge",
    programme: "Pembroke Cambridge Summer Programme",
    location: "United Kingdom",
    description:
      "Participated in the Pembroke Cambridge Summer Programme, combining academic learning with an international university experience.",
    highlights: [
      "Studied in an international academic environment",
      "Experienced university life at Cambridge",
    ],
  },
];

export default function Education() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-white">

      <section className="mx-auto max-w-5xl px-6 py-24">

        {/* Page Heading */}

        <div className="mb-20">

          <p className="uppercase tracking-[0.3em] text-blue-300">
            Education
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            Academic Journey
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Studying accounting and finance while gaining academic
            experience in both Hong Kong and the United Kingdom.
          </p>

        </div>

        {/* Education Cards */}

        <div className="space-y-8">

          {education.map((item) => (

            <article
              key={`${item.institution}-${item.period}`}
              className="rounded-3xl border border-gray-700 bg-[#15191F] p-8 transition duration-300 hover:-translate-y-1 hover:border-gray-600"
            >

              <div className="flex flex-col justify-between gap-4 md:flex-row">

                <div>

                  <p className="text-sm font-medium uppercase tracking-widest text-blue-300">
                    {item.period}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {item.institution}
                  </h3>

                  <p className="mt-2 text-lg text-gray-200">
                    {item.programme}
                  </p>

                </div>

                <p className="text-sm text-gray-400">
                  {item.location}
                </p>

              </div>

              <p className="mt-6 max-w-3xl leading-7 text-gray-300">
                {item.description}
              </p>

              <div className="mt-7">

                <ul className="space-y-3 text-gray-200">

                  {item.highlights.map((highlight) => (

                    <li
                      key={highlight}
                      className="flex gap-3"
                    >

                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />

                      <span>
                        {highlight}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}