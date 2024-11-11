import heroImage1 from '../../assets/images/hero/books.jpg'
import heroImage2 from '../../assets/images/hero/longroad.jpg'
import heroImage3 from '../../assets/images/hero/porche.jpg'


const HeroSection = () => {
    return (
        <div className="h-[100vh] flex flex-col bg-blue-100" >
            <div className="top h-1/2 z-10 gap-y-8" >
                <p className="text-6xl text-bold w-[60%] mx-auto text-center mt-[50px]"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis alias </p>
                <div className='flex justify-center gap-8 mt-[120px] w-[80%] mx-auto'>
                    <div className='w-1/3 flex justify-center'>
                        <img src={heroImage1} alt="" className='h-[400px]' />
                        <p></p>
                    </div>
                    <div className='w-1/3 flex justify-center'>
                        <img src={heroImage2} alt="" className='h-[400px]' />
                        <p></p>
                    </div>
                    <div className='w-1/3 flex justify-center'>
                        <img src={heroImage3} alt="" className='h-[400px]' />
                        <p></p>
                    </div>
                </div>
            </div>
            <div className=" relative h-1/2 bg-green-100 p-4" >
                <div className='absolute  gap-x-4 justify-center w-full flex bottom-10'>
                    <p>Email section</p> 
                    <p>Call to action button</p>
                </div>
            </div>  
        </div>
    )
}

export default HeroSection