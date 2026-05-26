export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">

      <h2 className="text-5xl font-bold mb-6">
        Let&apos;s Connect
      </h2>

      <p className="text-zinc-400 text-lg mb-10">
        Open to internships, ML engineering roles, and AI-focused opportunities.
      </p>

      <div className="flex flex-wrap justify-center gap-4">

        {/* Email */}
        <a
          href="mailto:pritamkumar1951676@gmail.com"
          className="bg-indigo-500 px-6 py-3 rounded-xl hover:bg-indigo-600 hover:scale-105 transition"
        >
          Email Me
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/pritam1952"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/10 px-6 py-3 rounded-xl hover:border-indigo-500 hover:scale-105 transition"
        >
          GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/pritam-kumar075"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/10 px-6 py-3 rounded-xl hover:border-indigo-500 hover:scale-105 transition"
        >
          LinkedIn
        </a>

      </div>

      {/* Optional footer note */}
      <p className="text-zinc-600 text-sm mt-10">
        Usually respond within 24–48 hours
      </p>

    </section>
  )
}