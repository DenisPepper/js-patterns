// https://www.youtube.com/watch?v=wYA2cIRYLoA
import { printTimeDiff } from './time-diff.js';
import { runTask } from './task.js';

const numbers = new Array(100).fill(1);

const forEach = (array, fn) => {
  let index = 0;
  const maxIndex = array.length - 1;

  const next = (index) => {
    setTimeout(() => {
      fn(array[index], index);
      if (index !== maxIndex) next((index += 1));
    }, 0);
  };

  next(index);
};

const taskId = runTask();
const startTime = process.hrtime.bigint();

forEach(numbers, (item, index) => {
  console.log(index);
  if (index === numbers.length - 1) {
    clearInterval(taskId);
    printTimeDiff(startTime);
  }
});
