import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative z-10">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      <div className="fixed inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-[120px]" />
      </div>
    </div>
  )
}

