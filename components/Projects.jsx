const projects = [
  {
    title: 'AI Shopping Agent',
    status: 'Ongoing',

    desc:
      'Currently building an AI-powered shopping assistant using LLMs and RAG pipelines. The system retrieves relevant product information and provides conversational recommendations using vector search and LLM workflows.',

    features: [
      'LLM-powered conversational shopping assistant',
      'Semantic product search using embeddings',
      'RAG pipeline implementation',
      'FastAPI backend integration',
      'Responsive modern UI',
    ],

    tools: [
      'Python',
      'LangChain',
      'FAISS',
      'OpenAI API',
      'FastAPI',
      'React',
      'Tailwind CSS',
    ],

    github:
      'https://github.com/pritam1952/ai-shopping-agent',
  },

  {
    title: 'Heart Disease Detection',
    status: 'Completed',

    desc:
      'Developed a deep learning-based medical prediction system using ANN models to predict heart disease probability from patient health parameters.',

    features: [
      'ANN-based prediction model',
      'TensorFlow model training',
      'Data preprocessing pipeline',
      'Flask web application',
      'Prediction visualization',
    ],

    tools: [
      'Python',
      'TensorFlow',
      'Keras',
      'Flask',
      'Pandas',
      'NumPy',
      'Scikit-learn',
    ],

    github:
      'https://github.com/pritam1952/heart-disease-prediction',
  },

  {
    title: 'Student Performance Predictor',
    status: 'Completed',

    desc:
      'Built a machine learning regression pipeline to predict student academic performance using study patterns and academic metrics.',

    features: [
      'Regression-based ML pipeline',
      'Feature engineering',
      'Model evaluation and tuning',
      'AWS EC2 deployment',
      'Interactive prediction interface',
    ],

    tools: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'AWS EC2',
      'Matplotlib',
      'Flask',
    ],

    github:
      'https://github.com/pritam1952/Student_Performance',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-zinc-900 border border-white/10
                       p-8 rounded-2xl
                       hover:border-indigo-500
                       hover:-translate-y-2
                       transition duration-300 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h3
                className="text-2xl font-semibold
                           group-hover:text-indigo-400 transition"
              >
                {project.title}
              </h3>

              <span
                className={`text-xs px-3 py-1 rounded-full border
                ${
                  project.status === 'Ongoing'
                    ? 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20'
                    : 'bg-green-500/10 text-green-300 border-green-500/20'
                }`}
              >
                {project.status}
              </span>
            </div>

            <p
              className="text-zinc-400 leading-7 mb-6
                         group-hover:text-zinc-200 transition"
            >
              {project.desc}
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3 text-zinc-300">
                Key Features
              </h4>

              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-zinc-400 flex items-start gap-2"
                  >
                    <span className="text-indigo-400">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm rounded-full
                             bg-indigo-500/10 text-indigo-300
                             border border-indigo-500/20"
                >
                  {tool}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
                         text-indigo-400 hover:text-indigo-300
                         transition font-medium"
            >
              View GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}