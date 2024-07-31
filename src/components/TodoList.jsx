import React, { useEffect, useState } from "react";
import { deleteTask, getTasks } from "../lib/pocketbase";
import { Link } from "react-router-dom";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  // console.log(tasks[0].title)

  useEffect(() => {
    getTasks().then((res) => setTasks(res));
  }, []);
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <div className="flex">
            <input
              className="h-6 w-6 my-auto mr-2"
              type="checkbox"
              name="completed"
              checked={task.isDone}
            />
            <h3>{task.title}</h3>
            <div className="flex ml-auto">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md text-base"
                onClick={() => deleteTask(task.id)}
              >
                <div className="flex my-auto">
                  <span className="material-symbols-outlined -ml-2">
                    delete
                  </span>
                </div>
              </button>
            </div>
            <div className="flex">
              <Link to={`edit/${task.id}`}>
                <button className="bg-gray-500 rounded-md text-white px-2 hover:bg-gray-600 ml-4">
                  <span className="material-symbols-outlined -ml-2">edit</span>
                </button>
              </Link>
            </div>
          </div>
          <p className="text-xl text-grey 400 my-4">{task.description}</p>
          <hr></hr>
        </div>
      ))}
      <Link to="create">
        <button className="bg-green-500 text-white py-2 px-4 rounded-md text-base">
          <div className="flex my-auto">
            <span className="material-symbols-outlined -ml-2">add</span>
            <p>New task</p>
          </div>
        </button>
      </Link>
    </>
  );
}
