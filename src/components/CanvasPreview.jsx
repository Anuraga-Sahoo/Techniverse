export default function CanvasPreview() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-20">
      <div className="relative rounded-lg overflow-hidden border border-gray-800">
        <img
          src="https://sjc.microlink.io/rfqDUsp2gAUorJydox69jJNjhFGczzGzIh3YVM9NGtlnbsoOp_j55Tt1YCnDUButm4kgZH-audQXzvpnIotfUg.jpeg"
          alt="Framer Canvas Interface"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
    </div>
  )
}



