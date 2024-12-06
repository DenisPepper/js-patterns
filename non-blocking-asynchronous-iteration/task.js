let count = 0;

const task = () => {
  console.log('task here...', (count += 1));
};

export const runTask = (interval = 100) => setInterval(task, interval);
