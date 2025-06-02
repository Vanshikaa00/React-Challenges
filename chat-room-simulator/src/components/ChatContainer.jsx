import { useContext, useReducer, useState } from "react";
import { ChatContext } from "../store/ChatContext";
import ChatArea from "./ChatArea";
import ChatControls from "./ChatControls";
import ChatInput from "./ChatInput";
import { chatReducer, initialState } from "../store/chatReducer";
import { themeReducer } from "../store/themeReducer";
import { ThemeContext } from "../store/ThemeContext";

export default function ChatContainer() {
  //const [messages, setMessages] = useState([]);

  const [messages, dispatch] = useReducer(chatReducer, initialState);
  const [toggleTheme, dispatchToggleTheme] = useReducer(themeReducer, "light");

  return (
    <ThemeContext.Provider value={{ toggleTheme, dispatchToggleTheme }}>
      <ChatContext.Provider value={{ messages, dispatch }}>
        <div
          className={`flex items-center justify-center h-screen ${
            toggleTheme === "light" ? "bg-white" : "bg-stone-800"
          } ${toggleTheme === "light" ? "text-stone-700" : "text-white"} `}
        >
          <main className="p-3 rounded border w-96 flex flex-col h-[90vh]">
            <h1 className="text-3xl text-center p-3  border ">
              Chat Simulator
            </h1>
            <ChatControls className="mb-2" />
            <div className="border flex-grow overflow-y-auto mb-2">
              <ChatArea />
            </div>
            <div className="sticky bottom-0 ">
              <ChatInput />
            </div>
          </main>
        </div>
      </ChatContext.Provider>
    </ThemeContext.Provider>
  );
}
