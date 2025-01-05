import { useParams } from "react-router-dom"
import SingleBlogPageTitle from "./SingleBlogPageTitle";
import { blogsData } from "../../../constants/Homepage/BlogsDataConstant";
import CreateBlog from "../CreateBlog/CreateBlogPage.jsx";
import { useContext } from "react";
import { CreateBlogContext } from "../../../context/CreateBlogContext.jsx";

const SingleBlogPage = () => {

    const params = useParams()
    console.log(params)
    const singleId = params.id;
    const singleData = blogsData.filter((item, index) => {
        return item.id === singleId;
    });
    // console.log(singleData)
    console.log(params)
    // const singleDate = params.date;

    // console.log( singleDate , singleId , )

    // const content = useContext(CreateBlogContext);
    const handleSubmit = () => {
        localStorage.setItem("blog",
            JSON.stringify("hello its me")
            //   JSON.stringify({
            //   img: images,
            //   title: title,
            //   description: description,
            //   html: html,
            // })
        )
    }
    // console.log(content);

    const { text: content } = useContext(CreateBlogContext);

    return (
        <div className="min-h-screen h-fit flex lg:flex-row flex-col ">

            <div className="lg:w-3/12 w-full h-fit min-h-[200px]">Blog Content Walkthrough</div>
            <div className=" lg:6/12 flex-col w-full h-screen border-x-8 border-dotted ">
                <SingleBlogPageTitle authorName={singleData[0]?.author} blogDate={singleData[0]?.date} blogTitle={singleData[0]?.title} />
                {/* <button onClick={handleSubmit} className="bg-blue-400 p-4 text-lg font-semibold" >Submit</button> */}
                {content}
            </div>
            <div className="lg:w-3/12 w-full h-fit min-h-[200px]">Other featured blogs and authors</div>
        </div>
    )
}

export default SingleBlogPage