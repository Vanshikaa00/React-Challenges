import "./App.css";
import Timer from "./components/Timer";
import Modal from "./components/Modal";
import Input from "./components/Input";
import { useState, useRef } from "react";
function App() {
  const [timerValue, setTimerValue] = useState({
    minute: 0,
    second: 0,
  });

  const [startTimer, setStartTimer] = useState(false);

  const modalRef = useRef();
  function handleInput(inputs) {
    setTimerValue({
      minute: inputs.minute,
      second: inputs.second,
    });
  }

  function handleStart(val) {
    setStartTimer(val);
  }

  function handleTimerComplete(isComplete) {
    if (isComplete) {
      modalRef.current.open();
    } else {
      modalRef.current.close();
    }
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-start gap-10 pt-10 bg-gray-100">
  <Input startTimer={handleStart} timeVal={handleInput} />
  <Timer
    timerComplete={handleTimerComplete}
    startTimer={startTimer}
    timer={timerValue}
  />
  <Modal ref={modalRef} />
</div>

  );
}

export default App;
