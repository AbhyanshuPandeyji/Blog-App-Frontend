import { useContext, useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { yupResolver } from '@hookform/resolvers/yup';
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
import { createUserThunkMiddleware, loginUserThunkMiddleware } from "../../redux/features/UserReducer/UserReducer.js";
import { getStorageItem } from "../../utils/storeItems.js";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "../../context/UserContext.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "../../constants/Validation/validation.js";
import { setLoader } from "../../redux/features/Loaders/loaders.js";

export const Login = () => {
    const dispatch = useDispatch();
    // const { allUsers } = useSelector((state) => state.user);
    const { loader, loginLoader } = useSelector((state) => state.loader);
    // const { loginUser, setLoginUser, authUser, setAuthUser } = useContext(UserContext);
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

    const naviagte = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema)
    });

    // useEffect(() => { }, [allUsers])



    const userLoginHandler = async (data) => {
        // console.log("login data", data)
        try {
            dispatch(setLoader({ loginLoader: true }))
            // if using call back the call back has to be a value , outherwise it will be undefined.
            dispatch(loginUserThunkMiddleware({ data: data },
                (error) => {
                    if (!error) {
                        naviagte("/profile")
                    }
                }
            ));
            // console.log("does data comes from the reducer", resp.data)
            // if (resp === 200) {
            // naviagte("/profile");
            // toastify({ msg: response.data.message, type: "success" });
            // }
        } catch (error) {
            if (error.response?.data) {
                toastify({ msg: error.response.data.message, type: "error" });
            } else {
                toastify({ msg: error.message, type: "error" });
            }
        } finally {
            reset();
            dispatch(setLoader({ loginLoader: false }))
        }
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
            <div className="w-full min-h-[100vh] h-fit flex justify-center items-center ">
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
                            <input
                                type="text"
                                className=" text-xl rounded-md w-2/3 p-2 border-b-2 border-yellow-400"
                                placeholder="Email"
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div className="flex flex-col items-center gap-x-4 w-[400px]">
                            {/* <label htmlFor="password" className="w-1/3">
                                    Password
                                </label> */}
                            <input
                                type="text"
                                className=" text-xl rounded-md w-2/3 p-2 border-b-2 border-yellow-400"
                                placeholder="Password"
                                {...register("password", { required: true })}
                            />
                        </div>
                        <button disabled={loginLoader} className="bg-yellow-400 text-lg font-semibold px-4 py-2 my-4 flex 
                            justify-center items-center w-[66%] rounded-md" type="submit" >
                            {loginLoader ? <MoonLoader size={"22px"} /> : "Login"}
                        </button>
                    </form>
                    <p className="p-4 text-xl font-semibold text-center">Dont Have an account ? <NavLink className={`text-xl text-blue-500`} to={"/register"} >Signup</NavLink></p>
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

// export default Login;


export const Register = () => {
    const dispatch = useDispatch();
    // const { allUsers } = useSelector((state) => state.user);
    const { loader, registerLoader } = useSelector((state) => state.loader);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema)
    });

    // const { loginUser, setLoginUser, authUser, setAuthUser } = useContext(UserContext);

    const userRegisterHandler = async (data) => {
        // console.log("login data", data)
        try {
            dispatch(setLoader({ registerLoader : true }));
            dispatch(createUserThunkMiddleware({ data: data },
                (error) => {
                    if (!error) {
                        navigate("/profile")
                    }
                }
            ));
            // toastify({ msg: response.data.message, type: "success" });
        }
        catch (error) {
            if (error.response?.data) {
                toastify({ msg: error.response.data.message, type: "error" });
            } else {
                toastify({ msg: error.message, type: "error" });
            }
        }
        finally {
            reset();
            dispatch(setLoader({ registerLoader : false }))
        }
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
            <div className="w-full min-h-[100vh] flex justify-center items-center h-fit">
                {/* <div className="flex h-fit"> */}
                <div className="flex flex-col rounded-lg shadow-lg">
                    <h1 className="text-2xl font-semibold  rounded-t-lg text-center p-4 py-6 bg-yellow-400" >Register User</h1>
                    <form onSubmit={handleSubmit(userRegisterHandler)} className="flex flex-col w-fit min-h-[30vh] h-fit gap-y-4 justify-center items-center p-4 py-8">
                        <div className="flex flex-col items-center gap-x-4 w-[400px]">
                            {/* <label htmlFor="name" className="w-1/3">
                                    Name
                                </label> */}
                            <input
                                type="text"
                                className=" text-xl rounded-md w-2/3 p-2 border-b-2 border-yellow-400"
                                placeholder="Name"
                                {...register("name", { required: true })}
                            />
                            <p>{errors.name && <span>This field is required</span>}</p>
                        </div>
                        <div className="flex flex-col gap-x-4 items-center w-[400px]">
                            {/* <label htmlFor="email" className="w-1/3">
                                    Email
                                </label> */}
                            <input
                                type="text"
                                className=" text-xl rounded-md w-2/3 p-2 border-b-2 border-yellow-400"
                                placeholder="Email"
                                {...register("email", { required: true })}
                            />
                            <p>{errors.email && <span>This field is required</span>}</p>
                        </div>
                        <div className="flex flex-col items-center gap-x-4 w-[400px] ">
                            {/* <label htmlFor="password" className="w-1/3">
                                    Password
                                </label> */}
                            <input
                                type="text"
                                className=" text-xl rounded-md w-2/3 p-2 border-b-2 border-yellow-400"
                                placeholder="Password"
                                {...register("password", { required: true })}
                            />
                            <p>{errors.password && <span>This field is required</span>}</p>
                        </div>
                        <div className="flex flex-col items-center gap-x-4 w-[400px]">
                            {/* <label htmlFor="password" className="w-1/3">
                                    Username
                                </label> */}
                            <input
                                type="text"
                                className=" text-xl rounded-md w-2/3 p-2 border-b-2 border-yellow-400"
                                placeholder="Username"
                                {...register("username", { required: true })}
                            />
                            <p>{errors.username && <span>This field is required</span>}</p>
                        </div>
                        <button disabled={registerLoader} className="bg-yellow-400 text-lg font-semibold px-4 py-2 my-4 flex 
                            justify-center items-center w-[66%] rounded-md" type="submit" >
                            {registerLoader ? <MoonLoader size={"22px"} /> : "Register"}
                        </button>
                    </form>
                    <p className="p-4 text-xl font-semibold text-center"> Have an account ? <NavLink className={`text-xl text-blue-500`} to={"/login"} >Login</NavLink></p>
                </div>
                {/* </div> */}
            </div>



            {/* <DataTable
                columns={columns}
                data={allUsers ? allUsers : []}
            /> */}
            {/* <button onClick={handleUserToken} >get token in local storage</button> */}
        </>
    )
}

