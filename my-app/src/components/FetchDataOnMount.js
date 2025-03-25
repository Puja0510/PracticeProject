import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Runs only once on mount
  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
};

export default FetchData;
