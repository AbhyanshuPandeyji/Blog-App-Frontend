import { format } from "date-fns"



const SingleBlogPageTitle = ({ authorName, blogDate, blogTitle, children }) => {
    // console.log(authorName, "this is the author name in the title page");

    const handleDate = (dateBlog) => {
        // Parse the ISO string into a Date object
        const parsedDate = new Date(dateBlog);

        // Check if the date is valid
        if (isNaN(parsedDate)) {
            console.error("Invalid date", dateBlog);
            return "Invalid date"; // Return a fallback value in case of invalid date
        }

        // Correct date format string to "dd-MM-yyyy"
        const formattedDate = format(parsedDate, "dd-MM-yyyy");
        return formattedDate;
    }



    return (
        <div className="flex flex-col p-4" >
            <div className="h-fit flex-wrap text-4xl font-bold uppercase">
                {blogTitle}
            </div>
            <div className="flex" >
                <span className="text-lg font-medium"> {authorName} </span>
                &nbsp;&nbsp; - &nbsp;&nbsp;
                <span className="text-lg italic text-gray-500"> {handleDate(blogDate)} </span>
            </div>
        </div>
    )
}

export default SingleBlogPageTitle