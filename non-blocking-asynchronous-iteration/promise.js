import { printTimeDiff } from './time-diff.js';
import { runTask } from './task.js';

const range = {
  start: 1,
  end: 100,
  [Symbol.asyncIterator]() {
    let value = this.start;
    return {
      next: () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              value,
              done: value++ === this.end + 1,
            });
          }, 0);
        }),
    };
  },
};

console.dir({
  range,
  names: Object.getOwnPropertyNames(range),
  symbols: Object.getOwnPropertySymbols(range),
});

const taskId = runTask();
const startTime = process.hrtime.bigint();

(async () => {
  for await (const number of range) {
    console.log(number);
    if (number === range.end) {
      clearInterval(taskId);
    }
  }
  printTimeDiff(startTime);
})();
