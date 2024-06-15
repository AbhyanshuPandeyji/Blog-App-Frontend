// styles import
// import './App.css'
import "react-toastify/dist/ReactToastify.css";

// packages import 
// import { useState } from 'react'

import { ToastContainer } from 'react-toastify';



// component import
import Routing from "./routes/Routing.jsx";
import { Suspense } from "react";


// const ProtectedRoute = ({ children }) => {
//   if (!currentUser) {
//     return <Navigate to="/login" />
//   }

//     // children meaning the component passed inside the protected route
//     // it works as a function , taking the component as an  argument and returning 
//     // based on if the current user exist in local storage , if not then go to login
//     // it doesn't affect or manipulate the component , rather it just  redirects it
//     return children;
// }



// remember only one page can be shown at one link , only number of components can change within it'
// which if not on every page can be put into specific pages , if  needed in every page like navbar , 
// will be put into the layout to render on all the pages , don't think to put 
// multiple components in one , its routing not page rendering , different component can be put into the 
// the main component render on that url / routing link , and can also be used through the stored and saved data
// into the backend to access different routes with different data with stored state

function App() {

  return (
    <>
        <Routing />
        <ToastContainer />
    </>
  )
}

export default App;
