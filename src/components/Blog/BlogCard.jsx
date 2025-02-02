import { Link, NavLink } from "react-router-dom"

import { format, formatDate } from "date-fns"
import { useDispatch } from "react-redux"

const BlogCard = ({ img, title, desc, date, author , blogId , views ,authorName }) => {


    // const handleGetAuthor = ()=>{

    // }

    const dispatch = useDispatch();

    const handleDate = (dateOrg)=>{
        const dateNew = format(dateOrg, "dd-mm-yyyy");
        return dateNew
    }


    return (
        <div className="mx-auto w-full md:min-h-[200px] min-h-[250px] h-fit flex sm:flex-row flex-col rounded-lg overflow-hidden">
            <div className="md:w-1/3 w-full items-center">
                <img src={img} className="w-full md:h-[200px] h-[200px] p-2 overflow-hidden rounded-lg object-cover " alt="..." />
            </div>
            <div className="flex md:w-2/3 w-full flex-col p-2 gap-y-2">
                <div className="flex gap-x-2 items-center">
                    <img src="..." alt="" className="h-[20px] w-[20px] rounded-full bg-black" />
                    <p className="">{authorName}</p>
                </div>
                <div>
                    <NavLink to={`/blog/singleblog/${blogId}?authorId=${author}&date=${handleDate(date)}`} 
                    className="md:text-2xl text-xl  cursor-pointer font-bold text-wrap">{title}</NavLink>
                    <p className="text-lg md:block hidden text-wrap">{desc?.split("").splice(0, 50).join("")}...</p>
                </div>
                <div className="flex justify-between" >
                    {/* <span>{author}</span> */}
                    <span>{handleDate(date)}</span>
                    <div className="px-4">
                        <p>{views}</p>
                    </div>
                </div>
                {/* <NavLink to="/" >Go Somewhere</NavLink> */}
            </div>
        </div>
    )
}

export default BlogCard
