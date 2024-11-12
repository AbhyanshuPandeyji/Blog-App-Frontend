import { NavLink } from 'react-router-dom';
import heroImage1 from '../../assets/images/hero/books.jpg'
import heroImage2 from '../../assets/images/hero/longroad.jpg'
import heroImage3 from '../../assets/images/hero/porche.jpg'
import { FaArrowRight } from "react-icons/fa";



const HeroSection = () => {
    return (
        <div className="h-[100vh] min-h-fit flex flex-col bg-blue-100" >
            <div className="top h-1/2 z-10 gap-y-8" >
                <p className="xl:text-5xl md:text-2xl text-xl text-bold w-full xl:w-[60%] mx-auto text-center mt-[50px]"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis alias </p>
                <div className='flex justify-center gap-8 mt-[100px] w-[80%] mx-auto'>
                    <div className='md:w-1/3 flex justify-center'>
                        <img src={heroImage1} alt="" className='h-[40vh]' />
                        <p></p>
                    </div>
                    <div className='md:w-1/3 flex justify-center'>
                        <img src={heroImage2} alt="" className='h-[40vh]' />
                        <p></p>
                    </div>
                    <div className='md:w-1/3 flex justify-center'>
                        <img src={heroImage3} alt="" className='h-[40vh]' />
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="relative h-1/2 bg-green-100 md:p-4" >
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