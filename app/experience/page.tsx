const experiences = [
  {
    year: "2025 — Present",
    role: "Student Assistant",
    company: "PolyU School of Accounting & Finance",
    location: "Hong Kong",
    description:
      "Supporting the School of Accounting & Finance with student engagement, content creation, school outreach and events.",
    highlights: [
      "Create stories and posts for the PolyU AF Instagram",
      "Support student-sharing sessions and school tours",
      "Assist with Information Day and other school events",
      "Developed greater confidence through communication and event work",
    ],
  },
  {
    year: "Jun — Jul 2025",
    role: "Summer Intern — Corporate Finance",
    company: "Securities and Futures Commission",
    location: "Hong Kong",
    description:
      "Worked with the Corporate Disclosure (Monitoring) Team on a data analytics project analysing cases handled by the team.",
    highlights: [
      "Explored automated tools for analysing case data",
      "Prepared reports presenting findings from a large volume of data",
      "Assisted with research and review relating to listed companies",
      "Joined team meetings and gained insight into corporate disclosure monitoring",
    ],
  },
  {
    year: "Jul — Aug 2024",
    role: "Summer Intern — Audit & Accounting",
    company: "KY Luk & Co.",
    location: "Hong Kong",
    description:
      "Gained practical exposure to accounting and audit work in a professional accounting firm.",
    highlights: [
      "Prepared income statements and statements of financial position",
      "Prepared ageing summaries and accounting schedules",
      "Assisted with audit work and other accounting-related tasks",
      "Developed practical understanding of accounting processes",
    ],
  },
  {
    year: "Jun — Jul 2024",
    role: "Summer Intern — Securities",
    company: "Shenwan Hongyuan Securities",
    location: "Shanghai, China",
    description:
      "Experienced the securities industry in Shanghai while learning about ETFs, client practices and differences between the Hong Kong and mainland Chinese markets.",
    highlights: [
      "Worked on a project promoting ETFs to elderly investors",
      "Participated in community outreach and promotional activities",
      "Joined morning meetings and observed securities industry operations",
      "Adapted to a different workplace culture and working environment",
    ],
  },
];

export default function Experience() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">

        <div className="mb-14 sm:mb-20">

          <p className="uppercase tracking-[0.25em] text-blue-300 sm:tracking-[0.3em]">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Where I've worked
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8">
            Exploring finance, accounting, markets and different
            working environments through internships and university work.
          </p>

        </div>

        <div className="relative">

          {/* Timeline line */}

          <div className="absolute left-3 top-0 hidden h-full w-px bg-gray-700 md:block" />

          <div className="space-y-10 sm:space-y-16">

            {experiences.map((experience) => (

              <article
                key={`${experience.company}-${experience.year}`}
                className="relative md:pl-12"
              >

                {/* Timeline dot */}

                <div className="absolute left-0 top-2 hidden h-7 w-7 items-center justify-center rounded-full border border-gray-600 bg-[#0B0D10] md:flex">
                  <div className="h-2 w-2 rounded-full bg-blue-300" />
                </div>

                <div className="rounded-3xl border border-gray-700 bg-[#15191F] p-6 transition duration-300 hover:-translate-y-1 hover:border-gray-600 sm:p-8">

                  <div className="flex flex-col justify-between gap-3 md:flex-row">

                    <div>

                      <p className="text-sm font-medium uppercase tracking-widest text-blue-300">
                        {experience.year}
                      </p>

                      <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-base text-gray-200 sm:text-lg">
                        {experience.company}
                      </p>

                    </div>

                    <p className="text-sm text-gray-400">
                      {experience.location}
                    </p>

                  </div>

                  <p className="mt-5 max-w-3xl text-base leading-7 text-gray-300 sm:mt-6">
                    {experience.description}
                  </p>

                  <div className="mt-6 sm:mt-7">

                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
                      Highlights
                    </p>

                    <ul className="space-y-3 text-base leading-7 text-gray-200">

                      {experience.highlights.map((highlight) => (

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

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>
    </main>
  );
}