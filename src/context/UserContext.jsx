import { createContext, useContext, useEffect, useState } from "react";


export const UserContext = createContext({});

export default function UserProvider({children}){

    const [user , setUser] = useState({});
    const [auth , setAuth] = useState(false);

    if(!user){
        console.log("Data is not present");
    }

    useEffect(()=>{
        localStorage.setItem("user" , JSON.stringify({userdata : user , auth : auth}) || null);
    },[user,auth])

    return (
        <UserContext.Provider   
            value={{user , setUser , auth , setAuth}}
        >
            {children}
        </UserContext.Provider>
    )
}