import React, { useContext, useEffect, useState } from 'react'
import BlogCard from '../../components/Blog/BlogCard.jsx'
// import { blogsData } from "../../constants/Homepage/BlogsDataConstant.js"
// import { Outlet } from 'react-router-dom';
import profileImg from "../../assets/images/profilephoto.jpg";
import { BlogsTabs } from '../../constants/BlogPage/BlogPageConstants.js';
// import { CreateBlogContext } from '../../context/CreateBlogContext.jsx';
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogThunkMiddleware } from '../../redux/features/blogReducer/blogReducer.js';


const Blogs = () => {

  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');


  const { allBlogs } = useSelector((state) => state.blogs);


  useEffect(() => {

    dispatch(getAllBlogThunkMiddleware());

  }, [dispatch]);

  // console.log(allBlogs);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };

  // Filter the data based on the search query
  const filteredData = allBlogs.blogs?.filter(item => {
    return Object.keys(item).some(key => {
      // You can customize which fields to search in, like title, description, content, etc.
      // Example: check 'title', 'description', 'content', 'comment.text'
      if (['title', 'description', 'content'].includes(key)) {
        return item[key]?.toLowerCase().includes(searchQuery.toLowerCase());
      }
      // Additionally, you can handle comments if needed:
      // if (key === 'comment') {
      //   return item[key]?.some(comment =>
      //     comment.text.toLowerCase().includes(searchQuery.toLowerCase())
      //   );
      // }
      return false;
    });
  });


  // console.log(filteredData)


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
          <input type="text"
            placeholder='Search blog'
            className='p-2 text-lg'
            value={searchInput}
            onChange={handleInputChange}
          />
          <button
            className='p-2 bg-yellow-300 text-lg'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <hr className='lg:block hidden' />

      <div className='flex lg:flex-row flex-col gap-4 w-full' >

        {/* Left - Actual Blog */}

        {/* The display of blogs down in reverse */}
        {/* <div className='lg:w-8/12 w-full min-h-screen h-fit grid grid-cols-1 gap-4 p-4 lg:border-gray-300 lg:border-r-2 '> */}
        <div className='w-full min-h-screen h-fit grid grid-cols-1 gap-4 p-4 '>
          {
            // blogsData && blogsData?.reverse().map((item, index) => {
            filteredData && filteredData?.reverse().map((item, index) => {
              return (
                // <>
                <BlogCard
                  key={index}
                  blogId={item?._id}
                  title={item?.title}
                  desc={item?.description}
                  content={item?.content}
                  views={item?.numOfViews}
                  img={profileImg}
                  date={item?.createdAt}
                  author={item?.author}
                  authorName={item?.authorName}
                />
                // {/* <div className='h-[2px] bg-gray-200' /> */}
                // {/* </> */}
              )
            })
          }
        </div>

        {/* <div>
          {`
            "_id": "679602d097c9ab0f3f249323",
          "title": "Just to delete this blog",
          "description": "Just to delete this blog",
          "author": "6794bbb379a6570218f76407",
          "content": "Just to delete this blog",
          "category": "Other",
          "numOfLikes": 0,
          "numOfSaves": 0,
          "isFeatured": false,
          "numOfViews": 0,
          "createdAt": "2025-01-26T09:39:28.661Z",
          "updatedAt": "2025-01-26T09:39:28.661Z",
          "comment": [
          {
            "userId": "6794bbb379a6570218f76407",
          "text": "This is the best comment ever",
          "_id": "6796033997c9ab0f3f24932a"
        },
          {
            "userId": "6794bbb379a6570218f76407",
          "text": "This is the best comment ever again",
          "_id": "6796034397c9ab0f3f24932e"
        },
          {
            "userId": "6794bbb379a6570218f76407",
          "text": "This is the best comment ever again",
          "_id": "6796034b97c9ab0f3f249333"
        }
          ],
          "__v": 3 `
          }</div> */}

        {/* Right Extra Links */}
        {/* <div className='lg:w-4/12 w-full min-h-screen h-fit flex flex-col gap-y-4' >

        </div> */}

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