import React from 'react'
import BlogCard from '../../components/Blog/BlogCard'
import {blogsData} from "../../constants/BlogsDataConstant.js"

const BlogsPage = () => {
  return (
    <div>
        {blogsData?.map((data , index)=>(
            <BlogCard key={index} img={data.img} title={data.title} desc={data.desc}/>
        ))}
    </div>
  )
}

export default BlogsPage
