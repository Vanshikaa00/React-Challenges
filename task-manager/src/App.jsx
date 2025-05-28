import TaskForm from "./components/TaskForm";
import "./App.css";
import TaskList from "./components/TaskList";
import { useState, useRef } from "react";
import ConfirmationDialog from "./components/ConfirmationDialog";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskIdToBeDeleted, setTaskIdToBeDeleted] = useState(null);
  const dialogRef = useRef();
  function handleAddTask(task) {
    setTaskList((prev) => [...prev, task]);
  }

  function handleTaskDeletion(taskId) {
    setTaskIdToBeDeleted(taskId);
    dialogRef.current?.open();
  }

  function handleConfirmDeletion(confirmDelete) {
    if (confirmDelete) {
      const updatedArr = taskList.filter((item) => {
        if (item.id !== taskIdToBeDeleted) {
          return item;
        }
      });
      setTaskList(updatedArr);
    }
  }

  return (
    <>
    <h1 className="font-light text-5xl mb-3">Task Manager</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        taskToBeDeleted={handleTaskDeletion}
        taskList={taskList}
      ></TaskList>
      <ConfirmationDialog
        confirmDeletion={handleConfirmDeletion}
        ref={dialogRef}
      />
    </>
  );
}

export default App;
