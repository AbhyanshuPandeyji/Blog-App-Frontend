import { newsletterItems } from "../../constants/Homepage/HomepageDataConstants"
import { GiSupersonicArrow } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";



const Newsletter = () => {
    return (
        <div className="md:w-[80%] w-full mx-auto my-20 flex md:flex-row flex-col gap-x-10 bg-gray-100">
            {/* left */}
            <div className="md:w-3/5 w-full p-6 px-10 justify-start flex flex-col gap-y-10 border-r-2 border-l-black">
                <h2 className="text-4xl font-bold">A Simplest way to start Chaning your life and
                    increase your potential through effort</h2>
                <div className="flex flex-col gap-y-4">
                    {newsletterItems?.map((item, index) => {
                        return (
                            <div key={index} className="flex justify-center items-start gap-x-2">
                                <span className="py-2 transform rotate-[-45deg]"><GiSupersonicArrow size={'16px'} /></span>
                                <p className="text-lg italic">
                                    <span className="font-bold underline">{item?.mainTitle}</span>
                                    <span>{item?.theValueOutOfIt}</span>
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* right */}
            <div className="md:w-2/5 w-full p-6 px-10 justify-start  items-center flex flex-col gap-y-8">
                <h2 className="text-4xl font-semibold">Enroll Yourself In the Journey of the High and Mighty testment of your potential</h2>
                <p className="text-lg text-gray-400 mt-20">You can also get weekly email to learn more and easily!</p>

                <input
                    type="email"
                    placeholder="Email Address..."
                    className="w-full p-4 text-lg border-yellow-400 "
                x   />
                <button
                    className='flex p-3 justify-center items-center gap-x-2 bg-yellow-400 w-full'
                    type='button'
                    onClick={() => console.log("newletter button is been clicked")}
                >
                    <span >Submit</span>
                    <span>
                        <FaArrowRight />
                    </span>
                </button>
                <span>Your information is protected and I never spam, ever. You can view my privacy policy here.</span>
            </div>
        </div>
    )
}

export default Newsletter