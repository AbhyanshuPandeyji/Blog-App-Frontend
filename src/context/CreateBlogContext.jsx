// use context is always gets used for the propdrilling and taking in the incoming data and storing it for to be used in other places. Or to pass in the data to others.
// but how it works i have forgot , for what i forgot , i only remember it is used to share data between the components , but that data has to be similar in every other part.

import { createContext, useContext, useState } from "react";
// import Blogs from "../pages/Blogs/Blogs";

// so value can be shown , but the change is not happening , its also not taking the change in values, functions and the values is being provided , other than the entire function
// value the vlaue in the provider is not working why 
export const CreateBlogContext = createContext("");

export default function CreateBlogProvider({children}){

    const [text , setText] = useState("");

    return (
        <CreateBlogContext.Provider   
            value={{text , setText}}
        >
            {children}
        </CreateBlogContext.Provider>
    )
}