import { useEffect, useState } from "react";

export const DigitalClock = () => {
  const [time, setTime] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  const formatTime = () => {
    const currentTime = new Date();
    const hours = String(currentTime.getHours());
    const minutes = String(currentTime.getMinutes());
    const seconds = String(currentTime.getSeconds());
    setTime(`${hours}:${minutes}:${seconds}`);
  };

  useEffect(() => {
    console.log();
    if(isPaused) return

    formatTime();

    const interval = setInterval(() => {
     formatTime();
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePause = () => {
    setIsPaused(prev=>!prev);
  };

  return (
    <div>
      <p>Current Time:{time}</p>
      <div style={{ display: "flex", gap: 10 }}>
        <button style={{ color: "blue" }} onClick={handlePause}>
         {isPaused ?"Resume":"Pause"}
        </button>
       
      </div>
    </div>
  );
};
