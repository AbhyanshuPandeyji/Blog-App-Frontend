import { createSlice } from "@reduxjs/toolkit";
import { toastify } from "../../../utils/toast";


const initialState = {
    blog: null,
  };
  
  const blogSlice = createSlice({
    name: "blogs",
    initialState: initialState,
    reducers: {
      setUser(state, action) {
        Object.keys(action.payload).forEach((key) => {
          state[key] = action.payload[key];
        });
      },
    },
  });


export const { setUser } = blogSlice.actions;
export default blogSlice.reducer;
