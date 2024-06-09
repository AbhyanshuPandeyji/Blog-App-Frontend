// import React from 'react'

import { useEffect, useMemo, useState } from "react";


// functions import 
// import { makeRequest } from "../../axios.js";
import { useDispatch, useSelector } from "react-redux";
import { makeRequest } from "../../config/axios.js"
import { toastify } from "../../utils/toast.js";
import createAxiosInstance from "../../config/axiosConfig.js";
import { getAllUser } from "../../redux/features/UserReducer/UserReducer.js";

// const axios = createAxios

const Home = () => {
  const axios = createAxiosInstance();
  const [data, setData] = useState()
  const dispatch = useDispatch();


  const { allUser } = useSelector((state) => state.user)
  // const usersData = useMemo(()=>{
  //   data
  // })

  console.log(allUser)
  // console.log(usersData)

  useEffect(() => {
    // const response = async () => {
    //   await axios.get('/user/')
    //     // response.data is way to fetch data with axios , as res.json() in fetch request
    //     // we need to always do it in fetch request to set data by response.data
    //     // on in reducer with axios to set data by assigning it a key with data response.data
    //     .then((response) => setData(response.data))
    // }

    // response();
    dispatch(getAllUser());
    if(allUser){
      setData(allUser)
      toastify({msg : "users Data Has been set" , type : "success"})
    }
    // setData(response.data)
    
  }, [dispatch]);



  if (data == null) return <div>Loading...</div>;
  if (data == undefined) return <div>Loading...</div>;
  if (!data) return null;
  console.log(data);
  // console.log(typeof data);

  // for (let i in data) {
  //   console.log(data[i].role);
  // }


  const handleClick = ()=>{
    toastify({ msg : "your button click is been successful" , type : "success"})
  }


  return (
    <>
      <div>
        {/* {data} */}
        <table className="container mx-auto">
          <thead>
            <tr>
              {/* <th>Role</th>
              <th>Age</th>
              <th>Occupation</th> */}
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
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
                <td>{datas.password}</td>

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
