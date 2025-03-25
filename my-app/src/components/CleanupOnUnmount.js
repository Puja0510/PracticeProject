import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timerId); // Cleanup on unmount
    };
  }, []); // Empty dependency array ensures this runs once

  return <div>Time: {time}s</div>;
};

export default Timer;
