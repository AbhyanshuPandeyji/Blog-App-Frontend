import { Link, NavLink } from "react-router-dom"


// use right prop names for import 
const BlogCard = ({ images, title, description }) => {
    return (
        <div>
            <div className="flex sm:flex-row flex-col w-full h-[300px] text-white bg-blue-800 my-4">
                <img src={images} className="w-1/3" alt="" />
                <div className="card-body p-5 w-2/3">
                    <h5 className="text-2xl">{title}</h5>
                    <p className="text-lg">{description}</p>
                    <NavLink to="/" >Go Somewhere</NavLink>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
