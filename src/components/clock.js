import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedSeconds = currentTime.toLocaleTimeString([], { second: '2-digit' });
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', ampm: false,})//.replace(/AM|PM/g, "").trim();


  return <div class="TimeWrapper">{formattedTime}<span style={{fontSize: "40px", marginLeft: "20px", pointerEvents: "none"}}>{formattedSeconds}</span></div>;
};

export default Clock;