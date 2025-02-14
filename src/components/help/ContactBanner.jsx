import React from 'react'

const ContactBanner = () => {
  return (
    <div className='w-full relative'>
      <div className='w-full flex justify-center items-center'>
        <img 
          src="\src\assets\contact-us-2993109_1280.jpg" 
          alt="Contact banner" 
          className='w-full md:w-[90%] h-[40vh] md:h-[50vh] lg:h-[60vh] object-cover rounded-none md:rounded-md'
        />
      </div>
      <h2 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-semibold text-black px-4'>
        Contact Us
      </h2>
    </div>
  )
}

export default ContactBanner