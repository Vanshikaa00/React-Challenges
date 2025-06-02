##Objectives & Features

🧩 1. Message System (Core)
Users can type a message and send it.

Messages appear in a chat feed.

Each message shows:

The sender (You or Bot)

The message text

A timestamp

🤖 2. Simulated Bot Replies
After the user sends a message, a bot automatically responds after a short delay (e.g. 1–2 seconds).

The bot can say something random or generic like “I’m a bot. Hello!”

🧠 3. Hook Requirements
Hook	Required Use
useContext	Share global state (chat messages and user info)
useReducer	Manage message list (add, clear, simulate bot reply)
useCallback	Send message handler and other button functions
useMemo	Calculate chat statistics (e.g. total messages, number from bot)
useEffect	Simulate bot response (timer after sending a message), persist to storage

📊 4. Optional Add-ons (Stretch Goals)
Add a dropdown to switch users (simulate multi-user chat)

Display stats like:

Total messages

Messages sent by user vs bot

Save/load messages to/from localStorage

Theme toggle (light/dark mode)

✅ Requirements Summary
Feature	Required?
Typing and sending messages	✅
Display chat history	✅
Simulated bot responses	✅
Global state with Context	✅
State logic with Reducer	✅
useCallback usage	✅
useMemo statistics	✅
useEffect for timers/storage	✅
Fancy styling or routing	❌

🛠️ Technical Constraints
Use React with functional components

Use the built-in hooks (useContext, useReducer, etc.) — no Redux

No external backend (bot replies are simulated in-app)

Keep components modular: App, ChatBox, MessageList, MessageForm, etc.

📦 Deliverables
Once complete, you should have:

A running React app simulating a chat interface

At least 3–4 components

All five hooks used meaningfully

Clean, readable code

Optional: comments to explain your logic


![chrome_NfKm3vLbNM](https://github.com/user-attachments/assets/dfc1956e-dc8a-49ba-9339-e6a9f6b827b8)
