import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsersThunkMiddleware } from "../../redux/features/UserReducer/UserReducer";
import DataTable from "react-data-table-component";
import { all } from "axios";

const Admin = () => {

    const dispatch = useDispatch();
    const { allUsers } = useSelector(state => state.user)
    const [data , setData] = useState({});

    useEffect(() => {
        dispatch(getAllUsersThunkMiddleware());

    }, [dispatch])

    console.log(allUsers)

    const columns = [
        {
            name: "Name",
            selector: (row)=> row.name
        },
    ]

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