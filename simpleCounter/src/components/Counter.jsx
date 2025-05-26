import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1 < 0 ? 0 : count - 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button type="button" onClick={handleIncrement} className="btn me-2">
          Increment
        </button>
        <button type="button" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </>
  );
}
