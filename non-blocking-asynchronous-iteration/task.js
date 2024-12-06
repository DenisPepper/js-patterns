const task = () => {
  console.log('break');
};

export const runTask = () => setInterval(task, 10);
