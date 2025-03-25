// Create a parent component that passes a function to the child. 
// The child executes the function when a button is clicked, ensuring the function reference is memoized.

import React from "react";

const Child = React.memo(({ onButtonClick }) => {
    console.log('Child rendered');
    return <button onClick={onButtonClick}>Update Message</button>;
  });

const Parent = () => {
    const [message, setMessage] = React.useState('Hello World')

    const handleMsgUpdate = React.useCallback(() => {
        setMessage('Hello Puja')
    },[])

    return (
        <>
            <p>{message}</p>
            <Child onButtonClick={handleMsgUpdate} />
        </>
    )
}

export default Parent;

