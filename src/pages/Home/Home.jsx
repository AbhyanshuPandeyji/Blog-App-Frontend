// import React from 'react'

import { useEffect, useState } from "react";


// functions import 
import { makeRequest } from "../../axios.js";

const Home = () => {

  const [data, setData] = useState()


  useEffect(() => {

    const response = async () => {
      await makeRequest.get('user/')
        // response.data is way to fetch data with axios , as res.json() in fetch request
        // we need to always do it in fetch request to set data by response.data
        // on in reducer with axios to set data by assigning it a key with data response.data
        .then((response) => setData(response.data))
    }

    response();
  }, [])


  if (data == null) return <div>Loading...</div>;
  if (data == undefined) return <div>Loading...</div>;
  if (!data) return null;
  console.log(data);
  // console.log(typeof data);

  // for (let i in data) {
  //   console.log(data[i].role);
  // }



  return (
    <div>
      Home Page
      {/* {data} */}
      {/* {data.map((data, index) => (
        <div key={index}>
          {data}
        </div>
      ))

      } */}
      <table className="container mx-auto">
        <thead>
          <tr>
            {/* <th>Role</th> */}
            <th>Name</th>
            {/* <th>Age</th> */}
            {/* <th>Occupation</th> */}
            <th>Email</th>
            {/* <th>Password</th> */}
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {data.user.map((datas, index) => (
            <tr key={index}>
              {/* <td>{datas.role}</td> */}
              <td>{datas.name}</td>
              {/* <td>{datas.age}</td> */}
              {/* <td>{datas.occupation}</td> */}
              <td>{datas.email}</td>
              {/* <td>{datas.password}</td> */}
              <td>{datas.username}</td>

            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home;
