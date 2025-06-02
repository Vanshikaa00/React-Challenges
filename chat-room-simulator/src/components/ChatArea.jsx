import { useContext } from "react";
import { ChatContext } from "../store/ChatContext";

export default function ChatArea() {
  const { messages } = useContext(ChatContext);

  return (
    <div className=" gap-3 p-3 flex flex-col ">
      {messages.map((msg, index) => {
        return (
          <>
            <div
              key={index}
              className={`flex ${
                msg.type === "BOT" ? "justify-start" : "justify-end"
              }`}
            >
              <span className="font-bold mr-1">
                [{msg.type.toUpperCase()}]:
              </span>
              <span>{msg.text}</span>
            </div>
          </>
        );
      })}
    </div>
  );
}
