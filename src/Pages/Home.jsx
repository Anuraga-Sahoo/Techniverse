// import React from 'react'
// import Header from '../components/Header'

// const Home = () => {
//   return (
//     <>
//       <Header/>
//     </>
//   )
// }

// export default Home
import Hero from "../components/Hero"
import Features from "../components/Features"
import Testimonials from "../components/Testimonials"
import CanvasPreview from "../components/CanvasPreview"
import CTASection from "../components/CTASection"

export default function Home() {
  return (
    <main>
      <Hero />
      <CanvasPreview />
      <Features />
      <Testimonials />
      <CTASection />
    </main>
  )
}

