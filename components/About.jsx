export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      {/* Heading */}
      <div className="mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About Me
        </h2>

        <p className="text-zinc-400 text-lg max-w-2xl">
          Passionate about Artificial Intelligence, scalable systems,
          and building technology that creates real-world impact.
        </p>
      </div>

      {/* Main Card */}
      <div
        className="grid md:grid-cols-2 gap-10
                   bg-zinc-900 border border-white/10
                   rounded-3xl p-8 md:p-12
                   shadow-xl"
      >

        {/* Left Content */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 leading-tight">
            Building the Future with
            <span className="text-indigo-400"> AI & Intelligent Systems</span>
          </h3>

          <p className="text-zinc-400 leading-8 mb-6">
            I’m <span className="text-white font-medium">Pritam Kumar</span>,
            an aspiring AI Engineer focused on building intelligent systems
            powered by Machine Learning, LLMs, and autonomous AI agents.
          </p>

          <p className="text-zinc-400 leading-8 mb-6">
            Currently pursuing Electrical Engineering at
            <span className="text-white font-medium">
              {' '}NIT Hamirpur
            </span>,
            I actively explore the intersection of AI, Data Science,
            and Software Engineering through hands-on projects and research-driven learning.
          </p>

          <p className="text-zinc-400 leading-8">
            My interests include Generative AI, Agentic AI workflows,
            Deep Learning.
            I enjoy transforming complex ideas into practical applications
            that solve real-world problems.
          </p>
        </div>

        {/* Right Content */}
        <div className="grid gap-5">

          <div
            className="bg-zinc-800/60 border border-white/5
                       rounded-2xl p-6 hover:border-indigo-500
                       transition duration-300"
          >
            <div className="text-3xl mb-3">🤖</div>

            <h4 className="text-xl font-semibold mb-2">
              AI & Machine Learning
            </h4>

            <p className="text-zinc-400 leading-7">
              Building intelligent systems using Deep Learning,
              LLMs, RAG pipelines, and AI agents.
            </p>
          </div>
          <div
            className="bg-zinc-800/60 border border-white/5
                       rounded-2xl p-6 hover:border-indigo-500
                       transition duration-300"
          >
            <div className="text-3xl mb-3">🚀</div>

            <h4 className="text-xl font-semibold mb-2">
              Vision
            </h4>

            <p className="text-zinc-400 leading-7">
              My goal is to build future-ready AI products
              that combine intelligence, automation,
              scalability, and real-world impact.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}