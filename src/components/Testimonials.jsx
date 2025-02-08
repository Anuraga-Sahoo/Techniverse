export default function Testimonials() {
  const testimonials = [
    {
      quote: "Framer has completely transformed how we design and build websites.",
      author: "Design Lead",
      company: "Tech Company",
    },
    {
      quote: "The ease of use and powerful features make Framer our go-to choice.",
      author: "Creative Director",
      company: "Design Studio",
    },
    {
      quote: "We've cut our development time in half since switching to Framer.",
      author: "Product Manager",
      company: "Startup",
    },
  ]

  return (
    <section className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Loved by designers</h2>
          <p className="text-gray-400 text-xl">See what our users have to say</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-xl bg-white/5">
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <div className="text-sm text-gray-400">
                <p className="font-medium">{testimonial.author}</p>
                <p>{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

