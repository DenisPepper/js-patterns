const startTime = process.hrtime.bigint();

export const printTimeDiff = () => {
  const diff = (process.hrtime.bigint() - startTime) / 1000000n;
  console.log(`Time (ms) ${diff.toString()}`);
};

