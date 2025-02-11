import React from 'react';
import BlogBanner from '../components/blog/BlogBanner';

let Blogs = [
  {
    "title": "Lorem ipsum dolor sit. ",
    "discription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam soluta pariatur iusto?",
    "image": "https://t3.ftcdn.net/jpg/04/24/53/50/360_F_424535039_f0HgjloFjZodjP0qDErF6HZrVm7qJ7mo.jpg",
  },
  {
    "title": "Lorem ipsum dolor sit. ",
    "discription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam soluta pariatur iusto?",
    "image": "https://cdn.pixabay.com/photo/2021/09/06/12/40/cryptocurrency-6601591_640.jpg",
  },
  {
    "title": "Lorem ipsum dolor sit. ",
    "discription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam soluta pariatur iusto?",
    "image": "https://t3.ftcdn.net/jpg/04/24/53/50/360_F_424535039_f0HgjloFjZodjP0qDErF6HZrVm7qJ7mo.jpg",
  },
  {
    "title": "Lorem ipsum dolor sit. ",
    "discription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam soluta pariatur iusto?",
    "image": "https://t3.ftcdn.net/jpg/04/24/53/50/360_F_424535039_f0HgjloFjZodjP0qDErF6HZrVm7qJ7mo.jpg",
  },
  {
    "title": "Lorem ipsum dolor sit. ",
    "discription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam soluta pariatur iusto?",
    "image": "https://t3.ftcdn.net/jpg/04/24/53/50/360_F_424535039_f0HgjloFjZodjP0qDErF6HZrVm7qJ7mo.jpg",
  },
  {
    "title": "Lorem ipsum dolor sit. ",
    "discription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam soluta pariatur iusto?",
    "image": "https://t3.ftcdn.net/jpg/04/24/53/50/360_F_424535039_f0HgjloFjZodjP0qDErF6HZrVm7qJ7mo.jpg",
  },
  {
    "title": "Lorem ipsum dolor sit. ",
    "discription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aperiam soluta pariatur iusto?",
    "image": "https://t3.ftcdn.net/jpg/04/24/53/50/360_F_424535039_f0HgjloFjZodjP0qDErF6HZrVm7qJ7mo.jpg",
  }
];

const Blog = () => {
  return (
    <>
      <section>
        {/* Blog Banner */}
        <div className='flex justify-center items-center flex-col'>
          <BlogBanner />
        </div>

        {/* Blog Cards Grid */}
        <div className='text-white p-4 sm:p-8 w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {Blogs.map((blog, index) => (
              <div
                key={index}
                onClick={() => console.log('clicked', index)}
                className="flex flex-col bg-gray-950 text-white rounded-md shadow-2xl shadow-indigo-950 cursor-pointer hover:scale-[1.05] transition-transform"
              >
                <div>
                  <img src={blog.image} alt="blog" className='w-full h-48 object-cover rounded-t-md' />
                </div>
                <div className='p-4'>
                  <h1 className='text-xl font-semibold'>{blog.title}</h1>
                  <p className='text-sm text-gray-400 mt-2'>{blog.discription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;