import Link from "next/link";

type HeroProps = {
  name: string;
};

export default function Hero({ name }: HeroProps) {
  return (
    <section className="mx-auto flex min-h-[75vh] max-w-6xl items-center px-6 py-24">

      <div className="max-w-3xl">

        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
          Accounting & Finance · PolyU
        </p>

        <h1 className="text-6xl font-semibold tracking-tight text-white md:text-8xl">
          {name}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          Interested in finance, business and technology, with experience
          across accounting, securities, corporate finance and student
          engagement.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            href="/experience"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            Experience

            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 font-medium text-gray-200 transition hover:border-gray-500 hover:bg-gray-900"
          >
            Projects

            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>

      </div>

    </section>
  );
}