import Link from "next/link";

type HeroProps = {
  name: string;
};

export default function Hero({ name }: HeroProps) {
  return (
    <section className="flex min-h-[75vh] items-center px-6 py-20 sm:min-h-[80vh] sm:py-24">
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-blue-300 sm:mb-6 sm:tracking-[0.3em]">
          Accounting & Finance · PolyU
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-8xl">
          {name}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:mt-8 sm:text-lg sm:leading-8">
          Interested in finance, business and technology, with experience
          across accounting, securities, corporate finance and student
          engagement.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <Link
            href="/experience"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200 sm:w-auto"
          >
            Experience

            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-700 px-6 py-3 font-medium text-gray-200 transition hover:border-gray-500 hover:bg-gray-900 sm:w-auto"
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