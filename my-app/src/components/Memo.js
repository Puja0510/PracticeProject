// Problem:
//Optimize a heavy component using React.memo.

import React from 'react';

const HeavyComponent = React.memo(({data}) => {
    console.log('Rendering Heavy Component');
    return <div>data: {data}</div>
})


const MemoEx = () => {
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
        <HeavyComponent data="Static Data" />
        <p>Count: {count}</p>
      </div>
    );
  };

export default MemoEx;

