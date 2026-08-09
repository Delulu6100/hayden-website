export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-white">

      <section className="mx-auto flex min-h-[75vh] max-w-5xl items-center px-6">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-blue-300">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            Let's connect
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Whether you'd like to get in touch about my work, experiences,
            projects, or simply say hello, feel free to reach out.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="mailto:haydenyau.contact@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
            >
              Email me
              <span>→</span>
            </a>

            <a
              href="https://www.linkedin.com/in/hayden-yau/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-6 py-3 font-medium text-gray-200 transition hover:border-gray-500 hover:bg-gray-900"
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