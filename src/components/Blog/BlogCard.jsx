import { Link, NavLink } from "react-router-dom"


const BlogCard = ({img , title , description}) => {
    return (
        <div>
            <div className="w-full h-[300px] bg-blue-800">
                <img src={img} className="card-img-top w-[30%] h-[200px]" alt="..."/>
                    <div className="card-body">
                        <h5 className="text-2xl">{title}</h5>
                        <p className="text-lg">{description}</p>
                        <NavLink to="/" >Go Somewhere</NavLink>
                    </div>
            </div>
        </div>
    )
}

export default BlogCard
