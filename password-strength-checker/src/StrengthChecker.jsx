import { useState } from "react";
const VALIDATION_MSG = [
  {
    message: "Weak (less than 8 characters)",
    color: "text-red-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
        />
      </svg>
    ),
  },
  {
    message: "Medium (8-12 characters)",
    color: "text-yellow-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
    ),
  },
  {
    message: "Strong (more than 12 characters)",
    color: "text-green-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
  },
];
export default function StrengthChecker() {
  const [msg, setMsg] = useState({});

  function checkStrength(event) {
    let password = event.target.value;
    if (password.length < 8) {
      setMsg(VALIDATION_MSG[0]);
    } else if (password.length >= 8 && password.length <= 12) {
      setMsg(VALIDATION_MSG[1]);
    } else if (password.length > 12) {
      setMsg(VALIDATION_MSG[2]);
    }
  }

  return (
    <>
      <label className="mx-2">Enter Password:</label>
      <input
        className="border px-2"
        type="password"
        onChange={(event) => checkStrength(event)}
      />
      <div className="flex ms-38 pt-2 flex-row">
        <span className={msg.color}> {msg.icon}</span>
        <span className={`left-0 ${msg.color}`}>{msg.message}</span>
      </div>
    </>
  );
}
