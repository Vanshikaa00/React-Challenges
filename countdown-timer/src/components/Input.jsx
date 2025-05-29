import Button from "./Button";
import { useRef } from "react";

export default function Input({ timeVal, startTimer }) {
  const minRef = useRef();
  const secondRef = useRef();

  function handleStartTimer(event) {
    event.preventDefault();
    const min = parseInt(minRef.current.value) || 0;
    const sec = parseInt(secondRef.current.value) || 0;
    const totalSeconds = min * 60 + sec;

    // Normalize to minutes and seconds
    const normalizedMin = Math.floor(totalSeconds / 60);
    const normalizedSec = totalSeconds % 60;

    timeVal({ minute: normalizedMin, second: normalizedSec });
    startTimer(true);
    minRef.current.value = "";
    secondRef.current.value = "";
  }

  return (
    <div className="flex flex-col items-start p-4 border rounded shadow w-80 bg-white">
      <div className="mb-4 w-full">
        <label className="block mb-1">Enter minutes:</label>
        <input
          ref={minRef}
          type="number"
          className="w-full border p-2 rounded"
        />
      </div>
      <div className="mb-4 w-full">
        <label className="block mb-1">Enter seconds:</label>
        <input
          ref={secondRef}
          type="number"
          className="w-full border p-2 rounded"
        />
      </div>
      <Button onClick={(event) => handleStartTimer(event)} btnType="sky">
        Start Timer
      </Button>
    </div>
  );
}
