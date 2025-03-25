import React from "react";

// const MemoizedComponent = React.memo(({ count }) => {
//   console.log("Rendering...");
//   return <>
//   <p>Count: {count}</p>
//   </>;
// });

// export default MemoizedComponent;

const MemoizedComponent = () => {
    const [count, setCount] = React.useState(0);
  
    const increment = () => {
        console.log('bhhghghgh')
        setCount(prev => prev + 1)
    //   setCount(count); // ❌ Even if `count` is the same, it still triggers a re-render
    };
  
    return <button onClick={increment}>Click</button>;
  };

  export default MemoizedComponent;

  