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
    const { allBlogs, singleBlog } = useSelector((state) => state.blogs);
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
        // if(allBlogs){
        //     dispatch(setLoader({ loading : true}));
        //     setSingleData(()=>{
        //         return allBlogs?.blogs?.filter((item, index) => {
        //             return item._id === singleId;
        //         });
        //     });
        //     if(singleData) dispatch(setLoader({loading : false}));
        // }
        dispatch(getSingleBlogThunkMiddleware({ id: params.id }));
    }, [])

    // console.log(params)
    // console.log(allBlogs);
    // // const singleData = blogsData.filter((item, index) => {
    // // console.log(singleData)
    // // console.log(params)
    // console.log(singleData)

    // if(singleData) return dispatch(setLoader({loading : false}));
    // if(singleData) return loading = false;
    // const singleDate = params.date;

    // console.log( singleDate , singleId , )

    // const content = useContext(CreateBlogContext);
    // const handleSubmit = () => {
    //     localStorage.setItem("blog",
    //         JSON.stringify("hello its me")
    //         //   JSON.stringify({
    //         //   img: images,
    //         //   title: title,
    //         //   description: description,
    //         //   html: html,
    //         // })
    //     )
    // }
    // console.log(content);

    // const { text: content } = useContext(CreateBlogContext);

    // const handleGettingBlog = ()=>{
    //     console.log("id in parameter" , params.id)
    //     dispatch(getSingleBlogThunkMiddleware({id : params.id }));
    // }

    // console.log(singleBlog)

    return (
        <div className="min-h-screen h-fit flex lg:flex-row flex-col ">
            {/* <button onClick={handleGettingBlog} className="p-4 rounded-lg bg-blue-400 text-white font-semibold text-lg" >GetSingleBlog</button> */}

            <div className="lg:w-3/12 w-full h-fit min-h-[200px]">Blog Content Walkthrough</div>
            {
                loading ? (<MoonLoader size={"22px"} />) : (
                    <div className=" lg:6/12 flex-col w-full h-screen border-x-8 border-dotted ">
                        {/* <SingleBlogPageTitle
                            authorName={singleData[0]?.author}
                            blogDate={singleData[0]?.createdAt}
                            blogTitle={singleData[0]?.title}
                        />
                        {singleData[0]?.content} */}
                        <SingleBlogPageTitle
                            authorName={singleBlog[0]?.authorName}
                            blogDate={singleBlog[0]?.createdAt}
                            blogTitle={singleBlog[0]?.title}
                        />
                        {/* <button onClick={handleSubmit} className="bg-blue-400 p-4 text-lg font-semibold" >Submit</button> */}
                        <div className="p-4 ">
                            {singleBlog[0]?.content}
                        </div>
                    </div>
                )
            }
            <div className="lg:w-3/12 w-full h-fit min-h-[200px]">Other featured blogs and authors</div>
        </div>
    )
}

export default SingleBlogPage