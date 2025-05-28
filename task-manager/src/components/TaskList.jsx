export default function TaskList({ taskList, taskToBeDeleted }) {
  function handleDeleteTask(taskId) {
    taskToBeDeleted(taskId);
  }

  return (
    <>
      {taskList.length > 0 && (
        <h1
          className="my-1
       
        p-3
        text-4xl underline"
        >
          List is:
        </h1>
      )}
      <ul>
        {taskList.map((item, index) => {
          return (
            <li className="flex justify-center" key={item.id}>
              <span className="content-center">
                {item.title} - {item.dueDate}
              </span>
              <button
                onClick={() => handleDeleteTask(item.id)}
                className="bg-red-800  text-white px-1 py-1 rounded m-2"
              >
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
