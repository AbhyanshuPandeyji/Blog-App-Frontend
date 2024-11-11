import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";
// import logo from "../../assets/images/Deep Work.jpg"



const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  // const [show, setShow] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // const controlNavbar = () => {
  //   if (typeof window !== 'undefined') {
  //     if (window.scrollY > lastScrollY) {
  //       // if scroll down hide the navbar
  //       setShow(false);
  //     } else {
  //       // if scroll up show the navbar
  //       setShow(true);
  //     }
  //     setLastScrollY(window.scrollY);
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', controlNavbar);

  //     // cleanup function
  //     return () => {
  //       window.removeEventListener('scroll', controlNavbar);
  //     };
  //   }
  // }, [lastScrollY]);

  // ${show ? 'block transition-all duration-500 ease-in-out' : 'hidden transition-all duration-500 ease-in-out'}
  return (
    <nav className={`h-[80px] min-h-fit w-full bg-gray-100 text-gray-900 fixed flex z-[999] 
    flex-col justify-center items-center top-0 left-0 shadow-lg `}>
      {/* <img src={logo} alt="" className='h-[50px] w-[50px] rounded-full' /> */}
      <div className='md:block hidden w-3/4'>
        <ul className='flex justify-center mx-auto p-4 gap-x-[60px] '>
          <NavLink className={`bg-none font-semibold text-lg transition-all duration-500 ease-in-out hover:underline`} to={"/"} >Home</NavLink>
          <NavLink className={`bg-none font-semibold text-lg transition-all duration-500 ease-in-out hover:underline`} to={"/blog"} >Blog</NavLink>
          <NavLink className={`bg-none font-semibold text-lg transition-all duration-500 ease-in-out hover:underline`} to={"/login"} >Login</NavLink>
          {/* <NavLink className={`bg-none font-semibold text-lg `} >Home</NavLink> */}
        </ul>
      </div>

      <div className='md:hidden block absolute top-5 right-5'>
        {
          !isNavOpen ? <GoSidebarExpand className='text-3xl' onClick={() => setIsNavOpen(true)} /> : <GoSidebarCollapse className='text-3xl' onClick={() => setIsNavOpen(false)} />
        }
      </div>

      <div className={` ${isNavOpen ? "block" : "hidden"} h-full`}>
        <ul className='justify-center w-full flex-col flex gap-y-2 p-2 transition-all mx-auto duration-500 ease-in-out'>
          <NavLink
            className={`bg-none font-semibold text-lg transition-allduration-500 ease-in-out `}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={`bg-none font-semibold text-lg transition-allduration-500 ease-in-out `}
            to={"/blog"}
          >
            Blog
          </NavLink>
          <NavLink
            className={`bg-none font-semibold text-lg transition-allduration-500 ease-in-out `}
            to={"/login"}
          >
            Login
          </NavLink>
          {/* <NavLink className={`bg-none font-semibold text-lg `} >Home</NavLink> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
