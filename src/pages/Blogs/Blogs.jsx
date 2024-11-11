import React from 'react'
import BlogCard from '../../components/Blog/BlogCard.jsx'
import { blogsData } from "../../constants/BlogsDataConstant.js"
import { Outlet } from 'react-router-dom';
import profileImg from "../../assets/images/profilephoto.jpg";

const Blogs = () => {
  return (
    <div>
      {/* {blogsData?.map((data, index) => (
        <BlogCard key={index} img={data.img} title={data.title} desc={data.desc} />
      ))} */}
      <div className='flex lg:flex-row flex-col gap-4 px-2' >
        {/* Tooltip  */}
        <div className='h-fit w-3/12 sticky left-0 top-[120px] rounded-lg bg-blue-400' >
          <TooltipBox />
        </div>
        {/* Blogs Content */}

        <div className='min-h-[100vh] w-6/12 flex flex-col  gap-y-4' >
          {
            blogsData?.map((item, index) => {
              return (
                <BlogCard
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
        </div>

        <div className='h-[86vh] bg-gray-400 sticky right-0 top-[120px] rounded-lg w-3/12'>
          Some text
        </div>
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