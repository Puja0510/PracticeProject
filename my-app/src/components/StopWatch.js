import React from "react";

function Timer() {
  const [timer, setTimer] = React.useState(0);
  const [id, setId] = React.useState(0);

  const handleStart = () => {
    const id = setInterval(() => {
      console.log("timerrr", timer + 1);
      setTimer((prev) => prev + 1);
    }, 1000);
    setId(id);
  };

  const handleStop = () => {
    clearInterval(id);
  };

  return (
    <>
      <button onClick={handleStart}>Start</button>
      Timer: {timer}
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

export default Timer;
