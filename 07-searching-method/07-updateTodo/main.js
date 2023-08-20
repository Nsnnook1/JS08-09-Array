const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function updateTask(id, newName) {
  const taskUpdate = tasks.find((task) => task.id === id);
  if (taskUpdate) {
    taskUpdate.name = newName;
  }
}
updateTask(2, "Travelling");
console.log(tasks);

  