'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden px-6"
    >

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Glow Effects */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px]
                     bg-indigo-500/10 rounded-full blur-3xl"
        />

        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px]
                     bg-purple-500/10 rounded-full blur-3xl"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main Container */}
      <div
        className="max-w-7xl mx-auto grid md:grid-cols-2
                   gap-16 items-center relative z-10 w-full"
      >

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Status Badge */}
          <div
            className="inline-flex items-center gap-2
                       px-4 py-2 rounded-full
                       bg-emerald-500/10
                       border border-emerald-500/20
                       text-emerald-400
                       font-mono text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            &gt; booting intelligent systems...
          </div>

          {/* Heading */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl
                       font-black leading-tight mb-6"
          >
            Pritam{' '}
            <span
              className="text-transparent bg-clip-text
                         bg-gradient-to-r
                         from-indigo-400 via-purple-400
                         to-pink-400"
            >
              Kumar
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-zinc-400 text-lg md:text-xl
                       leading-8 max-w-2xl mb-10"
          >
            Final year Electrical Engineering student at
            <span className="text-white font-medium">
              {' '}NIT Hamirpur
            </span>{' '}
            focused on building scalable ML systems
            and AI-powered products.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="bg-indigo-500 hover:bg-indigo-600
                         px-7 py-4 rounded-2xl
                         transition duration-300
                         font-medium shadow-lg
                         hover:scale-105"
            >
              📄 Download Resume
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/pritam1952"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10
                         bg-white/5 backdrop-blur-sm
                         px-7 py-4 rounded-2xl
                         hover:border-indigo-500
                         hover:bg-indigo-500/10
                         hover:-translate-y-1
                         transition duration-300
                         flex items-center gap-3"
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/pritam-kumar075"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10
                         bg-white/5 backdrop-blur-sm
                         px-7 py-4 rounded-2xl
                         hover:border-indigo-500
                         hover:bg-indigo-500/10
                         hover:-translate-y-1
                         transition duration-300
                         flex items-center gap-3"
            >
              <FaLinkedin className="text-xl text-blue-400" />
              LinkedIn
            </a>

          </div>

          {/* Info Cards */}
          <div className="flex flex-wrap gap-5">

            <div
              className="bg-zinc-900/80 border border-white/10
                         rounded-2xl px-5 py-4
                         backdrop-blur-sm"
            >
              <h4 className="text-indigo-400 font-semibold mb-1">
                AI/ML
              </h4>

              <p className="text-zinc-500 text-sm">
                Intelligent Systems
              </p>
            </div>

            <div
              className="bg-zinc-900/80 border border-white/10
                         rounded-2xl px-5 py-4
                         backdrop-blur-sm"
            >
              <h4 className="text-indigo-400 font-semibold mb-1">
                LLMs
              </h4>

              <p className="text-zinc-500 text-sm">
                RAG & AI Agents
              </p>
            </div>

            <div
              className="bg-zinc-900/80 border border-white/10
                         rounded-2xl px-5 py-4
                         backdrop-blur-sm"
            >
              <h4 className="text-indigo-400 font-semibold mb-1">
                Cloud
              </h4>

              <p className="text-zinc-500 text-sm">
                AWS & Deployment
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center items-center"
        >

          <div className="relative w-[420px] h-[420px]">

            {/* Glow */}
            <div
              className="absolute inset-0
                         bg-indigo-500/10
                         blur-3xl rounded-full"
            />

            {/* Main Card */}
            <div
              className="absolute inset-10
                         rounded-3xl
                         bg-zinc-900/80
                         border border-white/10
                         backdrop-blur-xl
                         flex flex-col items-center justify-center
                         text-center
                         p-10 shadow-2xl"
            >

              {/* AI Icon */}
              <div className="relative mb-8">

                <div
                  className="absolute inset-0
                             rounded-full
                             border border-indigo-500/20
                             animate-ping"
                />

                <div
                  className="w-24 h-24 rounded-full
                             bg-gradient-to-br
                             from-indigo-500
                             to-purple-500
                             flex items-center justify-center
                             text-5xl shadow-lg"
                >
                  🤖
                </div>

              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-4">
                AI Engineer
              </h3>

              {/* Description */}
              <p className="text-zinc-400 leading-8 max-w-sm">
                Building intelligent applications,
                autonomous AI systems,
                and scalable ML workflows.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">

                {[
                  'Python',
                  'TensorFlow',
                  'LangChain',
                  'RAG',
                  'AWS',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl
                               bg-zinc-800
                               border border-white/5
                               text-sm text-zinc-300
                               hover:border-indigo-500
                               hover:text-white
                               transition"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

            {/* Floating Glow Orbs */}
            <div
              className="absolute top-10 left-10
                         w-20 h-20 rounded-full
                         bg-indigo-500/20 blur-2xl"
            />

            <div
              className="absolute bottom-10 right-10
                         w-24 h-24 rounded-full
                         bg-purple-500/20 blur-2xl"
            />

          </div>

        </motion.div>

      </div>
    </section>
  )
}