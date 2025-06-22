import { useParams } from "react-router-dom"
import SingleBlogPageTitle from "./SingleBlogPageTitle";
// import { blogsData } from "../../../constants/Homepage/BlogsDataConstant";
// import CreateBlog from "../CreateBlog/CreateBlogPage.jsx";
import { useContext, useEffect, useState } from "react";
// import { CreateBlogContext } from "../../../context/CreateBlogContext.jsx";
import { useDispatch, useSelector } from "react-redux";
// import { getAllBlogThunkMiddleware, getSingleBlogThunkMiddleware } from "../../../redux/features/blogReducer/blogReducer.js";
import { MoonLoader } from "react-spinners";
import { setLoader } from "../../../redux/features/Loaders/loaders.js";
import { makeRequest } from "../../../config/axios.js"


// Icons
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
// import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";







const SingleBlogPage = () => {

    const axios = makeRequest();

    const dispatch = useDispatch();
    // const { singleBlog } = useSelector((state) => state.blogs);
    const { loading } = useSelector((state) => state.loader);
    const { singleUser } = useSelector((state) => state.user);
    const [data, setData] = useState({});
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
    // const blogId = params.id;

    useEffect(() => {
        // dispatch(setLoader({ loading: true }));
        // dispatch(getSingleBlogThunkMiddleware({ id: params.id }));

        // console.log(params.id)
        // console.log(blogId)
        const fetchBlog = async (id) => {
            try {
                dispatch(setLoader({ loader: true }));
                const response = await axios.get(`/blog/singleblog/${id}`);
                console.log(response.data)
                if (response.status === 200) {
                    console.log(response.data)
                    setData(response?.data?.blog)
                }
            }
            catch (error) {
                if (error?.response) {
                    console.log(error)
                    toastify({ msg: error.response.data?.message, type: "error" });
                }
            } finally {
                dispatch(setLoader({ loader: false }));
            }
        }

        fetchBlog(params.id);

    }, [params]); // Add dispatch and params.id as dependencies

    console.log(singleUser._id)
    // Improved conditional rendering:
    const renderBlogContent = () => {
        // if (singleBlog && singleBlog.length > 0) {  // Check for both existence and length
        if (data && data.length > 0) {  // Check for both existence and length
            return (
                <div className=" lg:6/12 flex-col p-4 w-full min-h-screen h-fit relative ">
                    <SingleBlogPageTitle
                        authorName={data[0].authorName}
                        blogDate={data[0].createdAt}
                        blogTitle={data[0].title}
                    />
                    <div className="p-4 ">
                        {/* {singleBlog[0].content} */}
                        <div dangerouslySetInnerHTML={{ __html: data[0].content }} />
                    </div>
                    {/* <div className="absolute bottom-0 right-0" >< BsThreeDotsVertical size={"22px"} /></div> */}
                    <div className="absolute bottom-4 right-4 flex gap-x-2 flex-wrap" >
                        {/* <CiBookmark size={"22px"} /> */}
                        {/* <FaHeart size={"22px"} /> */}
                        {/* { data[0].likes.includes(singleUser._id)  ?  <FaHeart size={"22px"} /> : <FaRegHeart size={"22px"} /> }  */}
                        {data[0].isFeatured ? < FaBookmark size={"22px"} /> : <FaRegBookmark size={"22px"} />}
                        {/* < BsThreeDots size={"22px"} /> */}
                    </div>
                </div>
            );
        } else if (loading) {
            return <MoonLoader size={"22px"} />; // Show loader while fetching
        } else {
            return <div>Blog not found</div>; // Or a more user-friendly message
        }
    };
    // console.log("single blog", singleBlog)
    // console.log("single blog 0", singleBlog[0])
    return (
        <div className="min-h-screen h-fit flex lg:flex-row flex-col ">
            {/* <button onClick={handleGettingBlog} className="p-4 rounded-lg bg-blue-400 text-white font-semibold text-lg" >GetSingleBlog</button> */}

            <div className="lg:w-3/12 w-full h-fit min-h-[200px]"></div>
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
            {/* <div><BsThreeDotsVertical /></div> */}
            <div className="lg:w-3/12 w-full h-fit min-h-[200px]"></div>
        </div>
    )
}

export default SingleBlogPage