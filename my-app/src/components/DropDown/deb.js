import React from "react";

const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const MyComponent = () => {
  const [inputVal, setInputVal] = React.useState("");

  const debounced = debounce((val) => {
    console.log("debounce", val);
  }, 1000);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputVal(value);
    debounced(value);
  };

  return (
    <div>
      <input type="text" value={inputVal} onChange={handleChange} />
    </div>
  );
};

export default MyComponent;

// const log = () => { console.log("print")}

// const deb = debounce(log, 10000)
