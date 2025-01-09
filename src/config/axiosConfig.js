// import axios from "axios";
// // import { store } from "../redux/store.js";
// // import { getItemFromStore } from "../utils";
// import { toastify } from "../utils/toast.js";
// // import { logoutThunkMiddleware } from "../redux/features/user";

// // const getToken = () => {
// //   return getItemFromStore("konceptLawToken");
// // };

// const setCustomizedHeaders = (contentType = "application/json") => {
//   // const token = getToken();
//   return {
//     "Content-Type": contentType,
//     // ...(token && { Authorization: `Bearer ${token}` }),
//   };
// };



// const createAxiosInstance = (config = {}) => {
//   console.log("Base URL:", import.meta.env.VITE_BASE_URL);
//   const {
//     base = import.meta.env.VITE_BASE_URL,
//     initialLoader = false,
//     showAlert = true,
//   } = config;

//   const axiosInstance = axios.create({
//     baseURL: base,
//     // headers: setCustomizedHeaders(),
//     // headers: { "Content-Type" : "application/json"},
//     headers: {
//       "Content-Type": "application/json", // Ensure a default Content-Type is set
//       ...config.headers, // Allow overriding headers via config
//     },
//     credentials: "include",
//     ...config,

//   });

//   // Request interceptor
//   axiosInstance.interceptors.request.use(
//     (requestConfig) => {
//       // const contentType =
//       //   requestConfig.headers["Content-Type"] || "application/json";
//       // requestConfig.headers = setCustomizedHeaders(contentType);
//       requestConfig.headers = {
//         ...requestConfig.headers,
//         "Content-Type": requestConfig.headers["Content-Type"] || "application/json",
//       };
//       return requestConfig;
//     },
//     (error) => Promise.reject(error)
//   );

//   let hasForbiddenErrorOccurred = false;
//   // Response interceptor
//   // axiosInstance.interceptors.response.use(
//   //   (response) => response,

//   //   async (error) => {
//   //     console.log(error);

//   //     if (error.response?.status === 403 && !hasForbiddenErrorOccurred) {
//   //       hasForbiddenErrorOccurred = true;
//   //       toastify({ msg: "Token Expired, Login Now!", type: "error" });
//   //       localStorage.clear();
//   //       // store.dispatch(logoutThunkMiddleware());
//   //     } else if (hasForbiddenErrorOccurred) {
//   //       return new Promise(() => { }); // This creates a promise that neither resolves nor rejects, effectively halting further processing.
//   //     }

//   //     return Promise.reject(error);
//   //   }
//   // );

//   // axiosInstance.interceptors.response.use(
//   //   (response) => response,
//   //   (error) => {
//   //     if (error.response?.status === 403) {
//   //       toastify({ msg: "Token Expired, Login Now!", type: "error" });
//   //       localStorage.clear();
//   //     }
//   //     return Promise.reject(error);
//   //   }
//   // );

//   // axiosInstance.interceptors.request.use((config) => {
//   //   console.log("Request Config:", config);
//   //   return config;
//   // });

//   // axiosInstance.interceptors.response.use(
//   //   (response) => {
//   //     console.log("Response:", response);
//   //     return response;
//   //   },
//   //   (error) => {
//   //     console.error("Error Response:", error.response);
//   //     return Promise.reject(error);
//   //   }
//   // );


//   return axiosInstance;
// };

// export default createAxiosInstance;



import axios from "axios";

const createAxiosInstance = (config = {}) => {
  const base = config.base || import.meta.env.VITE_BASE_URL;
  console.log("Base URL (in Axios instance):", base);

  const axiosInstance = axios.create({
    baseURL: base,
    headers: {
      "Content-Type": "application/json",
      ...config.headers,
    },
    credentials: "include",
    ...config,
  });

  return axiosInstance;
};

export default createAxiosInstance;
