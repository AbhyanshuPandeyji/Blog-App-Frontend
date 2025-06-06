import React, { useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { NavbarLinks } from '../../constants/common/NavbarDataConstants';
// import logo from "../../assets/images/Deep Work.jpg"
// import { FaRegUserCircle } from "react-icons/fa";
import userphoto from "../../assets/images/person-image.jpg";
import { useSelector } from "react-redux";
// import { UserContext } from '../../context/UserContext';

import "./navbar.scss"


const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchOpen, setSerachOpen] = useState(false);
  // const { user, auth } = useContext(UserContext);
  // const [pageUser, setPageUser] = useState(true)
  const { singleUser } = useSelector((state) => state.user);
  console.log(singleUser)

  /* The `useEffect` hook in the provided code snippet is responsible for fetching user data from the
  local storage and updating the state variable `pageUser` with that data. Here's a breakdown of what
  it does: */
  // useEffect(() => {
  //   const someUser = localStorage.getItem("user");
  //   JSON.parse(someUser)
  //   console.log(someUser)
  //   setPageUser(JSON.parse(someUser))
  // }, [user, auth])

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

    <div className='w-full bg-gray-100'>
      <nav className={`min-h-[80px] h-fit w-full bg-gray-100 text-gray-900 fixed flex z-[999] 
      md:flex-row flex-col  justify-center items-center top-0 left-0 shadow-lg `}>
        {/* <img src={logo} alt="" className='h-[50px] w-[50px] rounded-full' /> */}

        <NavLink className={`bg-none font-semibold text-2xl md:w-1/5 w-full text-center p-4`} to={"/"} >Abhyanshu</NavLink>
        <div className='md:block hidden md:w-3/5 w-full'>
          <ul className='flex justify-center items-center mx-auto p-4 gap-x-[60px]'>
            {NavbarLinks && NavbarLinks?.map((item, index) => {
              return (
                <NavLink key={index} className={`bg-none font-semibold text-lg transition-all 
                  duration-500 ease-in-out hover:underline`} to={item?.linkTo} >{item?.title}</NavLink>
              )
            })}
            {/* <NavLink className={`bg-none font-semibold text-lg transition-all duration-500 ease-in-out hover:underline`} to={"/"} >Home</NavLink>
            <NavLink className={`bg-none font-semibold text-lg transition-all duration-500 ease-in-out hover:underline`} to={"/blog"} >Blogs</NavLink>
            <NavLink className={`bg-none font-semibold text-lg transition-all duration-500 ease-in-out hover:underline`} to={"/"} >Newsletter</NavLink>
            <NavLink className={`bg-none font-semibold text-lg transition-all duration-500 ease-in-out hover:underline`} to={"/"} >Contact</NavLink> */}
            {/* <NavLink className={`bg-none font-semibold text-lg `} >Home</NavLink> */}
          </ul>
        </div>

        <div className='md:w-1/5 w-full lg:block hidden'>
          <div className={`flex justify-center items-center mx-auto p-4 gap-x-[20px]`}>
            {singleUser ?
              (
                <>
                  <NavLink className={`bg-none relative font-semibold select-drop text-lg transition-all duration-500 ease-in-out`} to={"/profile"} >
                    {/* <FaRegUserCircle size={"40px"} /> */}
                    <img src={userphoto} alt="" className='h-[40px] w-[40px]  rounded-full object-cover bg-cover bg-blue-600 ' />
                    {/* <ul className='dropdown'>
                      <li>Profile</li>
                      <li>Creations</li>
                      <li>Revenue</li>
                    </ul> */}
                  </NavLink>
                  <NavLink className={`bg-none font-semibold text-lg bg-yellow-400 px-4 py-2 transition-all duration-500 ease-in-out hover:underline`} to={"/createblog"} >Create</NavLink>
                </>
              ) :
              (
                <>
                  <NavLink className={`bg-none font-semibold text-lg bg-yellow-400 px-4 py-2 transition-all duration-500 ease-in-out hover:underline`} to={"/login"} >Login</NavLink>
                  <NavLink className={`bg-none font-semibold text-lg bg-yellow-400 px-4 py-2 transition-all duration-500 ease-in-out hover:underline`} to={"/register"} >Register</NavLink>
                </>)
            }
            <span onClick={() => setSerachOpen(!searchOpen)} className='cursor-pointer relative'>
              <FaSearch size={"18px"} />
            </span>

            {/* <NavLink className={`bg-none font-semibold text-2xl w-1/5`} to={"/"} >Login</NavLink> */}
          </div>
        </div>

        {searchOpen && (
          <div className='search-input'>
            <input type="text" className='p-2 text-lg input-box border-yellow-400 border-2' placeholder='Search Blog...' />
          </div>
        )}



        {/* mobile view */}
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
            {/* <NavLink
              className={`bg-none font-semibold text-lg transition-allduration-500 ease-in-out `}
              to={"/login"}
            >
              Login
            </NavLink> */}
            {/* <NavLink className={`bg-none font-semibold text-lg `} >Home</NavLink> */}
            {singleUser ?
              (
                <>
                  <NavLink className={`bg-none relative font-semibold select-drop text-lg transition-all duration-500 ease-in-out`} to={"/profile"} >
                    {/* <FaRegUserCircle size={"40px"} /> */}
                    <img src={userphoto} alt="" className='h-[40px] w-[40px]  rounded-full object-cover bg-cover bg-blue-600 ' />
                    {/* <ul className='dropdown'>
                      <li>Profile</li>
                      <li>Creations</li>
                      <li>Revenue</li>
                    </ul> */}
                  </NavLink>
                  <NavLink className={`bg-none font-semibold text-lg bg-yellow-400 px-4 py-2 transition-all duration-500 ease-in-out hover:underline`} to={"/createblog"} >Create</NavLink>
                </>
              ) :
              (
                <>
                  <NavLink className={`bg-none font-semibold text-lg bg-yellow-400 px-4 py-2 transition-all duration-500 ease-in-out hover:underline`} to={"/login"} >Login</NavLink>
                  <NavLink className={`bg-none font-semibold text-lg bg-yellow-400 px-4 py-2 transition-all duration-500 ease-in-out hover:underline`} to={"/register"} >Register</NavLink>
                </>)
            }
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
