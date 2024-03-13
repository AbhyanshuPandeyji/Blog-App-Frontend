import axios from "axios";

// we can create any base url with this
export const makeRequest = axios.create({
  baseURL: "https://blog-app-backend-psi.vercel.app/api/",
  withCredentials: true,
});
// export const makeRequest = axios.create({
//   baseURL: "http://localhost:8000/api/",
//   withCredentials: true,
// });

// do same with proxy  in package.json file
