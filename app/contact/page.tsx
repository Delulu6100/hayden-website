export default function Contact() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto flex min-h-[70vh] max-w-5xl items-center px-6 py-20 sm:min-h-[75vh] sm:py-24">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.25em] text-blue-300 sm:tracking-[0.3em]">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let's connect
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg sm:leading-8">
            Whether you'd like to get in touch about my work, experiences,
            projects, or simply say hello, feel free to reach out.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">

            <a
              href="mailto:haydenyau.contact@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200 sm:w-auto"
            >
              Email me
              <span>→</span>
            </a>

            <a
              href="https://www.linkedin.com/in/hayden-yau/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-700 px-6 py-3 font-medium text-gray-200 transition hover:border-gray-500 hover:bg-gray-900 sm:w-auto"
            >
              LinkedIn
              <span>→</span>
            </a>

          </div>

        </div>

      </section>
    </main>
  );
}