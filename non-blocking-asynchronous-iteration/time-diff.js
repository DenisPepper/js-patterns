export const printTimeDiff = (startTime) => {
  const diff = (process.hrtime.bigint() - startTime) / 1000000n;
  console.log(`Start time(ms) ${startTime / 1000000n} | Time diff(ms) ${diff.toString()}`);
};
