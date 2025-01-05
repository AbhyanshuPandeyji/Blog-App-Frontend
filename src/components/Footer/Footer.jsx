import { useEffect, useState } from "react"
import { footerMainAppLinks } from "../../constants/common/FooterDataConstants";
import { NavLink } from "react-router-dom";

// icons
import { FaArrowRight, FaYoutube } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

import { FaInstagramSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


import { FaWhatsappSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


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
        <div className="w-full flex flex-col min-h-[340px] h-fit bg-gray-100 " >
            {/* links section */}
            <div className="flex md:flex-row flex-col justify-center md:gap-y-0 gap-y-10 md:h-4/6 h-fit p-4 w-[80%] mx-auto">
                <div className="flex flex-col md:w-1/3 w-full ">
                    <h2 className="text-2xl font-semibold">Title</h2>
                    <ul className="flex flex-col gap-y-2 mt-6">
                        {footerMainAppLinks && footerMainAppLinks?.map((item, index) => {
                            return (
                                <NavLink key={index} className={`bg-none w-fit font-semibold text-lg transition-all 
                                duration-500 ease-in-out hover:underline`} to={item?.linkTo} >{item?.title}</NavLink>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex flex-col md:w-1/3 w-full ">
                    <h2 className="text-2xl font-semibold">Title</h2>
                    <ul className="flex flex-col gap-y-2 mt-6">
                        {footerMainAppLinks && footerMainAppLinks?.map((item, index) => {
                            return (
                                <NavLink key={index} className={`bg-none w-fit font-semibold text-lg transition-all 
                                duration-500 ease-in-out hover:underline`} to={item?.linkTo} >{item?.title}</NavLink>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex flex-col md:w-1/3 w-full">
                    <h2 className="text-lg font-semibold py-2">Connect with me</h2>
                    {/* newsletter */}
                    <div className="flex flex-col">
                        <p></p>
                        <div className="flex">
                            <input
                                type="email"
                                className='p-2 text-lg w-full border-yellow-400 border-2'
                                placeholder='Email Address'
                            />
                            <button
                                className='flex p-2 px-3 justify-center items-center gap-x-2 bg-yellow-400 w-[120px]'
                                type='button'
                                onClick={() => console.log("submit button is been clicked")}
                            ><span className='text-lg font-semibold'>Submit</span>
                                <span className=''>
                                    <FaArrowRight size={'14px'} />
                                </span></button>
                        </div>
                    </div>
                    {/* social media links */}
                    <div className="flex gap-x-4 py-4 mt-4 px-1">
                        <NavLink className={`bg-none font-semibold text-lg transition-all 
                                duration-500 ease-in-out hover:underline`} to={"https://www.youtube.com"} target="_blank" >
                            <FaYoutube size={"20px"} /></NavLink>
                        <NavLink className={`bg-none font-semibold text-lg transition-all 
                                duration-500 ease-in-out hover:underline`} to={"https://www.twitter.com"} target="_blank" >
                            <FaXTwitter size={"20px"} /></NavLink>
                        <NavLink className={`bg-none font-semibold text-lg transition-all 
                                duration-500 ease-in-out hover:underline`} to={"https://www.linkedin.com"} target="_blank" >
                            <FaLinkedinIn size={"20px"} /></NavLink>
                        <NavLink className={`bg-none font-semibold text-lg transition-all 
                                duration-500 ease-in-out hover:underline`} to={"https://www.instagram.com"} target="_blank" >
                            <AiFillInstagram size={"20px"} /></NavLink>
                        {/* <NavLink className={`bg-none font-semibold text-lg transition-all 
                                duration-500 ease-in-out hover:underline`} to={"/youtube"} ><FaYoutube/></NavLink> */}
                        {/* <i>X</i>
                        <i>instagram</i>
                        <i>linkedin</i> */}
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <span className={`bg-none cursor-pointer font-semibold text-lg transition-all 
                                duration-500 ease-in-out hover:underline`} >Privacy Policy</span>
                        <span className={`bg-none cursor-pointer font-semibold text-lg transition-all 
                                duration-500 ease-in-out hover:underline`} >Terms & Conditions</span>
                    </div>
                </div>
            </div>

            {/* routing section */}
            <div className="md:h-1/6 h-fit bg-yellow-500 p-4">
                <ul className="flex md:flex-row flex-col justify-center items-center md:gap-x-8">
                    {footerMainAppLinks && footerMainAppLinks?.map((item, index) => {
                        return (
                            <NavLink key={index} className={`bg-none w-fit font-semibold text-lg transition-all 
                                duration-500 ease-in-out hover:underline`} to={item?.linkTo} >{item?.title}</NavLink>
                        )
                    })}
                </ul>
            </div>

            {/* copy right section */}
            <div className="md:h-1/6 h-fit w-full bg-gray-100 p-4 text-center">
                &copy; Copyright Abhyanshu Pandey 2024 - {currentYear}
            </div>
        </div>
    )
}

export default Footer