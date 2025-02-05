import { createSlice } from "@reduxjs/toolkit";
import { toastify } from "../../../utils/toast";
import { setLoader } from "../Loaders/loaders.js";
import { makeRequest } from "../../../config/axios.js";

const axios = makeRequest();

const initialState = {
  allBlogs: null,
  singleBlog: null,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {
    setBlog(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});


export const { setBlog } = blogSlice.actions;
export default blogSlice.reducer;


export const getAllBlogThunkMiddleware = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoader({ loader: true }));
      const response = await axios.get(`/blog`);

      // console.log("is data is coming", response.data);
      console.log(response.data)
      if (response.status === 200) {
        const { message } = response.data;
        // callback(null);
        // toastify({
        //   msg: message,
        //   type: "success",
        // });

        await dispatch(setBlog({ allBlogs: response?.data }));
        // await localStorage.setItem("blog-user" , JSON.stringify(response?.data?.userData));
        // await setStorageItem("blog-user" , response?.data?.userData);
        // return response;
        // return response.status;
      }
      // console.log("api request response data", response.data);
    } catch (error) {
      if (error?.response) {
        console.log(error)
        toastify({ msg: error.response.data?.message, type: "error" });
      }
    } finally {
      dispatch(setLoader({ loader: false }));
    }
  };
};


export const getSingleBlogThunkMiddleware = ({ id }) => {
  return async (dispatch) => {
    try {
      dispatch(setLoader({ loader: true }));
      const response = await axios.get(`/blog/singleblog/${id}`);

      // console.log("is data is coming", response.data);

      if (response.status === 200) {
        const { message } = response.data;
        // callback(null);
        // toastify({
        //   msg: message,
        //   type: "success",
        // });

        // const response1 = await axios.post(`/blog/singleblog/${id}/views`);
        
        await dispatch(setBlog({ singleBlog: response?.data?.blog }));
        // await localStorage.setItem("blog-user" , JSON.stringify(response?.data?.userData));
        // await setStorageItem("blog-user" , response?.data?.userData);
        // return response;
        // return response.status;
      }
      // console.log("api request response data", response.data);
    } catch (error) {
      if (error?.response) {
        console.log(error)
        toastify({ msg: error.response.data?.message, type: "error" });
      }
    } finally {
      dispatch(setLoader({ loader: false }));
    }
  };
};


export const createBlogThunkMiddleware = ({data , 
  // formData
}) => {
  return async (dispatch) => {
    try {
      dispatch(setLoader({ loader: true }));
      const response = await axios.post(`/blog/create`, data)
      // const response = await axios.post(`/blog/create`, formData
        // {
        //   headers: {
        //     'Content-Type': 'multipart/form-data', // Important for file uploads
        //   },
        // }
      // );

      console.log("is data is coming", response.data);

      if (response.status === 200) {
        const { message } = response.data;
        // callback(null);
        toastify({
          msg: message,
          type: "success",
        });
      }
      await dispatch(getAllBlogThunkMiddleware());
      // console.log("api request response data", response.data);
    } catch (error) {
      if (error?.response) {
        console.log(error)
        toastify({ msg: error.response.data?.message, type: "error" });
      }
    } finally {
      dispatch(setLoader({ loader: false }));
    }
  };
};


// export const updateBlogViewsThunkMiddleware = ({id 
//   // formData
// }) => {
//   return async (dispatch) => {
//     try {
//       dispatch(setLoader({ loader: true }));
//       const response = await axios.post(`/blog/singleblog/${id}/views`);
//       // const response = await axios.post(`/blog/create`, formData
//         // {
//         //   headers: {
//         //     'Content-Type': 'multipart/form-data', // Important for file uploads
//         //   },
//         // }
//       // );

//       console.log("is data is coming", response.data);

//       if (response.status === 200) {
//         const { message } = response.data;
//         // callback(null);
//         toastify({
//           msg: message,
//           type: "success",
//         });
//       }
//       await dispatch(getAllBlogThunkMiddleware());
//       // console.log("api request response data", response.data);
//     } catch (error) {
//       if (error?.response) {
//         console.log(error)
//         toastify({ msg: error.response.data?.message, type: "error" });
//       }
//     } finally {
//       dispatch(setLoader({ loader: false }));
//     }
//   };
// };



