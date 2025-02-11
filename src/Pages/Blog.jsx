import React from 'react'
import BlogBanner from '../components/blog/BlogBanner'




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
]
const Blog = () => {
 
  return (
    <>
    <section>
    <div className='flex justify-center items-center flex-col'>
      <BlogBanner/>
    </div>
    <div className=' text-white p-[6rem] w-[100%] flex flex-wrap justify-center items-center'>
      
    {
      Blogs.map(( blog, index)=>(
        <div key={index}  onClick={() => console.log('clicked', index)} className="flex justify-center items-center flex-col bg-black text-white m-10 h-full  w-[15rem] rounded-md shadow-2xl shadow-indigo-950 cursor-pointer hover:scale-[1.1] transition-transform">
          <div>
            <img src={blog.image} alt="blog image" className='rounded-md' />
          </div>
          <div>
            <div className='p-3'>
              <h1 className='text-2xl font-semibold'>{blog.title}</h1>
              <p className='text-[1rem] text-gray-600'>{blog.discription}</p>
            </div>
          </div>
        </div>
      ))
    }
      </div>
      </section>
      </>
  )
}

export default Blog
