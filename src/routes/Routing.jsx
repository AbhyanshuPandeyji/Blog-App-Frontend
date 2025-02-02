import React, { Suspense, lazy, useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  Navigate,
  useNavigate,
  NavLink,
  useParams,
  useLocation

} from "react-router-dom";

import { FaPenFancy } from "react-icons/fa6";

// components import 
// import Home from "../pages/Home/Home.jsx";
import Loader from '../utils/Loader.jsx';
import {Login ,  Register } from '../pages/Login/Login.jsx';
import BlogCard from '../components/Blog/BlogCard.jsx';
import Footer from '../components/Footer/Footer.jsx';
import LoginPage from '../pages/Login/LoginPage.jsx';
import SingleBlogPage from '../components/Blog/SingleBlog/SingleBlogPage.jsx';
import CreateBlogProvider from '../context/CreateBlogContext.jsx';
const Navbar = lazy(() => import("../components/navbar/Navbar.jsx"));
const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Blogs = lazy(() => import("../pages/Blogs/Blogs.jsx"));
// const FeatureBlog = lazy(() => import("../components/Blog/FeatureBlogs.jsx"));
const UserPage = lazy(() => import("../pages/User/UserPage.jsx"));
const CreateBlogPage = lazy(() => import("../components/Blog/CreateBlog/CreateBlogPage.jsx"))
const Admin = lazy(() => import("../components/Admin/Admin.jsx"))
const About = lazy(() => import("../pages/About/about.jsx"))
const Contact = lazy(() => import("../pages/Contact/Contact.jsx"))



// in the other app instead of providing the router provider its using the browser router , which is the main component to show the
// routes in the app , in the main file , so it doesn't need to explicitly say router provider it can directly uses the routes and the children elements
// main component
const Routing = () => {

  const [locationOfPage, setLocationOfPage] = useState("");
  // const {user} = 


  useEffect(() => {
    const page = window.location;
    setLocationOfPage(page)
    // const user = localStorage.getItem("user");
  }, []);

  // const navigate = useNavigate();

  // const params = window.location.pathname;
  // console.log(params)

  const params = useParams();

  // useEffect(()=>{
  //   console.log(locationOfPage)
  // },[window.location , locationOfPage]);


  const userLogin = false;
  const Layout = () => {
    // const navigate = useNavigate()
    return (
      <div className="min-h-screen h-fit relative">
        {
          userLogin === true ? (
            <NavLink to={"/createblog"} className='p-2 rounded-full 
            bg-red-600 fixed z-[999] bottom-[50px] right-[50px]'>Goat</NavLink>
          ) : ""
        }
        <Navbar />
        <div className='relative top-[80px] left-0'>
          <div className='min-h-[100vh] w-full'>
            {/* <div className='absolute'>
              <div className='absolute z-[10] right-10 bottom-10'>
                {locationOfPage.includes("createblog") ? "" : (
                  <div onClick={()=>navigate("/createblog")} className='bg-yellow-400 p-4 rounded-full'>
                    <FaPenFancy className='text-white text-xl' />
                  </div>
                )}
              </div>
            </div> */}
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    )
  };



  // in this
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Layout />),
      // these are the components that are going to pass in the layout to render in outlet
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/login",
          // element: <LoginPage />
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/profile",
          element: <UserPage />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/blog",
          element:
            <Blogs />
          // this children system is not working
          // children: [
          //   {
          //     path: "/blog/feature",
          //     element: <FeatureBlog />
          //   }
          // ]
        },

        {
          path: "/blog/singleblog/:id",
          element: <SingleBlogPage />
        },
        {
          path: "/createblog",
          element: <CreateBlogPage />
        },
        {
          path: "/admin",
          element: <Admin />
        }
      ]
    },
    // {
    //   path: "/Login",
    //   element: <Login />
    // },
    // {
    //   path: "/register",
    //   element: <Register />
    // },
  ])


  return (
    <Suspense fallback={<Loader />} >
      <RouterProvider router={router} />
    </Suspense>
  )

}

export default Routing;
