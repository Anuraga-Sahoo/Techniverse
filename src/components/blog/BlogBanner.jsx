import React from 'react'

const BlogBanner = () => {
  return (
    <>
      <div className='relative'>
        <img src="https://www.piclumen.com/wp-content/uploads/2024/10/piclumen-marquee-06.webp" alt="banner" className='rounded-md mb-10' />
        <div className='flex flex-col items-center gap-3 absolute top-[11rem] left-[6rem] justify-center'>
          <h2 className='text-6xl font-bold bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent p-3'>Explore our Blogs</h2>
          <p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  )
}

export default BlogBanner
