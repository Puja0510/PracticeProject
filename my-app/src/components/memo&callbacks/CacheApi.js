//Fetch and cache API data only when the dependency changes.

import React from "react";

const FetchData = ({userId}) => {
    const [data, setData] = React.useState(null);

    const fetchData = React.useCallback(async() => {
        console.log('fetching data...')
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const result = await response.json();
        setData(result)
    }, [userId])

    React.useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div>
          {data ? <p>{data.name}</p> : <p>Loading...</p>}
        </div>
      );
}

const CacheApi = () => {
    const [userId, setUserId] = React.useState(1);
  
    return (
      <div>
        <button onClick={() => setUserId((prev) => prev + 1)}>Next User</button>
        <FetchData userId={userId} />
      </div>
    );
  };

export default CacheApi