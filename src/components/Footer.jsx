import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col sm:justify-center sm:items-center'>

    <footer className='p-6 sm:pl-[11rem] sm:pr-[11rem] sm:flex sm:justify-around sm:gap-[7rem]'>
      <div className='mb-4'>
        <h2 className='font-bold text-xl '>Footer Heading</h2>
        <div className='flex flex-col gap-2 mt-6'>
          <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
          <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
          <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
          <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
        </div>
      </div>
      <div className='mb-4'>
      <h2 className='font-bold text-xl '>Footer Heading</h2>
        <div className='flex flex-col gap-2 mt-6'>
          <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
          <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
          <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
          <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
        </div>
      </div>
      <div className='mb-4'>
      <h2 className='font-bold text-xl '>Footer Heading</h2>
        <div className='flex flex-col gap-2 mt-6'>
          <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
          <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
          <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
          <Link className='text-[#00000080] sm:hover:text-[#6b3feb]'>lorem epsom</Link>
        </div>
      </div>
    </footer>
    <div className='flex w-[100%] justify-center items-center h-[6rem]'>
      <div className='bg-[#eeeded] w-[80%] rounded-md p-6 text-center'>Copyright &copy; 2025 Technivers</div>
    </div>
    </div>
  )
}

export default Footer
