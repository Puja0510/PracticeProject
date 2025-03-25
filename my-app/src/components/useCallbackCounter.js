import { useState, useCallback } from "react";

const Button = ({ onClick }) => {
  console.log("Button Rendered");
  return <button onClick={onClick}>Click Me</button>;
};

const MemoizedButton = React.memo(Button);

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <MemoizedButton onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;

// useCallback memoizes a function to prevent unnecessary re-creation.
//  Best For: Preventing function re-creation in child components.