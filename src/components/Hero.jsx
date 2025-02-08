import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <div className="pt-32 pb-16 text-center">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
        Just publish it
        <br />
        with Framer
      </h1>
      <p className="text-gray-400 text-xl mb-8">The website builder loved by designers.</p>
      <div className="flex justify-center gap-4">
        <Link
          to="/start"
          className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
        >
          Start for free
        </Link>
        <button className="border border-gray-700 text-white px-6 py-2 rounded-full font-medium hover:bg-white/10 transition-colors">
          Watch video
        </button>
      </div>
    </div>
  )
}

