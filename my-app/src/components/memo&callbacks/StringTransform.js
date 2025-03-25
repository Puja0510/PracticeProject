// Transform a long string (e.g., reversing) only when the string input changes.
// Memoizing Expensive String Transformations

import React from "react";

const StringTransform = () => {
    const [input, setInput] = React.useState('');
  
    const reversedString = React.useMemo(() => {
      console.log('Reversing string...');
      return input.split('').reverse().join('');
    }, [input]);
  
    return (
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something..."
        />
        <p>Reversed: {reversedString}</p>
      </div>
    );
  };

  export default StringTransform;
  