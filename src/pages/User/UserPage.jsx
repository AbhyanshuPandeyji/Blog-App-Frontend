import { UserPageData } from "../../constants/UserPage/UserPageConstants"
import userImage from "../../assets/images/person-image.jpg"

// how much and what kind of information the user profile page contains , 

const UserPage = () => {
    return (
        <div className="min-h-screen h-fit w-full flex lg:flex-row flex-col p-10">
            {/* profile display - work as a card */}
            <div className="card w-1/2 min-h-screen h-fit bg-gray-200 gap-y-10 flex flex-col p-4">
                <h2 className="title text-6xl font-semibold text-center w-full">User&apos;s Profile</h2>
                <div className="flex flex-col gap-4 w-full justify-center items-center">
                    <img src={userImage} alt="" className="md:w-[350px] h-[350px] object-cover" />
                    <div className="information">
                        <ul className="flex flex-col">
                            {
                                UserPageData && UserPageData.map((item, index) => {
                                    return (
                                        <li key={index} className="flex">
                                            <span className="text-lg font-semibold min-w-fit w-[120px]
                                             bg-gray-200 h-fit text-wrap">{item?.title}</span>
                                            <span className="font-normal first-letter:uppercase h-fit text-wrap">{item?.data}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

            {/* profile edit section */}
            <div >

            </div>
        </div>
    )
}

export default UserPage