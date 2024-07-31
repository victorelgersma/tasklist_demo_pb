import React from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../lib/pocketbase";

export default function CreateTask() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (!title) {
      alert("Please fill in a title");
      return;
    }
    createTask(title, description);
    navigate("..");
  };

  return (
    <>
      <h2>Create Task</h2>
      <div className="grid gap-4 mt-4 text-base">
        <input
          type="text"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
        onClick={handleSubmit}
      >
        <div className="flex items-center">
          <span className="material-symbols-outlined -ml-2">save</span>
          <p className="text-base">Save</p>
        </div>
      </button>
    </>
  );
}
