import { Link, NavLink } from "react-router-dom"


const BlogCard = ({ img, title, description, date, author }) => {
    return (
        <div className="mx-auto w-full min-h-[160px] h-fit flex  rounded-lg overflow-hidden">
            <div className="w-1/3 items-center">
                <img src={img} className="w-[150px] h-[150px] p-2 overflow-hidden object-cover rounded-lg" alt="..." />
            </div>
            <div className="flex w-2/3 flex-col p-2 gap-y-2">
                <div className="flex gap-x-2 items-center">
                    <img src="..." alt="" className="h-[20px] w-[20px] rounded-full bg-black" />
                    <p className="">{author}</p>
                </div>
                <div>
                    <h5 className="text-2xl font-bold text-wrap">{title}</h5>
                    <p className="text-lg text-wrap">{description?.split("").splice(0, 50).join("")}...</p>
                </div>
                <div className="flex justify-between" >
                    {/* <span>{author}</span> */}
                    <span>{date}</span>
                    <div className="px-4">
                        <p>view 222</p>
                    </div>
                </div>
                {/* <NavLink to="/" >Go Somewhere</NavLink> */}
            </div>
        </div>
    )
}

export default BlogCard
