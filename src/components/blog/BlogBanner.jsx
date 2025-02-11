import React from 'react';

const BlogBanner = () => {
  return (
    <div className="relative w-full">
      <img
        src="https://www.piclumen.com/wp-content/uploads/2024/10/piclumen-marquee-06.webp"
        alt="banner"
        className="w-full h-auto rounded-md mb-10 object-cover"
      />
      <div className="absolute inset-x-0 top-[30%] flex flex-col items-center text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent p-3">
          Explore our Blogs
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default BlogBanner;
