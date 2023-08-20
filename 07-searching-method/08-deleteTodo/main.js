const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function deleteTask(id) {
  const taskIndex = tasks.find((task) => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
  }
}

deleteTask(1);
console.log(tasks);
