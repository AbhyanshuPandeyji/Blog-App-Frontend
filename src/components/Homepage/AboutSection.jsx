// clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
import aboutImage from '../../assets/images/treesglow.jpg'
import { FaArrowRight } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="min-h-[100vh] h-fit my-20">
      {/* title */}
      <div className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl
       flex md:flex-row flex-col justify-center text-center w-full font-semibold ">
        Hi, I'm &nbsp; <span className="underline">Abhyanshu Pandey</span>
      </div>
      <div className=" w-full mx-auto my-10 flex  md:flex-row flex-col md:p-0 p-4">
        {/* left side */}
        <div className="relative flex flex-col md:text-2xl sm:text-xl text-lg md:top-[80px] text-start md:w-1/2 w-full px-2 md:gap-y-8 gap-y-4 ">
          <p>Hi i am person who is full of life and passion and who works on his craft every day</p>
          <hr />
          <p>Be the part of my journey to reach the enternal life</p>
          <hr />
          <p>Which is to live the life itself</p>
          <button
            className='flex md:p-3 p-2 justify-center items-center gap-x-2 bg-yellow-400 w-fit'
            type='button'
            onClick={() => console.log("submit button is been clicked")}
          >
            <span className='md:text-lg font-semibold'>About Me</span>
            <span className=''>
              <FaArrowRight size={'14px'} />
            </span>
          </button>
        </div>
        {/* right side */}
        <div className="md:w-1/2 flex md:justify-end justify-center items-center relative top-[40px]">
          {/* <img src={aboutImage} alt="" className='h-[400px] w-[250px] about-image ' /> */}
          <img src={aboutImage} alt="" className='md:h-[500px] h-full md:w-[600px] w-full' />
        </div>
      </div>
      {/* mid section - two sides evenly divided , either with photo or with without */}
      {/* action buttons */}
    </div>
  )
}

export default AboutSection