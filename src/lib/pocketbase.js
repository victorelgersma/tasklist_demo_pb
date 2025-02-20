import PocketBase from "pocketbase";

const url = `${import.meta.env.VITE_POCKETBASE_URL}`;

console.log(url);

const client = new PocketBase(url);

export default client;

export async function getTasks() {
  return await client.collection("tasks").getFullList();
}

export async function createTask(title, description) {
  const data = { title: title, description: description };
  return await client.collection("tasks").create(data);
}

export async function deleteTask(id) {
  let confirm = window.confirm("Are you sure you want to delete this task?");
  if (!confirm) {
    return;
  }
  await client.collection("tasks").delete(id);
  window.location.reload();
}

export async function updateTask(id, title, description) {
  console.log("updating task");
  const data = { title: title, description: description };
  await client.collection("tasks").update(id, data);
  window.location.reload();
}

export async function toggleTask(id, completed) {
  const data = { completed: completed };
  await client.collection("tasks").update(id, data);
}
