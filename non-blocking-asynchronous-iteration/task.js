const task = () => {
  console.log('task here...');
};

export const runTask = () => setInterval(task, 10);
