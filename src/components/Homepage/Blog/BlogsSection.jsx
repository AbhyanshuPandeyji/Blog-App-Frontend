import { NavLink } from "react-router-dom";
import { blogsData, featureBlogsTitles } from "../../../constants/Homepage/BlogsDataConstant";

const BlogsSection = () => {
    return (
        <div className="min-h-[100vh] h-fit p-4 mx-auto my-10">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-20 md:justify-start items-center" >
                {featureBlogsTitles?.map((title, index) => {
                    return (
                        <div key={index}>
                            <p className="md:text-3xl text-2xl md:text-start text-center font-semibold underline" >{title}</p>
                            <div className="flex flex-col py-4 px-1">
                                {blogsData?.map((item, idx) => (
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