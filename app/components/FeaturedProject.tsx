import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">

      <div className="mb-8">

        <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
          Featured
        </p>

        <h2 className="mt-3 text-3xl font-semibold">
          Current Project
        </h2>

      </div>

      <div className="overflow-hidden rounded-3xl border border-gray-800 bg-[#15191F]">

        <div className="grid md:grid-cols-2">

          {/* Project Image */}

          <div className="flex min-h-[320px] items-center justify-center bg-[#101318]">

            <span className="text-sm uppercase tracking-widest text-gray-600">
              Screenshot Coming Soon
            </span>

          </div>

          {/* Project Information */}

          <div className="flex flex-col justify-center p-8 md:p-10">

            <p className="text-sm font-medium uppercase tracking-widest text-blue-300">
              Unreal Engine · Current
            </p>

            <h3 className="mt-4 text-3xl font-semibold">
              Unreal Engine Game
            </h3>

            <p className="mt-5 leading-7 text-gray-300">
              My first game project using Unreal Engine, where I am
              experimenting with gameplay mechanics, level design and
              interactive systems while learning the engine.
            </p>

            <Link
              href="/projects"
              className="group mt-8 inline-flex w-fit items-center gap-2 font-medium text-gray-300 transition-colors hover:text-white"
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