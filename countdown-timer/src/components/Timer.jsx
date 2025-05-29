import { useEffect, useState, useRef } from "react";
import Button from "./Button";

export default function Timer({ timer, startTimer, timerComplete }) {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const timerRef = useRef();
  const [showReset, setShowReset] = useState(false);

  function handleStopTimer() {
    clearInterval(timerRef.current);
    setShowReset(true);
  }

  function handleResumeTimer() {
    handlePassingTime(totalSeconds);
    setShowReset(false);
  }
  function handleResetTimer() {
    clearInterval(timerRef.current);
    setShowReset(false);
    setTotalSeconds(0);
  }

  function handlePassingTime(time) {
    setTotalSeconds(time);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          timerComplete(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }

  useEffect(() => {
    if (startTimer) {
      // Calculate total seconds from minutes and seconds
      const total = Number(timer.minute) * 60 + Number(timer.second);
      handlePassingTime(total);
    }
  }, [timer, startTimer]);

  // Calculate min and sec for display
  const min = Math.floor(totalSeconds / 60);
  const sec = totalSeconds % 60;

  return (
    <>
      <h1 className="text-stone-700 text-6xl">
        {String(min).padStart(2, "0")} min : {String(sec).padStart(2, "0")} sec
      </h1>
      <Button btnType="red" onClick={handleStopTimer}>
        Stop Timer
      </Button>
      {showReset && (
        <>
          <Button onClick={handleResetTimer} btnType="gray">
            Reset Timer
          </Button>
          <Button onClick={handleResumeTimer} btnType="green">
            Resume Timer
          </Button>
        </>
      )}
    </>
  );
}
