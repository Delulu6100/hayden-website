const interests = [
  {
    title: "Game Development",
    description:
      "I started experimenting with game development through Roblox and later moved into Unreal Engine, where I am learning how to build games and interactive experiences from scratch.",
  },
  {
    title: "Music",
    description:
      "Music has been a long-term part of my life. I play piano, clarinet and zhongruan, and enjoy the challenge of learning and improving across different instruments.",
  },
  {
    title: "Sports",
    description:
      "Outside university, I enjoy playing golf and pool — two very different ways of spending time away from a screen.",
  },
  {
    title: "Technology",
    description:
      "I enjoy experimenting with technology and learning how things work, from building websites to exploring game engines and new tools.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-white">

      <section className="mx-auto max-w-5xl px-6 py-24">

        {/* Introduction */}

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-blue-300">
            About
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            A little more about me
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            I'm Hayden, a BBA Accounting and Finance student at
            The Hong Kong Polytechnic University.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            My academic and professional interests are mainly centred
            around finance and business. Through internships in
            accounting, securities and corporate finance, I have had
            the opportunity to see different sides of the industry
            and understand how what I learn in university applies
            in practice.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Outside of my studies, I enjoy exploring things that are
            completely different from finance. I've experimented with
            game development, built projects with Roblox and Unreal
            Engine, and recently started learning web development.
          </p>

        </div>

        {/* Interests */}

        <div className="mt-24">

          <h3 className="text-3xl font-bold">
            Beyond the CV
          </h3>

          <p className="mt-4 text-gray-400">
            A few things I enjoy outside of academics and work.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {interests.map((interest) => (

              <article
                key={interest.title}
                className="rounded-3xl border border-gray-700 bg-[#15191F] p-8 transition duration-300 hover:-translate-y-1 hover:border-gray-600"
              >

                <h4 className="text-xl font-bold">
                  {interest.title}
                </h4>

                <p className="mt-4 leading-7 text-gray-300">
                  {interest.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}