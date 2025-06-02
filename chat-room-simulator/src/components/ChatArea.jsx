import { useContext } from "react";
import { ChatContext } from "../store/ChatContext";
import { ThemeContext } from "../store/ThemeContext";

export default function ChatArea() {
  const { messages } = useContext(ChatContext);
  const { theme } = useContext(ThemeContext); // <-- Corrected

  return (
    <div className="gap-3 p-3 flex flex-col">
      {messages.map((msg, index) => {
        const isBot = msg.type === "BOT";

        const botClass =
          theme === "light"
            ? "bg-stone-200 text-sky-500"
            : "bg-gray-50 text-stone-800";

        return (
          <div
            key={index}
            className={`flex flex-col ${isBot ? "items-start" : "items-end"}`}
          >
            <div
              className={`px-3 py-2 rounded max-w-[80%] ${
                isBot
                  ? `text-left ${botClass}`
                  : "bg-blue-500 text-white text-right"
              }`}
            >
              <span className="font-medium block mb-1">
                [{msg.type.toUpperCase()}]
              </span>
              <span>{msg.text}</span>
            </div>

            <span className="text-xs text-gray-500 mt-1">
              {new Date(msg.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        );
      })}
    </div>
  );
}
