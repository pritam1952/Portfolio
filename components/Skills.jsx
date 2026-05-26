const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['Python', 'C++', 'SQL'],
  },

  {
    title: 'AI / ML Frameworks',
    icon: '🧠',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
    ],
  },

  {
    title: 'LLM & AI Agents',
    icon: '🤖',
    skills: [
      'LangChain',
      'LLMs',
      'RAG',
      'AI Agents',
      'Prompt Engineering',
      'OpenAI API',
    ],
  },

  {
    title: 'Vector Databases',
    icon: '📚',
    skills: ['FAISS', 'ChromaDB'],
  },

  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS', 'Docker', 'Git', 'GitHub'],
  },

  

  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Hugging Face', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      {/* Heading */}
      <div className="mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Skills & Technologies
        </h2>

        <p className="text-zinc-400 text-lg max-w-2xl">
          Technologies and tools I use to build AI-powered,
          scalable, and modern applications.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid md:grid-cols-2 gap-8">

        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="group bg-zinc-900 border border-white/10
                       rounded-2xl p-8
                       hover:border-indigo-500
                       hover:-translate-y-1
                       transition duration-300 shadow-lg"
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6">

              <div
                className="w-14 h-14 rounded-2xl
                           bg-indigo-500/10
                           border border-indigo-500/20
                           flex items-center justify-center
                           text-2xl"
              >
                {category.icon}
              </div>

              <div>
                <h3
                  className="text-2xl font-semibold
                             group-hover:text-indigo-400
                             transition"
                >
                  {category.title}
                </h3>

                <p className="text-zinc-500 text-sm mt-1">
                  {category.skills.length} Technologies
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">

              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 rounded-xl
                             bg-zinc-800/70
                             border border-white/5
                             text-zinc-300 text-sm
                             hover:border-indigo-500
                             hover:text-white
                             hover:bg-indigo-500/10
                             hover:scale-105
                             transition duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}