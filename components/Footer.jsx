export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-zinc-500 text-sm">

      <p className="mb-2">
        Built by <span className="text-zinc-300">Pritam Kumar</span>
      </p>

      <p className="mb-2">
        NIT Hamirpur · 2027
      </p>

      <p className="text-zinc-600">
        © {new Date().getFullYear()} All rights reserved
      </p>

    </footer>
  )
}