import { Link } from "react-router-dom"

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-400 text-xl mb-8">Join thousands of designers already using Framer</p>
        <div className="flex justify-center gap-4">
          <Link
            to="/start"
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Start for free
          </Link>
          <Link
            to="/pricing"
            className="border border-gray-700 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  )
}

