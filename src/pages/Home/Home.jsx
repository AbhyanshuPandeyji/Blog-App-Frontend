// // import React from 'react'

import { useContext, useEffect, useState } from "react";
import AboutSection from "../../components/Homepage/AboutSection";
import BlogsSection from "../../components/Homepage/Blog/BlogsSection";
import HeroSection from "../../components/Homepage/HeroSection";
// import LinksSection from "../../components/Homepage/LinksSection";
import Newsletter from "../../components/Homepage/Newsletter";
import { UserContext } from "../../context/UserContext";

// import { useEffect, useMemo, useState } from "react";


// // functions import 
// // import { makeRequest } from "../../axios.js";
// import { useDispatch, useSelector } from "react-redux";
// import { toastify } from "../../utils/toast.js";
// import { createUserThunkMiddleware, getAllUsersThunkMiddleware } from "../../redux/features/UserReducer/UserReducer.js";
// // import { setLoader } from "../../redux/features/Loaders/loaders.js";
// import Loader from "../../utils/Loader.jsx";
// import DataTable from "react-data-table-component";
// import { useForm, Controller } from "react-hook-form";
// import { MoonLoader } from "react-spinners";

// // const axios = createAxios

// const Home = () => {
//   const dispatch = useDispatch();
//   const { allUsers } = useSelector((state) => state.user);
//   const { loader, registerLoader } = useSelector((state) => state.loader);
//   // const usersData = useMemo(()=>{
//   //   data
//   // })

//   // console.log(usersData)

//   // const [data, setData] = useState(null);

//   useEffect(() => {
//     // const response = async () => {
//     //   await axios.get('/user/')
//     //     // response.data is way to fetch data with axios , as res.json() in fetch request
//     //     // we need to always do it in fetch request to set data by response.data
//     //     // on in reducer with axios to set data by assigning it a key with data response.data
//     //     .then((response) => setData(response.data))
//     // }
//     // response();
//     // if (allUser) {
//     //   setData(allUser)
//     //   toastify({ msg: "users Data Has been set", type: "success" })
//     // }
//     // setData(response.data)

//     dispatch(getAllUsersThunkMiddleware())
//     // getAllUsers();

//   }, [dispatch]);

//   useEffect(() => { }, [allUsers])

//   // const getAllUsers = async () => {
//   //   try {
//   //     dispatch(setLoader({ loader: true }))

//   //     // if (loader === true) {
//   //     await dispatch(getAllUser());
//   //     // }
//   //   } catch (error) {
//   //     console.log("error while fetching the users", error)
//   //     // dispatch(setLoader({ loader: false }))
//   //   }
//   //   finally {
//   //     dispatch(setLoader({ loader: false }))
//   //   }

//   // }


//   console.log(allUsers)

//   const columns = [
//     {
//       name: "Name",
//       selector: row => row.name
//     },
//     {
//       name: "Email",
//       selector: row => row.email
//     },
//     {
//       name: "Password",
//       selector: row => row.password
//     }
//   ];

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   // useEffect(() => { }, [allUsers])

//   const userCreateHandler = async (data) => {
//     // try {
//     //   dispatch(setLoader({ registerLoader: true }));
//     //   await dispatch(createUserThunkMiddleware({ data: data }))

//     // } catch (error) {
//     //   toastify({ msg: "Error while creating User", type: "error" })
//     // } finally {
//     //   dispatch(setLoader({ registerLoader: true }));
//     //   reset()
//     // }
//     // console.log(e)
//     // e.preventDefault();
//     // console.log(data);
//     dispatch(createUserThunkMiddleware({ data: data }));
//     reset();
//   }

//   return (
//     <>
//       {loader || allUsers === null && <Loader />}

//       <div className="flex flex-col w-full h-fit">
//         <h1 className="text-2xl font-semibold bg-green-600 px-8 py-4" >Create User</h1>
//         <form onSubmit={handleSubmit(userCreateHandler)} className="flex flex-col bg-gray-200 py-4 gap-y-2">
//           <div className="flex gap-x-4 w-[400px] justify-center items-center">
//             <label htmlFor="name" className="w-1/3">
//               Name
//             </label>
//             <input type="text" className="bg-gray-600 text-white rounded-md w-2/3 p-2" placeholder="name" {...register("name", { required: true })} />
//           </div>
//           <div className="flex gap-x-4 w-[400px] justify-center items-center">
//             <label htmlFor="email" className="w-1/3">
//               Email
//             </label>
//             <input type="text" className="bg-gray-600 text-white rounded-md w-2/3 p-2" placeholder="email" {...register("email", { required: true })} />
//           </div>
//           {/* <div className="flex gap-x-4 w-[400px] justify-center items-center">
//             <label htmlFor="username" className="w-1/3">
//               Username
//             </label>
//             <input type="text" className="bg-gray-600 text-white rounded-md w-2/3 p-2" placeholder="username" {...register("username", { required: true })} />
//           </div> */}
//           <div className="flex gap-x-4 w-[400px] justify-center items-center">
//             <label htmlFor="password" className="w-1/3">
//               Password
//             </label>
//             <input type="text" className="bg-gray-600 text-white rounded-md w-2/3 p-2" placeholder="password" {...register("password", { required: true })} />
//           </div>
//           <button disabled={registerLoader} className="bg-green-600 px-4 py-2 flex justify-center items-center w-[200px] rounded-md" type="submit" >
//             {registerLoader ? <MoonLoader size={"22px"} /> : "Create User"}
//           </button>
//         </form>
//         {/* <div className="flex flex-col">
//           <label htmlFor="name">Name</label><input type="text" {...register} />
//         </div> */}
//       </div>

//       <DataTable
//         columns={columns}
//         data={allUsers ? allUsers : []}
//       />

//       {/* <button onClick={handleClick}>CLick Me</button> */}

//     </>
//   )
// }

// export default Home;


// create a basic blog website first with the cards and all the dynamic stuffs then starts to add the features and advancements
// the specificity and other things - after the admin point is been reached


function Home(){
  const { user , auth } = useContext(UserContext);
  const [newUser , setNewUser] = useState({})

  useEffect(()=>{
    const someUser = localStorage.getItem("user");
    setNewUser(someUser)
  },[user])

  console.log(newUser)

  return (
    <div>
      {/* Homepage */}
      <HeroSection/>
      <AboutSection/>
      <BlogsSection/>
      {/* // this was used to be the blog display section on home page for avoiding confusions */}
      {/* <LinksSection/> */}
      <Newsletter/>
    </div>
  )
}

export default Home;