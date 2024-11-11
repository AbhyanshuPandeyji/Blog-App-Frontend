import { blogsData, featureBlogsTitles } from "../../../constants/Homepage/BlogsDataConstant";

const BlogsSection = () => {
    return (
        <div className="min-h-[100vh] h-fit p-4 w-[80%] mx-auto my-10">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-20" >
                {featureBlogsTitles?.map((title, index) => {
                    return (
                        <div key={index}>
                            <p className="text-3xl font-semibold underline" >{title}</p>
                            <div className="flex flex-col py-4 px-1">
                                {blogsData?.map((item, idx) => (
                                    <div key={idx} className="py-2 gap-y-2 flex flex-col">
                                        <p className="text-xl " >{item?.title}</p>
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