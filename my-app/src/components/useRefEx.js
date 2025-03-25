import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
// useRef is used to store references to DOM elements and persist values without causing re-renders.
// Best For: Direct DOM manipulation (e.g., focusing an input, storing previous state values).