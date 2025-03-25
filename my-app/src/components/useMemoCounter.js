import { useState, useMemo } from "react";

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Computed Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExpensiveComponent;
// useMemo caches the computed value and prevents unnecessary recalculations.
// Best For: Avoiding unnecessary recalculations in performance-sensitive cases.