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
const Home = lazy(()=> import("../pages/Home/Home.jsx"));


// in the other app instead of providing the router provider its using the browser router , which is the main component to show the
// routes in the app , in the main file , so it doesn't need to explicitly say router provider it can directly uses the routes and the children elements
const Routing = () => {
  const Layout = () => {

    return (
      <div className="">
        <Navbar />
        <Outlet />
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
        // {
        //   path: "/blog",
        //   element: <BlogCardGrid />
        // }
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
    <Suspense fallback={<Loader/>} >
      <RouterProvider router={router} />
    </Suspense>
  )

}

export default Routing;
