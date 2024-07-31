import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateTask } from "../lib/pocketbase";

export default function EditTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (!title) {
      alert("Please fill in a title");
      return;
    }
    updateTask(id, title, description);
    navigate("..");
  };

  return (
    <>
      <h2>Edit Task</h2>
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
        onClick={() => handleSubmit(id, title, description)}
      >
        <div className="flex items-center">
          <span className="material-symbols-outlined -ml-2">save</span>
          <p className="text-base">Save</p>
        </div>
      </button>
    </>
  );
}
