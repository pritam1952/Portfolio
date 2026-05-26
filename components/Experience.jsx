export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      {/* Heading */}
      <div className="mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Education
        </h2>

        <p className="text-zinc-400 text-lg max-w-2xl">
          My academic journey focused on Electrical Engineering,
          software development, machine learning, and scalable AI systems.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-indigo-500/40 pl-10 space-y-14">

        {/* Timeline Item */}
        <div className="relative group">

          {/* Date */}
          <div
            className="inline-block mb-4 px-4 py-1 rounded-full
                       bg-indigo-500/10 border border-indigo-500/20
                       text-indigo-300 text-sm font-medium"
          >
            2023 — 2027
          </div>

          {/* Card */}
          <div
            className="bg-zinc-900 border border-white/10
                       rounded-2xl p-8
                       hover:border-indigo-500
                       hover:-translate-y-1
                       transition duration-300 shadow-lg"
          >

            {/* Top Section */}
            <div
              className="flex flex-col md:flex-row
                         md:items-center md:justify-between
                         gap-4 mb-5"
            >

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                  B.Tech in Electrical Engineering
                </h3>

                <p className="text-zinc-400">
                  National Institute of Technology Hamirpur
                </p>
              </div>

              {/* CGPA Badge */}
              <div
                className="px-4 py-2 rounded-xl
                           bg-green-500/10 border border-green-500/20
                           text-green-300 font-semibold w-fit"
              >
                CGPA: 8.33
              </div>

            </div>

            {/* Description */}
            <p className="text-zinc-400 leading-7 mb-6">
              Pursuing core Electrical Engineering while actively building
              expertise in Machine Learning,
              Data Science, and AI systems.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">

              {/* Interests */}
              <div
                className="bg-zinc-800/50 rounded-xl p-4
                           border border-white/5"
              >
                <h4 className="text-indigo-300 font-semibold mb-2">
                  Areas of Interest
                </h4>

                <p className="text-zinc-400 text-sm leading-6">
                  Machine Learning, Deep Learning,
                  Generative AI, and Intelligent Systems
                </p>
              </div>

              {/* Current Focus */}
              <div
                className="bg-zinc-800/50 rounded-xl p-4
                           border border-white/5"
              >
                <h4 className="text-indigo-300 font-semibold mb-2">
                  Current Focus
                </h4>

                <p className="text-zinc-400 text-sm leading-6">
                  Building AI-powered applications using LLMs,
                  LangChain, FastAPI, and scalable ML workflows.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}