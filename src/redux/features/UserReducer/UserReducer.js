import { createSlice } from "@reduxjs/toolkit";
import { toastify } from "../../../utils/toast";
import createAxiosInstance from "../../../config/axiosConfig";

const axios = createAxiosInstance();


// no need to use the assign operator to define the single reducer in the reducers because when using this , its just 
// like use state , it will create multiple keys in the state with the different names to access and then in those keys 
// we can store different kinds of data's with key value pairs
/*
    example :
    setData = {
        state.allUsers : action.payload ; // this will give us the all users as the data
        state.user : action.payload.singleUser // this will create the value of the user as single user 
    }

    its all the game of the key value pair,
    every value we will send and set by the key value pair thanks to object.keys method , and for each 
    the values that needs to be set will be sent by key and the values of those value of after initial state 
    will be sent by the value pair , 
    now inside the function the values will be set as usual , only difference is instead of directly passing in the data
    we are now passing in the key value pair 
    setCampaigns(state, action) {
      Object.keys(action.payload).forEach((key) => {
        // as in this function the name of the state thats needs to be set will be taken by the keys , and payload value
        / name will be taken by the value pair of the key , now its still looks confusing , so lets try it,
        // now but how this is setting the value we want to set and how its taking in the data and the name its still confusing , use
        chat gpt to explain
        state[key] = action.payload[key];
      });

      now i understand , as action is in itself is an object with key as payload which have the object we send , so action is same
      // the payload is always the data we are sending when accessing the set user or any reducer method 
      setUser(action.payload) // similar to writing ,  setUser({user : data})
      // now the keys are taken by the action.payload , and action.payload is similar in the object.keys method and the inside the function
      // the thing changing is the we on above taking in the key to select the specific data in the initial state we want to change
      // and when we pass its name in the state with the help of key , then in the action.payload when we pass that same key it takes in the 
      // value of that key and sets it in the state , so its like we are setting the keys values in useState , where there
      // are keys defined or added in the state as we go and inputs increases or key value pairs added while the initial state is an empty object
      // only difference is its not an empty object and it have the specific defined keys which will be only accessed and no new ones till
      // we create one , its a great method than individually naming or setting up state with different reducer functions , just passing the 
      // object and the functions sets up and work on the rest
    },
*/
const initialState = {
    user: null,
    allUser: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser(state, action) {
            Object.keys(action.payload).forEach((key) => {
                state[key] = action.payload[key];
            })
        }
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;


export const getAllUser = () => {
    return async (dispatch) => {
        try {

            const response = await axios.get("/user/");
            // console.log(response.data)
            const data = response.data;
            dispatch(setUser({allUser : data}));
        } catch (error) {
            toastify({ msg: "error while fetching the users", type: "error" })
        }
    }
}