import React, { useState } from 'react'
import { blogsData } from '../../constants/BlogsDataConstant'
import BlogCard from './BlogCard'



const BlogCardGrid = () => {

    const [visibility, setVisibility] = useState(3);

    return (
        <div className='grid grid-cols-1 '>
            <div>
                {blogsData.slice(0, visibility).map((item, index) => (
                    <BlogCard
                        key={item.id}
                        image={item.img}
                        title={item.title}
                        description={item.desc}
                    />
                ))
                }
            </div>
            <button className='bg-blue-500 text-white text-xl p-3 m-5' onClick={()=>setVisibility(visibility + 3)} >Load More</button>
        </div>
    )
}

export default BlogCardGrid
