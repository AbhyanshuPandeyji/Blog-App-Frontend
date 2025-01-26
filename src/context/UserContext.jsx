import { createContext, useContext, useEffect, useState } from "react";
import { setStorageItem } from "../utils/storeItems";


export const UserContext = createContext({});

export default function UserProvider({children}){

    const [loginUser , setLoginUser] = useState({});
    const [authUser , setAuthUser] = useState(false);

    if(!loginUser){
        console.log("Data is not present");
    }

    useEffect(()=>{
        setStorageItem("blog-user" , {userdata : loginUser , auth : authUser});
        // localStorage.setItem("user" , JSON.stringify({userdata : user , auth : auth}) || null);
    },[loginUser,authUser])

    return (
        <UserContext.Provider   
            value={{loginUser , setLoginUser , authUser , setAuthUser}}
        >
            {children}
        </UserContext.Provider>
    )
}