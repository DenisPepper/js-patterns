
const use = (callback) => (...args) => callback(...args);

const log = use(console.log)

log(1, 2, 3)


const todo = (...args) => console.log(...args);

todo(1, 2, 3)