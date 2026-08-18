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
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">

        {/* Page Heading */}

        <div className="mb-14 sm:mb-20">

          <p className="uppercase tracking-[0.25em] text-blue-300 sm:tracking-[0.3em]">
            Education
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Academic Journey
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8">
            Studying accounting and finance while gaining academic
            experience in both Hong Kong and the United Kingdom.
          </p>

        </div>

        {/* Education Cards */}

        <div className="space-y-6 sm:space-y-8">

          {education.map((item) => (

            <article
              key={`${item.institution}-${item.period}`}
              className="rounded-3xl border border-gray-700 bg-[#15191F] p-6 transition duration-300 hover:-translate-y-1 hover:border-gray-600 sm:p-8"
            >

              <div className="flex flex-col justify-between gap-3 md:flex-row">

                <div>

                  <p className="text-sm font-medium uppercase tracking-widest text-blue-300">
                    {item.period}
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                    {item.institution}
                  </h3>

                  <p className="mt-2 text-base text-gray-200 sm:text-lg">
                    {item.programme}
                  </p>

                </div>

                <p className="text-sm text-gray-400">
                  {item.location}
                </p>

              </div>

              <p className="mt-5 max-w-3xl text-base leading-7 text-gray-300 sm:mt-6">
                {item.description}
              </p>

              <div className="mt-6 sm:mt-7">

                <ul className="space-y-3 text-base leading-7 text-gray-200">

                  {item.highlights.map((highlight) => (

                    <li
                      key={highlight}
                      className="flex gap-3"
                    >

                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />

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