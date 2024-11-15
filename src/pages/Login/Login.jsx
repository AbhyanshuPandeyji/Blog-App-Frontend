import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

// functions import 
// import { makeRequest } from "../../axios.js";
import { useDispatch, useSelector } from "react-redux";
import { toastify } from "../../utils/toast.js";
// import { createUserThunkMiddleware, getAllUsersThunkMiddleware } from "../../redux/features/UserReducer/UserReducer.js";
// import { setLoader } from "../../redux/features/Loaders/loaders.js";
import Loader from "../../utils/Loader.jsx";
import DataTable from "react-data-table-component";
import { useForm, Controller } from "react-hook-form";
import { MoonLoader } from "react-spinners";
import { loginUserThunkMiddleware } from "../../redux/features/UserReducer/UserReducer.js";
import { getStorageItem } from "../../utils/storeItems.js";
import { jwtDecode } from "jwt-decode";

const Login = () => {
    const dispatch = useDispatch();
    // const { allUsers } = useSelector((state) => state.user);
    const { loader, loginLoader } = useSelector((state) => state.loader);
    // const usersData = useMemo(()=>{
    //   data
    // })

    // console.log(usersData)

    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     // dispatch(getAllUsersThunkMiddleware())

    // }, [dispatch]);

    // useEffect(() => { }, [allUsers])

    // const getAllUsers = async () => {
    //   try {
    //     dispatch(setLoader({ loader: true }))

    //     // if (loader === true) {
    //     await dispatch(getAllUser());
    //     // }
    //   } catch (error) {
    //     console.log("error while fetching the users", error)
    //     // dispatch(setLoader({ loader: false }))
    //   }
    //   finally {
    //     dispatch(setLoader({ loader: false }))
    //   }

    // }


    // console.log(allUsers)

    // const columns = [
    //     {
    //         name: "Name",
    //         selector: row => row.name
    //     },
    //     {
    //         name: "Email",
    //         selector: row => row.email
    //     },
    //     {
    //         name: "Password",
    //         selector: row => row.password
    //     }
    // ];

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // useEffect(() => { }, [allUsers])

    const userLoginHandler = async (data) => {
        dispatch(loginUserThunkMiddleware({ data: data }));
        reset();
    }

    // useEffect(() => {
    //     const response = dispatch(getStorageItem());
    //     if (response) {
    //         console.log("response of local stored token", response)
    //     }
    // }, [])

    // const handleUserToken = async () => {
    //     const user = localStorage.getItem('blog-user');
    //     const decodedUser = await jwtDecode(user)
    //     console.log("user in frontend token", decodedUser)
    // }

    return (
        <>
            <div className="w-full min-h-[100vh]">
                <div className="flex justify-center items-center w-full h-[90vh]">
                    <div className="flex flex-col rounded-lg shadow-lg">
                        <h1 className="text-2xl font-semibold  rounded-t-lg text-center p-4 py-6 bg-yellow-400" >Login User</h1>
                        <form onSubmit={handleSubmit(userLoginHandler)} className="flex flex-col w-fit h-[30vh] gap-y-4 justify-center items-center p-4 py-8">
                            {/* <div className="flex flex-col items-center gap-x-4 w-[400px]">
                                <label htmlFor="name" className="w-1/3">
                                    Name
                                </label>
                                <input type="text" className="bg-gray-300 text-white rounded-md w-2/3 p-2" placeholder="Name" {...register("name", { required: true })} />
                            </div> */}
                            <div className="flex flex-col gap-x-4 items-center w-[400px]">
                                {/* <label htmlFor="email" className="w-1/3">
                                    Email
                                </label> */}
                                <input type="text" className="bg-gray-300 text-white rounded-md w-2/3 p-2" placeholder="Email" {...register("email", { required: true })} />
                            </div>
                            <div className="flex flex-col items-center gap-x-4 w-[400px]">
                                {/* <label htmlFor="password" className="w-1/3">
                                    Password
                                </label> */}
                                <input type="text" className="bg-gray-300 text-white rounded-md w-2/3 p-2" placeholder="Password" {...register("password", { required: true })} />
                            </div>
                            <button disabled={loginLoader} className="bg-yellow-400 text-lg font-semibold px-4 py-2 my-4 flex 
                            justify-center items-center w-[200px] rounded-md" type="submit" >
                                {loginLoader ? <MoonLoader size={"22px"} /> : "Login"}
                            </button>
                        </form>
                        <p>Dont Have an account ? <NavLink >Signup</NavLink></p>
                    </div>
                </div>
            </div>



            {/* <DataTable
                columns={columns}
                data={allUsers ? allUsers : []}
            /> */}
            {/* <button onClick={handleUserToken} >get token in local storage</button> */}
        </>
    )
}

export default Login;

