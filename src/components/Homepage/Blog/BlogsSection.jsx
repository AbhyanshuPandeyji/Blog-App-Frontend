import { NavLink } from "react-router-dom";
import { blogsData, featureBlogsTitles } from "../../../constants/Homepage/BlogsDataConstant";

// this will be used with featured blogs, it will be more advanced in future where the blogs will be based on featured blogs , and 
// those blogs will come on top of each category or every one of the blogs , that will require a seperate modal in backend or section 
// which decide the feature blogs , and ability to maintain blogs based on priority and featured to put on top or lower.
// such as using $push in an array to decide which blog is featured and me deciding by list which blogs to make featured

const BlogsSection = () => {
    return (
        <div className="min-h-[100vh] h-fit p-4 mx-auto my-10">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-20 md:justify-start items-center" >
                {featureBlogsTitles?.map((title, index) => {
                    return (
                        <div key={index}>
                            <p className="md:text-3xl text-2xl md:text-start text-center font-semibold underline" >{title}</p>
                            <div className="flex flex-col py-4 px-1">
                                {blogsData?.slice(0,10).map((item, idx) => (
                                    <div key={idx} className="py-2 gap-y-2 flex flex-col">
                                        <NavLink
                                            to={`/blog/singleblog/${item?.id}?author=${item?.author}&date=${item?.date}`}
                                            className="md:text-2xl text-lg  cursor-pointer font-bold text-wrap"
                                        >
                                            {item?.title}
                                        </NavLink>
                                        <hr />
                                    </div>
                                ))}
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BlogsSection;