import { Link, NavLink } from "react-router-dom"


const BlogCard = ({ img, title, description, date, author }) => {
    return (
        <div className="mx-auto w-[94%] min-h-[200px] h-fit flex bg-blue-200 rounded-lg overflow-hidden">
            <div className="w-1/3">
                <img src={img} className="w-[200px] h-[200px] p-2 overflow-hidden rounded-lg" alt="..." />
            </div>
            <div className="flex w-2/3 flex-col justify-around gap-y-4 p-2 px-4">
                <h5 className="text-2xl">{title}</h5>
                <p className="text-lg">{description?.split("").splice(0, 100).join("")}...</p>
                <div className="flex justify-between" >
                    <span>{author}</span>
                    <span>{date}</span>
                </div>
                {/* <NavLink to="/" >Go Somewhere</NavLink> */}
            </div>
        </div>
    )
}

export default BlogCard
