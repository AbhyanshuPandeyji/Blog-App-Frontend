import { useEffect } from "react"

export const GetToken = () => {

    // const baseUrl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        const GetData = async () => {
            try {
                const request = await fetch(`http://localhost:8000/api/test/token`);
                const data = await request.json(); // Parse JSON
                console.log(data);
            } catch (error) {
                console.error("Error fetching token:", error);
            }
        };
        GetData();
    }, []);


    return (
        <>
        </>
    )
}

export default GetToken