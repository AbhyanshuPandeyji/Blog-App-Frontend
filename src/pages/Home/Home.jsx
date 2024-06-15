// import React from 'react'

import { useEffect, useMemo, useState } from "react";


// functions import 
// import { makeRequest } from "../../axios.js";
import { useDispatch, useSelector } from "react-redux";
import { makeRequest } from "../../config/axios.js"
import { toastify } from "../../utils/toast.js";
import createAxiosInstance from "../../config/axiosConfig.js";
import { getAllUser } from "../../redux/features/UserReducer/UserReducer.js";


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  // const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();


  const { allUser } = useSelector((state) => state.user)
  // const usersData = useMemo(()=>{
  //   data
  // })

  // console.log(allUser)
  // console.log(usersData)

  useEffect(() => {
    // const response = async () => {
    //   await axios.get('/user/')
    //     // response.data is way to fetch data with axios , as res.json() in fetch request
    //     // we need to always do it in fetch request to set data by response.data
    //     // on in reducer with axios to set data by assigning it a key with data response.data
    //     .then((response) => setData(response.data))
    // }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        await dispatch(getAllUser());
        setLoading(false);
        toastify({ msg: "Users data has been fetched successfully", type: "success" });
      } catch (err) {
        setLoading(false);
        setError("Failed to fetch users data");
        console.error("Fetching error:", err);
      }
    };

    fetchData();
    // toastify({ msg: "users Data Has been set", type: "success" });
    // setData(response.data);
    // setLoader(false);
  }, [dispatch]);

  // whenever setting the data from the used state or other data , always use a second use effect to set it
  // if it is fetching in the data , to not run into infinite data rendering
  useEffect(() => {
    if (allUser) {
      // using local data is not required and inefficient if data doesnt require the manipulation in the component level
      // remembered the message component
      setData(allUser);
    }
  }, [allUser])



  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>No data available</div>;
  // console.log(data);
  // console.log(typeof data);

  // for (let i in data) {
  //   console.log(data[i].role);
  // }

// unless if the function is handling the fetching in and setting up the data by a click function 
// the setting up any data by after fetching or getting in from a url , will be set in different function and 
// block outside or other than the fetching in data 
  const handleClick = () => {
    toastify({ msg: "your button click is been successful", type: "success" })
  }


  return (
    <>
      <div className="container">
        {/* {data} */}
        <table className="">
          <thead>
            <tr>
              {/* <th>Role</th>
              <th>Age</th>
              <th>Occupation</th> */}
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              {/* <th>Password</th> */}
            </tr>
          </thead>
          <tbody>
            {data.user.map((datas, index) => (
              <tr key={index}>
                {/* <td>{datas.role}</td>
                <td>{datas.age}</td>
                <td>{datas.occupation}</td> */}
                <td>{datas.username}</td>
                <td>{datas.name}</td>
                <td>{datas.email}</td>
                {/* <td>{datas.password}</td> */}
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
      <button onClick={handleClick}>CLick Me</button>
    </>
  )
}

export default Home;
