import React from 'react'

const ContactBanner = () => {
  return (
    <>
      <div className='w-[100%] relative'>
          <div className='w-[100%] flex justify-center align-center'>
            <img src="\public\contact-us-2993109_1280.jpg" alt="" className='w-[90%] h-[30rem] rounded-md'/>
          </div>
          <h2 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[3rem] text-black font-semibold'>Contact Us</h2>
      </div>
    </>
  )
}

export default ContactBanner
