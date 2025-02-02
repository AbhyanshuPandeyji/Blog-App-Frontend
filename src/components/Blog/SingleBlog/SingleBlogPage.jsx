import { useParams } from "react-router-dom"
import SingleBlogPageTitle from "./SingleBlogPageTitle";
import { blogsData } from "../../../constants/Homepage/BlogsDataConstant";
import CreateBlog from "../CreateBlog/CreateBlogPage.jsx";
import { useContext, useEffect, useState } from "react";
import { CreateBlogContext } from "../../../context/CreateBlogContext.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogThunkMiddleware, getSingleBlogThunkMiddleware } from "../../../redux/features/blogReducer/blogReducer.js";
import { MoonLoader } from "react-spinners";
import { setLoader } from "../../../redux/features/Loaders/loaders.js";

const SingleBlogPage = () => {

    const dispatch = useDispatch();
    const { singleBlog } = useSelector((state) => state.blogs);
    const { loading } = useSelector((state) => state.loader);
    // const [ singleData , setSingleData] = useState({});
    const params = useParams();

    // Have to use the effect because everytime the page reload it will try to refetch data which is now not been loaded eariler 
    // its needs to be fixed by storing and accessing data and not refressing each time page loads
    // useEffect(() => {
    //     dispatch(getAllBlogThunkMiddleware());
    // }, [])
    // const singleId = params.id;


    // console.log(singleBlog)

    // useEffect(()=>{
    //     if(allBlogs){
    //         dispatch(setLoader({ loading : true}));
    //         setSingleData(()=>{
    //             return allBlogs?.blogs?.filter((item, index) => {
    //                 return item._id === singleId;
    //             });
    //         });
    //         if(singleData) dispatch(setLoader({loading : false}));
    //     }
    // },[])

    useEffect(() => {
        dispatch(setLoader({ loading: true }));
        dispatch(getSingleBlogThunkMiddleware({ id: params.id }));
    }, [dispatch, params.id]); // Add dispatch and params.id as dependencies

    // Improved conditional rendering:
    const renderBlogContent = () => {
        if (singleBlog && singleBlog.length > 0) {  // Check for both existence and length
            return (
                <div className=" lg:6/12 flex-col w-full min-h-screen h-fit border-x-8 border-dotted ">
                    <SingleBlogPageTitle
                        authorName={singleBlog[0].authorName}
                        blogDate={singleBlog[0].createdAt}
                        blogTitle={singleBlog[0].title}
                    />
                    <div className="p-4 ">{singleBlog[0].content}</div>
                </div>
            );
        } else if (loading) {
            return <MoonLoader size={"22px"} />; // Show loader while fetching
        } else {
            return <div>Blog not found or loading...</div>; // Or a more user-friendly message
        }
    };
    // console.log("single blog", singleBlog)
    // console.log("single blog 0", singleBlog[0])
    return (
        <div className="min-h-screen h-fit flex lg:flex-row flex-col ">
            {/* <button onClick={handleGettingBlog} className="p-4 rounded-lg bg-blue-400 text-white font-semibold text-lg" >GetSingleBlog</button> */}

            <div className="lg:w-3/12 w-full h-fit min-h-[200px]">Blog Content Walkthrough</div>
            {/* {
                loading && !singleBlog ? (<MoonLoader size={"22px"} />) : (
                    <div className=" lg:6/12 flex-col w-full min-h-screen h-fit border-x-8 border-dotted ">
                        <SingleBlogPageTitle
                            authorName={singleBlog[0]?.authorName}
                            blogDate={singleBlog[0]?.createdAt}
                            blogTitle={singleBlog[0]?.title}
                        />
                        <div className="p-4 ">
                            {singleBlog[0]?.content}
                        </div>
                    </div>
                )
            } */}
            {renderBlogContent()}
            <div className="lg:w-3/12 w-full h-fit min-h-[200px]">Other featured blogs and authors</div>
        </div>
    )
}

export default SingleBlogPage