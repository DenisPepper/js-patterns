// https://www.youtube.com/watch?v=wYA2cIRYLoA
import { printTimeDiff } from './time-diff.js';
import { runTask } from './task.js';

const numbers = new Array(1000).fill(1);
const INTERVAL = 8;

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

const each = (array, fn) => {
  let index = 0;
  const maxIndex = array.length - 1;
  let startTime = Date.now();

  const next = () => {
    while (index <= maxIndex) {
      const time = Date.now();
      const diff = time - startTime;
      if (diff > INTERVAL) {
        startTime = time;
        setTimeout(next, 0);
        break;
      }
      fn(array[index], index++);
    }
  };

  next(index);
};

const taskId = runTask(INTERVAL);
const startTime = process.hrtime.bigint();

each(numbers, (item, index) => {
  console.log(index);
  if (index === numbers.length - 1) {
    clearInterval(taskId);
    printTimeDiff(startTime);
  }
});
