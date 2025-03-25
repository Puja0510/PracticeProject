import React, { useEffect, useState } from "react";

const LogStateChange = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated to ${count}`);
  }, [count]); // Runs when `count` changes

  return <button onClick={() => setCount(count + 1)}>Increment: {count}</button>;
};

export default LogStateChange;
