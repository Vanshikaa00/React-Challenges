import { useCallback, useContext, useMemo, useRef } from "react";
import { ChatContext } from "../store/ChatContext";
import { BOT_MESSAGES } from "../assets/starterMessages";
import { ThemeContext } from "../store/ThemeContext";
export default function ChatInput() {
  const chatMessage = useRef();
  const { dispatch } = useContext(ChatContext);

  const { toggleTheme, dispatchToggleTheme } = useContext(ThemeContext);

  function getRandomBotMessage() {
    return BOT_MESSAGES[Math.floor(Math.random() * BOT_MESSAGES.length)];
  }
  const handleUserInputMessage = useCallback(
    (event) => {
      event.preventDefault();
      const inputVal = chatMessage.current.value.trim();

      dispatch({
        type: "ADD_USER_MSG",
        payload: inputVal,
      });

      chatMessage.current.value = "";

      setTimeout(() => {
        dispatch({
          type: "ADD_BOT_MSG",
          payload: getRandomBotMessage(),
        });
      }, 1500);
    },
    [dispatch, getRandomBotMessage]
  );

  return (
    <form
      onSubmit={(event) => handleUserInputMessage(event)}
      className={`border my-3 gap-3 p-3 flex flex-row ${
        toggleTheme === "dark" && "bg-stone-800 text-white"
      }`}
    >
      <input
        ref={chatMessage}
        placeholder="Type your message here..."
        type="text"
        className={`p-2 border rounded flex-1/2 ${
          toggleTheme === "light" ? "text-stone-700" : "bg-stone-800 text-white"
        }`}
      />
      <button type="button">
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
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
      </button>
    </form>
  );
}
