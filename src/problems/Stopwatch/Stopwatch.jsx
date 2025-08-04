import React, { useEffect, useState } from "react";

import styles from "./Stopwatch.module.css";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const resetHandler = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.timeText}>{time}</div>
      <div className={styles.controlContainer}>
        {!isRunning && time === 0 ? (
          <button onClick={() => setIsRunning(true)}>Start</button>
        ) : null}
        {time !== 0 ? (
          <button onClick={() => setIsRunning((prev) => !prev)}>
            {isRunning ? "Pause" : "Restart"}
          </button>
        ) : null}

        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
}
