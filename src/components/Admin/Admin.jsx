import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsersThunkMiddleware } from "../../redux/features/UserReducer/UserReducer";
import DataTable from "react-data-table-component";
// import { all } from "axios";
// import createAxiosInstance, { instance } from "../../config/axiosConfig";
import { makeRequest } from "../../config/axios";

const Admin = () => {

    console.log("Base URL:", import.meta.env.VITE_BASE_URL);

    // const axiosCreate = createAxiosInstance();
    // console.log(axiosCreate);

    // const someInstance = instance();



    const dispatch = useDispatch();
    const { allUsers } = useSelector(state => state.user)
    const [data, setData] = useState({});

    useEffect(() => {
        dispatch(getAllUsersThunkMiddleware());
        // const response = async () => {
        //     const result = await fetch("https://blog-app-backend-ns18.onrender.com/api/user/getall")
        //     .then((res) => res.json());
        //     setData(result)
        // }
        // response();

    }, [dispatch])

    // console.log(allUsers)
    // console.log(data)

    const columns = [
        {
            name: "Name",
            selector: (row) => row.name
        },
    ]

    const axiosInstance = makeRequest();

    const responseData = async ()=>{
        const result = await axiosInstance.get("/user/getall")
        console.log(result.data);
    }


    return (
        <>
            <div>Admin</div>
            <DataTable
                columns={columns}
                // changes done by Abhyanshu - reverse the data showing order
                data={allUsers ? allUsers.slice().reverse() : []}
                // data={allCampaigns ? allCampaigns : []}
                pagination
                selectableRows
                // onSelectedRowsChange={handleSelectedRowsChange}
                // customStyles={tableCustomStyles}
                // progressPending={getLoader}
                // onRowClicked={rowClickHandler}
                responsive={true}
                noDataComponent={<CustomNoDataComponenet />}
                progressComponent={<CustomProgressComponenet />}

            />
            <button onClick={responseData} className="rounded-lg p-4 bg-yellow-600" >Get Data</button>
        </>
    )
}

const CustomNoDataComponenet = () => {
    return (
        <div className="w-full p-10 text-center">
            There are no records to displays
        </div>
    );
};

const CustomProgressComponenet = () => {
    return <div className="w-full p-10 text-center">Loading...</div>;
};


export default Admin