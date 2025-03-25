import React from 'react'

// const CounterWithHooks = () => {
//     const [count, setCount] = React.useState(0);
  
//     React.useEffect(() => {
//       const interval = 
//       setInterval(() => {
//         setCount((prev) => prev + 1);
//       }, 1000);
  
//       return () => clearInterval(interval); // Cleanup on unmount
//     }, []);
  
//     return <h1>Count: {count}</h1>;
//   };

//   export default CounterWithHooks

const CounterWithHooks = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <div>Count: {count}</div>
      <button onClick={() => setCount(prevCount => prevCount -1)}>-</button>
    </>
  );
};

export default CounterWithHooks;