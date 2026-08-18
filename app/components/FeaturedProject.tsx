import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20 md:py-24">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
          Featured
        </p>

        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
          Current Project
        </h2>
      </div>

      <div className="overflow-hidden rounded-3xl border border-gray-800 bg-[#15191F]">
        <div className="grid md:grid-cols-2">

          {/* Project Image */}

          <div className="flex min-h-[220px] items-center justify-center bg-[#101318] sm:min-h-[280px] md:min-h-[320px]">
            <span className="px-6 text-center text-sm uppercase tracking-widest text-gray-600">
              Screenshot Coming Soon
            </span>
          </div>

          {/* Project Information */}

          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
            <p className="text-sm font-medium uppercase tracking-widest text-blue-300">
              Unreal Engine · Current
            </p>

            <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
              Unreal Engine Game
            </h3>

            <p className="mt-5 text-base leading-7 text-gray-300">
              My first game project using Unreal Engine, where I am
              experimenting with gameplay mechanics, level design and
              interactive systems while learning the engine.
            </p>

            <Link
              href="/projects"
              className="group mt-7 inline-flex w-fit items-center gap-2 rounded-lg py-2 font-medium text-gray-300 transition-colors hover:text-white sm:mt-8"
            >
              View project

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}