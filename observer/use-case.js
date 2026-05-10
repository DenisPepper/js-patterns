import { Consumer } from "./consumer.js";

const consumer = new Consumer();
const jobs = consumer.jobs();

const greeting = (user) => console.log(`Hello, ${user.name}!`);
const parting = (user) => console.log(`Goodbye, ${user.name}!`);

consumer.keep(jobs.AFTER_USER_LOGIN, greeting);
consumer.keep(jobs.AFTER_USER_LOGOUT, parting);

const users = [{ name: "Denis" }, { name: "Nicole" }];
users.forEach((user) => {
    consumer.call(jobs.AFTER_USER_LOGIN, user);
    consumer.call(jobs.AFTER_USER_LOGOUT, user);
});
