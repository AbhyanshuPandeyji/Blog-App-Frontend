
const SingleBlogPageTitle = ({ authorName, blogDate, blogTitle, children }) => {
    console.log(authorName, "this is the author name in the title page")
    return (
        <div className="flex flex-col p-4" >
            <div className="h-fit flex-wrap text-4xl font-bold uppercase">
                {blogTitle}
            </div>
            <div className="flex" >
                <span className="text-lg font-medium"> {authorName} </span>
                &nbsp;&nbsp; - &nbsp;&nbsp;
                <span className="text-lg italic text-gray-500"> {blogDate} </span>
            </div>
        </div>
    )
}

export default SingleBlogPageTitle