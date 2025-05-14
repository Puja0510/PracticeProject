import React, { useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const increment = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const decrement = () => {
    setProgress((prev) => Math.max(prev - 10, 0));
  };

  // Set color based on progress value
  const getColor = () => {
    if (progress < 40) return "red";
    if (progress < 80) return "orange";
    return "green";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>{progress}%</h3>

      <div
        style={{
          height: "10px",
          width: "80%",
          border: "1px solid grey",
          borderRadius: "6px",
          backgroundColor: "#e0e0e0",
          overflow: "hidden",
            }}
      >
            <div
                style={{
                height: "100%",
                width: `${progress}%`,
                backgroundColor: getColor(),
                transition: "width 0.3s ease-in-out",
                }}
            />
      </div>

      <div>
            <button onClick={decrement} style={{ marginRight: "10px" }}>
                -10%
            </button>
            <button onClick={increment}>+10%</button>
      </div>
    </div>
  );
}

export default ProgressBar;
