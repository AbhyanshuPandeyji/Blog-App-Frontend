import { useEffect, useState } from "react"

const Footer = () => {

    const [currentYear, setCurrentYear] = useState()

    const handleCurrentYear = () => {
        const d = new Date();
        const year = d.getFullYear()
        // console.log(year)
        setCurrentYear(year)
        // return year
    }

    useEffect(() => {
        handleCurrentYear();
    }, [])

    // handleCurrentYear();

    return (
        <div className="w-full flex flex-col min-h-[400px] h-fit  bg-yellow-100">
            {/* links section */}
            <div className="flex md:flex-row flex-col justify-center md:gap-y-0 gap-y-10 h-4/6 p-4 bg-red-100 w-[80%] mx-auto">
                <div className="flex flex-col md:w-1/3 w-full ">
                    <h2 className="text-2xl font-semibold">Title</h2>
                    <ul>
                        <li>Link1</li>
                        <li>Link2</li>
                        <li>Link3</li>
                        <li>Link4</li>
                    </ul>
                </div>
                <div className="flex flex-col md:w-1/3 w-full ">
                    <h2 className="text-2xl font-semibold">Title</h2>
                    <ul>
                        <li>Link1</li>
                        <li>Link2</li>
                        <li>Link3</li>
                        <li>Link4</li>
                    </ul>
                </div>
                <div className="flex flex-col md:w-1/3 w-full">
                    {/* newsletter */}
                    <div className="flex flex-col">
                        <p></p>
                        <div className="flex">
                            <input type="email" placeholder="Get linked with me..." /><button>Submit</button>
                        </div>
                    </div>
                    {/* social media links */}
                    <div>
                        <i>Youtube</i>
                        <i>X</i>
                        <i>instagram</i>
                        <i>linkedin</i>
                    </div>
                </div>
            </div>

            {/* routing section */}
            <div className="h-1/6">
                <ul className="flex justify-center gap-x-4 p-4">
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
                    <li>Link4</li>
                </ul>
            </div>

            {/* copy right section */}
            <div className="h-1/6 w-full text-center">
                &copy; Copyright Abhyanshu Pandey 2024 - {currentYear}
            </div>
        </div>
    )
}

export default Footer