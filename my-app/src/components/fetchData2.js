import React from "react";
import axios from 'axios';

const MyData = () => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    const fetchData = async() => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setData(response.data)
        }
        catch(error){
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
    }

    React.useEffect(() => { fetchData()}, [])

    if(loading) return <>Loading</>
    if(error) return <>Error{error}</>

    return (
        <>{data.map((item,index) => <div>
            <>{item.name}</>
        </div>)}</>
    )
}

export default MyData;