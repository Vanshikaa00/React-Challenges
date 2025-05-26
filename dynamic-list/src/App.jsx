import "./App.css";
import DynamicList from "./components/DynamicList";

function App() {
  return (
    <>
      <span className="text-3xl italic bg-yellow-300 p-1 mb-8">To-do List</span>
     
      <DynamicList />
    </>
  );
}

export default App;
