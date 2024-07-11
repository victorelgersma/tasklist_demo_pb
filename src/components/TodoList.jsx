import React, { useEffect, useState } from "react";
import client from "../lib/pocketbase";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  // console.log(tasks[0].title)

  useEffect(() => {
    client
      .collection("tasks")
      .getFullList()
      .then((res) => setTasks(res));
  }, []);
  return (
    <div>
      {tasks.map((task, index) => (
        <div className="flex">
            <input className="h-8 w-6 my-auto" type="checkbox" name="completed"/>
          <h3 key={index} className="test-3xl ml-4">
            {task.title}
          </h3>
        </div>
      ))}
    </div>
  );
}
