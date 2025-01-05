import React, { Suspense, lazy, useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  Navigate,
  useNavigate,
  NavLink

} from "react-router-dom";

import { FaPenFancy } from "react-icons/fa6";

// components import 
// import Home from "../pages/Home/Home.jsx";
import Loader from '../utils/Loader.jsx';
import Login from '../pages/Login/Login.jsx';
import BlogCard from '../components/Blog/BlogCard.jsx';
import Footer from '../components/Footer/Footer.jsx';
import LoginPage from '../pages/Login/LoginPage.jsx';
import SingleBlogPage from '../components/Blog/SingleBlog/SingleBlogPage.jsx';
import CreateBlogProvider from '../context/CreateBlogContext.jsx';
const Navbar = lazy(() => import("../components/Navbar/Navbar.jsx"));
const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Blogs = lazy(() => import("../pages/Blogs/Blogs.jsx"));
// const FeatureBlog = lazy(() => import("../components/Blog/FeatureBlogs.jsx"));
const UserPage = lazy(() => import("../pages/User/UserPage.jsx"));
const CreateBlogPage = lazy(() => import("../components/Blog/CreateBlog/CreateBlogPage.jsx"))
const Admin = lazy(() => import("../components/Admin/Admin.jsx"))



// in the other app instead of providing the router provider its using the browser router , which is the main component to show the
// routes in the app , in the main file , so it doesn't need to explicitly say router provider it can directly uses the routes and the children elements
// main component
const Routing = () => {

  const [locationOfPage, setLocationOfPage] = useState("");
  // const {user} = 

  useEffect(() => {
    const page = window.location.href;
    setLocationOfPage(page)
    // const user = localStorage.getItem("user");
  }, []);

  // const navigate = useNavigate();


  const Layout = () => {
    // const navigate = useNavigate()
    return (
      <div className="min-h-screen">
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
          element: <LoginPage />
        },
        {
          path: "/register",
          element: <LoginPage />
        },
        {
          path: "/profile",
          element: <UserPage />
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
