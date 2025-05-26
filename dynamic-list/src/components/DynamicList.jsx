import { useState } from "react";
import { dataList } from "../dataList";
export default function DynamicList() {
  const [data, setData] = useState(dataList);

  function handleItemCheck(event, id) {
    debugger;
    const updatedData = data.map((item) => {
      if (item.id === id) {
        item.completed = event.target.checked;
        return item;
      }
      return item;
    });
    setData(updatedData);
  }

  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <input
              onChange={(event) => handleItemCheck(event, item.id)}
              checked={item.completed}
              type="checkbox"
            />
            <span className={item.completed ? "line-through" : ""}>
              {item.todo}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
