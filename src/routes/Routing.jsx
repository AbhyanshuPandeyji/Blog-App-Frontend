import React, { Suspense, lazy } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  Navigate

} from "react-router-dom";


// components import 
// import Home from "../pages/Home/Home.jsx";
import Navbar from "../components/navbar/Navbar.jsx"
import Loader from '../utils/Loader.jsx';
import Login from '../pages/Login/Login.jsx';
import BlogCard from '../components/Blog/BlogCard.jsx';
import Footer from '../components/Footer/Footer.jsx';
import LoginPage from '../pages/Login/LoginPage.jsx';
const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Blogs = lazy(() => import("../pages/Blogs/Blogs.jsx"));
// const FeatureBlog = lazy(() => import("../components/Blog/FeatureBlogs.jsx"));
const UserPage = lazy(()=> import("../pages/User/UserPage.jsx"))


// in the other app instead of providing the router provider its using the browser router , which is the main component to show the
// routes in the app , in the main file , so it doesn't need to explicitly say router provider it can directly uses the routes and the children elements
const Routing = () => {
  const Layout = () => {

    return (
      <div className="relative min-h-screen">
        <Navbar />
        <div className='relative top-[80px]'>
          <div className='min-h-[100vh] mb-[100px]'>
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
          element: <Blogs />,
          // this children system is not working
          // children: [
          //   {
          //     path: "/blog/feature",
          //     element: <FeatureBlog />
          //   }
          // ]
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
