// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div className='flex flex-col sm:justify-center sm:items-center'>

//     <footer className='p-6 sm:pl-[11rem] sm:pr-[11rem] sm:flex sm:justify-around sm:gap-[7rem]'>
//       <div className='mb-4'>
//         <h2 className='font-bold text-xl '>Footer Heading</h2>
//         <div className='flex flex-col gap-2 mt-6'>
//           <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
//           <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
//           <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
//           <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
//         </div>
//       </div>
//       <div className='mb-4'>
//       <h2 className='font-bold text-xl '>Footer Heading</h2>
//         <div className='flex flex-col gap-2 mt-6'>
//           <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
//           <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
//           <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
//           <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
//         </div>
//       </div>
//       <div className='mb-4'>
//       <h2 className='font-bold text-xl '>Footer Heading</h2>
//         <div className='flex flex-col gap-2 mt-6'>
//           <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
//           <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
//           <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
//           <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
//         </div>
//       </div>
//     </footer>
//     <div className='flex w-[100%] justify-center items-center h-[6rem]'>
//       <div className='bg-[#eeeded] w-[80%] rounded-md p-6 text-center'>Copyright &copy; 2025 Technivers</div>
//     </div>
//     </div>
//   )
// }

// export default Footer

import { Link } from "react-router-dom"

export default function Footer() {
  const footerLinks = {
    Product: ["Features", "Enterprise", "Security", "Pricing"],
    Resources: ["Blog", "Tutorials", "Documentation", "Support"],
    Company: ["About", "Careers", "Contact", "Press"],
    Legal: ["Terms", "Privacy", "Cookies", "Licenses"],
  }

  return (
    <footer className="bg-black/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link to={`/${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Framer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

