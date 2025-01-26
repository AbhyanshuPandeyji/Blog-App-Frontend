import { UserPageData } from "../../constants/UserPage/UserPageConstants"
import userImage from "../../assets/images/person-image.jpg"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getStorageItem } from "../../utils/storeItems"

// how much and what kind of information the user profile page contains , 

const UserPage = () => {

    const { user } = useSelector((state) => state.user)

    useEffect(() => {
        // const data = getStorageItem("blog-user");
        // console.log(data)
    }, [user]);

    console.log(user);
    // localstorage or redux both will work exactly the same. still havent tried the context method which can also 
    // help to identify what to save and what to provide for local storage to save. Specifically. 
    // console.log(JSON.parse(localStorage.getItem("blog-user")))

    return (
        <div className="min-h-screen h-fit flex lg:flex-row flex-col section-padding my-10">
            {/* profile display - work as a card */}
            <div className="card w-1/2 min-h-screen w-fit h-fit bg-gray-200 gap-y-10 flex flex-col p-4">
                <h2 className="title text-6xl font-semibold text-center w-full">User&apos;s Profile</h2>
                <div className="flex flex-col gap-4 w-full justify-center items-center">
                    <img src={userImage} alt="" className="md:w-[350px] h-[350px] object-cover" />
                    <div className="information">
                        <ul className="flex flex-col">
                            {/* {
                                UserPageData && UserPageData.map((item, index) => {
                                    return (
                                        <li key={index} className="flex">
                                            <span className="text-lg font-semibold min-w-fit w-[120px]
                                             bg-gray-200 h-fit text-wrap">{item?.title}</span>
                                            <span className="font-normal first-letter:uppercase h-fit text-wrap">{item?.data}</span>
                                        </li>
                                    )
                                })
                            } */}

                            <li className="flex">
                                <span
                                    className="text-lg font-semibold min-w-[120px] w-fit
                                bg-gray-200 h-fit text-wrap"
                                >
                                    {`Name`}
                                </span>
                                <span className="font-normal first-letter:uppercase h-fit text-wrap">
                                    {user?.name}
                                </span>
                            </li>
                            <li className="flex">
                                <span
                                    className="text-lg font-semibold min-w-[120px] w-fit
                                bg-gray-200 h-fit text-wrap"
                                >
                                    {`Email`}
                                </span>
                                <span className="font-normal first-letter:uppercase h-fit text-wrap">
                                    {/* {user?.email ? '*'.repeat(user.email.slice(0, user.email.length - 4)) + user?.email.slice(user.email.slice(user.email.length - 4)) : ''} */}
                                    {user?.email}
                                </span>
                            </li>
                            <li className="flex">
                                <span
                                    className="text-lg font-semibold min-w-[120px] w-fit
                                bg-gray-200 h-fit text-wrap"
                                >
                                    {/* {user?.password.toString().slice(0,10)} */}
                                    {`Password`}
                                </span>
                                <span className="font-normal first-letter:uppercase h-fit text-wrap">
                                    {user?.password ? '*'.repeat(user.password.slice(0, 10).length) : ''}
                                </span>
                            </li>
                            <li className="flex">
                                <span
                                    className="text-lg font-semibold min-w-[120px] w-fit
                                bg-gray-200 h-fit text-wrap"
                                >
                                    {`Username`}
                                </span>
                                <span className="font-normal first-letter:uppercase h-fit text-wrap">{user?.username}</span>
                            </li>
                            <li className="flex">
                                <span
                                    className="text-lg font-semibold min-w-[120px] w-fit
                                bg-gray-200 h-fit text-wrap"
                                >
                                    {`Joined`}
                                </span>
                                <span className="font-normal first-letter:uppercase h-fit text-wrap">{user?.createdAt}</span>
                            </li>
                            {/* <li></li>
                            <li></li>
                            <li></li>
                            <li></li> */}
                            {/* // <li key={index} className="flex">
                                //     <span className="text-lg font-semibold min-w-fit w-[120px]
                                //              bg-gray-200 h-fit text-wrap">{item?.title}</span>
                                //     <span className="font-normal first-letter:uppercase h-fit text-wrap">{item?.data}</span>
                                // </li> */}

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