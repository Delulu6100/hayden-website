const achievements = [
  {
    year: "2025 — 2026",
    title: "Innovation and Technology Scholarship",
    description:
      "Scholarship recognising academic achievement and supporting students with an interest in innovation and technology.",
  },
  {
    year: "2025 — 2026",
    title: "GEO Scholarship for Student Exchange",
    description:
      "Scholarship supporting my participation in an overseas exchange programme at Warwick Business School.",
  },
  {
    year: "2024 — 2025",
    title: "Bank of China (Hong Kong) Scholarship",
    description:
      "Scholarship received in recognition of academic performance and achievement.",
  },
  {
    year: "2024 — 2025",
    title: "Low Siew Huay Outstanding Academic Performance Award",
    description:
      "Award recognising outstanding academic performance during my studies at PolyU.",
  },
];

export default function Achievements() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">

        {/* Page Heading */}

        <div className="mb-14 max-w-3xl sm:mb-20">

          <p className="uppercase tracking-[0.25em] text-blue-300 sm:tracking-[0.3em]">
            Achievements
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Recognition along the way
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8">
            A collection of scholarships and awards received during my
            university journey.
          </p>

        </div>

        {/* Achievement Cards */}

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">

          {achievements.map((achievement) => (

            <article
              key={achievement.title}
              className="group rounded-3xl border border-gray-700 bg-[#15191F] p-6 transition duration-300 hover:-translate-y-1 hover:border-gray-600 sm:p-8"
            >

              <div className="flex items-start justify-between gap-4 sm:gap-6">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-600 text-base text-gray-300 sm:h-11 sm:w-11 sm:text-lg">
                  ★
                </div>

                <p className="text-right text-sm text-gray-400">
                  {achievement.year}
                </p>

              </div>

              <h3 className="mt-6 text-xl font-bold leading-snug text-white sm:mt-8 sm:text-2xl">
                {achievement.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-gray-300">
                {achievement.description}
              </p>

            </article>

          ))}

        </div>

      </section>
    </main>
  );
}