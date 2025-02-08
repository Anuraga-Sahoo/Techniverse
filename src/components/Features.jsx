export default function Features() {
  const features = [
    {
      title: "Visual Editing",
      description: "Design and build your site visually, with real-time preview.",
      icon: "✨",
    },
    {
      title: "Responsive Design",
      description: "Create layouts that look great on any device.",
      icon: "📱",
    },
    {
      title: "Components",
      description: "Build with reusable components for consistency.",
      icon: "🧩",
    },
    {
      title: "Animations",
      description: "Add smooth animations with just a few clicks.",
      icon: "🎯",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything you need</h2>
          <p className="text-gray-400 text-xl">Build beautiful websites without writing code</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

