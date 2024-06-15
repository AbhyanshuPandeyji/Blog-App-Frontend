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
import Home from "../pages/Home/Home.jsx";
import Navbar from "../components/navbar/Navbar.jsx"
// import BlogCardGrid from '../components/Blog/BlogCardGrid.jsx';
const BlogCardGrid = lazy(() => import("../components/Blog/BlogCardGrid.jsx"));
import Login from '../pages/Login/Login.jsx';
import Register from '../pages/Register/Register.jsx';

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


  // in this routing the children are used to pass in the every page 
  // the navbar and footer will be present on the every page because its been in the layout 
  // children works as the inner component of the main url path and not the separate path , so for separate 
  // path create new one with path and for the nested component page create children's inside it
  // ok the different routing can be defined but the main path and element is the one which will be the first 
  // element which will render on every reload , 
  // now the inner elements should be dependent of the top layer element , the child path and elements will only be
  // render after first element is able
  // and the component in the other app used the layout inside the component instead of routing here , that can work as well 
  // as when doing the other ones , where outlet is for rendering the inner child component can be just used to pass
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
          path: "/blog",
          element: (
            <Suspense fallback={<div>Please Wait....</div>} >
              <BlogCardGrid />
            </Suspense>
          )
        }
      ]
    },
    {
      path: "/Login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
  ])


  return (<RouterProvider router={router} />)

}

export default Routing;
