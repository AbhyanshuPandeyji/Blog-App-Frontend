import axios from "axios";
import { toastify } from "../utils/toast";

// we can create any base url with this
// export const makeRequest = axios.create({
//   baseURL: "https://blog-app-backend-psi.vercel.app/api/",
//   withCredentials: true,
// });

export const makeRequest = (config = {}) => {
  const base = config.base || import.meta.env.VITE_BASE_URL;

  const makeAnotherRequest = axios.create({
    baseURL: base,
    // baseURL: "https://blog-app-backend-ns18.onrender.com/api/",
    // baseURL: "http://localhost:8000/api/",
    headers: {
      "Content-Type": "application/json",
      ...config.headers,
    },
    withCredentials: true,
    credentials: "include",
    ...config,
  });


  // Request interceptor
  makeAnotherRequest.interceptors.request.use(
    (requestConfig) => {
      // const contentType =
      //   requestConfig.headers["Content-Type"] || "application/json";
      // requestConfig.headers = setCustomizedHeaders(contentType);
      requestConfig.headers = {
        ...requestConfig.headers,
        "Content-Type": requestConfig.headers["Content-Type"] || "application/json",
      };
      return requestConfig;
    },
    (error) => Promise.reject(error)
  );


  let hasForbiddenErrorOccurred = false;


  // Response interceptor
  makeAnotherRequest.interceptors.response.use(
    (response) => response,

    async (error) => {
      console.log(error);

      if (error.response?.status === 403 && !hasForbiddenErrorOccurred) {
        hasForbiddenErrorOccurred = true;
        toastify({ msg: "Token Expired, Login Now!", type: "error" });
        // localStorage.clear();
        // store.dispatch(logoutThunkMiddleware());
      } else if (hasForbiddenErrorOccurred) {
        return new Promise(() => { }); // This creates a promise that neither resolves nor rejects, effectively halting further processing.
      }

      return Promise.reject(error);
    }
  );

  return makeAnotherRequest
}

// do same with proxy  in package.json file






/*
basic function

const base = import.meta.env.VITE_BASE_URL;

export const makeRequest = axios.create({
  baseURL: "https://blog-app-backend-ns18.onrender.com/api/",
  // baseURL: "https://blog-app-backend-ns18.onrender.com/api/",
  // baseURL: "http://localhost:8000/api/",
  withCredentials: true,
  credentials: "include"
});

*/