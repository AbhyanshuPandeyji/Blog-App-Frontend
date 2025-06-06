import { NavLink } from 'react-router-dom';
import heroImage1 from '../../assets/images/hero/books.jpg'
import heroImage2 from '../../assets/images/hero/longroad.jpg'
import heroImage3 from '../../assets/images/hero/porche.jpg'
import { FaArrowRight } from "react-icons/fa";


// for hero section images create an box then translate it to the middle size of box then translate from top to middle
// it will work as on top of content as compared to with it or after it or can simply put single colour and the images
// the division of line or either content at some point or another will get distrubed
const HeroSection = () => {
    return (
        <div className="h-[100vh] min-h-fit flex flex-col" >
            <div className="top h-1/2 z-10 gap-y-8 bg-yellow-500" >
                <p className="xl:text-5xl md:text-2xl text-xl lg:font-bold font-semibold w-full xl:w-[60%] mx-auto text-center mt-[50px]"> Hi Its me Abhyanshu , Ready To Begin Your Journey</p>
                <div className='flex justify-center gap-8 mt-[100px] md:w-[80%] w-full mx-auto'>
                    <div className='md:w-1/3 w-full flex justify-center'>
                        <img src={heroImage1} alt="" className='h-[40vh]' />
                        <p></p>
                    </div>
                    <div className='md:w-1/3  lg:flex md:flex hidden justify-center'>
                        <img src={heroImage2} alt="" className='h-[40vh]' />
                        <p></p>
                    </div>
                    <div className='md:w-1/3 lg:flex hidden justify-center'>
                        <img src={heroImage3} alt="" className='h-[40vh]' />
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="relative h-1/2 bg-gray-100 md:p-4" >
                <div className='absolute gap-y-4 p-4 md:gap-x-4 justify-start w-full flex md:flex-row flex-col bottom-10'>
                    <div className='flex justify-center items-center md:w-2/3 w-full'>
                        <input
                            className='p-3 text-lg md:w-[400px] w-full'
                            type="email"
                            placeholder='Email Address'
                        />
                        <button
                            className='flex p-3 justify-center items-center gap-x-2 bg-yellow-400 md:w-[120px] w-fit'
                            type='button'
                            onClick={() => console.log("submit button is been clicked")}
                        >
                            <span className='text-lg font-semibold'>Submit</span>
                            <span className=''>
                                <FaArrowRight size={'14px'} />
                            </span>
                        </button>
                    </div>
                    <NavLink
                        to={"/"}
                        className='flex p-3 justify-center items-center gap-x-2 bg-yellow-400 w-[150px]'
                    >
                        <span className='text-lg font-semibold'>Learn more</span>
                        <span className=''>
                            <FaArrowRight size={'14px'} />
                        </span>
                    </NavLink>
                    {/* <p>Call to action button</p> */}
                </div>
            </div>
        </div>
    )
}

export default HeroSection



// import { FaArrowRight } from "react-icons/fa";
// import heroImage2 from '../../assets/images/hero/longroad.jpg';

// const HeroSection = () => {
//     return (
//         <div
//             className="h-[100vh] min-h-fit flex flex-col items-center relative p-6"
//             style={{
//                 background: 'linear-gradient(to bottom, #FFD700 50%, #FF6347 50%)'
//             }}
//         >
//             {/* Top Text */}
//             <p className="xl:text-5xl md:text-2xl text-xl lg:font-bold font-semibold text-center mt-6">
//                 Hi, It's me Abhyanshu. Ready To Begin Your Journey
//             </p>

//             {/* Image in the Middle */}
//             <div className="top-[20%] relative">
//                 <img
//                     src={heroImage2}
//                     alt="Hero"
//                     className="h-[300px] w-[300px] rounded-full border-4 border-white shadow-xl mt-10"
//                 />
//             </div>

//             {/* Input and Button at the Bottom */}
//             <div className='w-full max-w-md flex flex-col md:flex-row gap-4 mt-auto mb-8'>
//                 <input
//                     className='p-3 text-lg w-full border border-gray-300 rounded-md'
//                     type="email"
//                     placeholder='Email Address'
//                 />
//                 <button
//                     className='flex p-3 justify-center items-center gap-x-2 bg-yellow-400 w-full md:w-[120px] rounded-md hover:bg-yellow-500 transition'
//                     type='button'
//                     onClick={() => console.log("Submit button clicked")}
//                 >
//                     <span className='text-lg font-semibold'>Submit</span>
//                     <FaArrowRight size={'14px'} />
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default HeroSection;
