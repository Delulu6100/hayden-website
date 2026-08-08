const projects = [
  {
    status: "Current",
    category: "Unreal Engine",
    title: "My First Unreal Engine Game",
    description:
      "My first project built with Unreal Engine, experimenting with gameplay mechanics, level design and interactive systems.",
    tags: ["Unreal Engine", "Game Development"],
  },
  {
    status: "Current",
    category: "Web Development",
    title: "Personal Website",
    description:
      "A personal website built from scratch to document my academic journey, professional experience and projects.",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    status: "Earlier Project",
    category: "Roblox",
    title: "Popcat Cartride",
    description:
      "An earlier Roblox game project that introduced me to game development and sparked my interest in building interactive experiences.",
    tags: ["Roblox", "Lua", "Game Development"],
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-white">

      <section className="mx-auto max-w-6xl px-6 py-24">

        <div className="mb-20 max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-blue-300">
            Projects
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            Things I've built
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            A collection of projects from experimenting with game
            development to building things on the web.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (

            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-gray-700 bg-[#15191F] transition duration-300 hover:-translate-y-1 hover:border-gray-600"
            >

              {/* Project image placeholder */}

              <div className="flex h-64 items-center justify-center bg-[#0F1216]">

                <span className="text-sm uppercase tracking-widest text-gray-500">
                  Screenshot Coming Soon
                </span>

              </div>

              <div className="p-8">

                <div className="flex items-center justify-between gap-4">

                  <p className="text-sm font-medium uppercase tracking-widest text-blue-300">
                    {project.category}
                  </p>

                  <span className="text-xs text-gray-500">
                    {project.status}
                  </span>

                </div>

                <h3 className="mt-4 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tags.map((tag) => (

                    <span
                      key={tag}
                      className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-400"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

                <a
                  href="#"
                  className="group mt-8 inline-flex items-center gap-2 font-medium text-gray-300 transition-colors hover:text-white"
                >
                  View Project

                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}