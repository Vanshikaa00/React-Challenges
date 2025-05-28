import { useRef, useState } from "react";
import "../App.css";
export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [addButtonEnabled, setAddButtonEnabled] = useState(true);

  function handleTitleChange(event) {
    setTitle(event.target.value);
    debugger;
    if (event.target.value !== "" && dueDate !== null) {
      setAddButtonEnabled(false);
    } else {
      setAddButtonEnabled(true);
    }
  }
  function handleDueDateChange(event) {
    setDueDate(event.target.value);
    debugger;
    if (event.target.value !== "" && title !== "") {
      setAddButtonEnabled(false);
    } else {
      setAddButtonEnabled(true);
    }
  }

  function handleAddTask(event) {
    event.preventDefault();
    if (title !== "" && dueDate !== "") {
      onAddTask({
        id: Math.random(),
        title: title,
        dueDate: dueDate,
      });
      setTitle("");
      setDueDate("");
    } else {
      alert("Form Details are not complete!");
      setAddButtonEnabled(true);
    }
  }

  return (
    <div>
      <form className="border-1 rounded">
        <h1 className="text-xl my-2 italic font-medium">Enter tasks here:</h1>
        <div>
          <label className="font-medium ">Title:</label>
          <input
            className="border m-3 p-2 rounded"
            type="text"
            onChange={(event) => handleTitleChange(event)}
          />
        </div>
        <div>
          <label className="font-medium ">Due Date:</label>
          <input
            className="border mx-3 mb-2 p-2 rounded"
            type="date"
            onChange={(event) => handleDueDateChange(event)}
          />
        </div>

        <button
          disabled={addButtonEnabled}
          className={
            addButtonEnabled
              ? ` bg-sky-200 text-sky-900 py-2 px-4 my-3 rounded`
              : `btn bg-sky-700 text-white py-2 px-4 my-3 rounded`
          }
          onClick={(event) => handleAddTask(event)}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
