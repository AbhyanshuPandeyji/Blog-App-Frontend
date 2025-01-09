import React, { useContext } from 'react'
import BlogCard from '../../components/Blog/BlogCard.jsx'
import { blogsData } from "../../constants/Homepage/BlogsDataConstant.js"
import { Outlet } from 'react-router-dom';
import profileImg from "../../assets/images/profilephoto.jpg";
import { BlogsTabs } from '../../constants/BlogPage/BlogPageConstants.js';
import { CreateBlogContext } from '../../context/CreateBlogContext.jsx';

const Blogs = () => {


  return (
    <div className='p-4 my-8 section-padding'>

      {/* {blogsData?.map((data, index) => (
        <BlogCard key={index} img={data.img} title={data.title} desc={data.desc} />
      ))} */}
      {/* The upper Tabs and filters */}
      <div className=' my-4 w-full min-h-[50px] h-fit flex lg:flex-row flex-col-reverse'>
        {/* tabs */}
        <div className='lg:w-8/12 w-full min-h-[40px] h-fit flex flex-wrap px-4' >
          {
            BlogsTabs && BlogsTabs?.map((item, index) => (
              <p className='cursor-pointer p-4 hover:bg-gray-200' onClick={(e) => console.log(item?.tab)} key={index}>{item?.tab}</p>
            ))
          }
        </div>
        {/* The Search Bar for single search */}
        <div className='p-2 px-4'>
          <input type="text" placeholder='Search blog' className='p-2 text-lg' />
          <button className='p-2 bg-yellow-300 text-lg' >Search</button>
        </div>
      </div>
      <hr className='lg:block hidden' />

      <div className='flex lg:flex-row flex-col gap-4 w-full' >

        {/* Left - Actual Blog */}

        {/* The display of blogs down in reverse */}
        <div className='lg:w-8/12 w-full min-h-screen h-fit grid grid-cols-1 gap-4 p-4 lg:border-gray-300 lg:border-r-2 '>
          {
            blogsData && blogsData?.reverse().map((item, index) => {
              return (
                // <>
                  <BlogCard
                    key={index}
                    blogId={item?.id}
                    img={profileImg}
                    title={item?.title}
                    description={item?.desc}
                    date={item?.date}
                    author={item?.author}
                  />
                  // {/* <div className='h-[2px] bg-gray-200' /> */}
                // {/* </> */}
              )
            })
          }
        </div>

        {/* Right Extra Links */}
        <div className='lg:w-4/12 w-full min-h-screen h-fit flex flex-col gap-y-4' >

        </div>

        {/* The extra Links */}





        {/* Tooltip  */}
        {/* <div className='h-fit w-3/12 sticky left-0 top-[120px] rounded-lg bg-blue-400' >
          <TooltipBox />
        </div> */}
        {/* Blogs Content */}

        {/* <div className='min-h-[100vh] w-8/12 flex flex-col  gap-y-4' >
          {
            blogsData?.map((item, index) => {
              return (
                <BlogCard
                  key={index}
                  // img={item?.img}
                  img={profileImg}
                  title={item?.title}
                  description={item?.desc}
                  date={item?.date}
                  author={item?.author}
                />
              )
            })
          }
        </div> */}
        {/* 
        <div className='h-[86vh] bg-gray-400 sticky right-0 top-[120px] rounded-lg w-4/12'>
          Some text
        </div> */}
      </div>
      {/* <Outlet /> */}
    </div>
  )
}

export default Blogs;


export const TooltipBox = () => {
  return (
    <div className="flex flex-col  w-[80%] mx-auto h-fit p-2">
      <div className='w-full my-auto'>
        <div className='flex w-full gap-x-2'>
          <input type="text" className='p-2 w-3/4 rounded-lg bg-yellow-200' />
          <button className='w-1/4 bg-green-600 rounded-lg text-lg text-white font-semibold' >Search</button>
        </div>
      </div>
      {/* <div className='w-1/2'>
        filter
      </div> */}
    </div>
  )
}