// clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
import aboutImage from '../../assets/images/hallway.jpg'

const AboutSection = () => {
  return (
    <div className="min-h-[80vh] h-fit my-20">
        {/* title */}
        <div className="text-6xl text-center w-full ">Hi, I'm <span className="underline">Abhyanshu Pandey</span></div>
        <div className="w-[70%] mx-auto my-10 flex">
            {/* left side */}
            <div className="relative flex flex-col text-2xl top-[80px] text-start w-1/2 px-2 gap-y-8 ">
                <p>Hi i am person who is full of life and passion and who works on his craft every day</p>
                <hr />
                <p>Be the part of my journey to reach the enternal life</p>
                <hr />
                <p>Which is to live the life itself</p>
                <button>
                    
                </button>
            </div>
            {/* right side */}
            <div className="w-1/2 flex justify-end items-center relative top-[40px]">
                {/* <img src={aboutImage} alt="" className='h-[400px] w-[250px] about-image ' /> */}
                <img src={aboutImage} alt="" className='h-[400px] w-[250px]' />
            </div>
        </div>
        {/* mid section - two sides evenly divided , either with photo or with without */}
        {/* action buttons */}
    </div>
  )
}

export default AboutSection