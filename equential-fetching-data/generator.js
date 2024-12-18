// https://habr.com/ru/articles/490524/
// последовательная отправка запросов,
// где параметр следующего запроса, является результатом ответа на предыдущий запрос
// реализация через генератор
import { fetchData } from './fetch.js';

const urls = [
  'https://jsonplaceholder.typicode.com/todos/',
  'https://jsonplaceholder.typicode.com/todos/',
  'https://jsonplaceholder.typicode.com/todos/',
  'https://jsonplaceholder.typicode.com/todos/',
];

function* gen(urls, arg) {
  let value = arg;
  for (const url of urls) {
    value = yield fetchData(`${url}${value}`);
  }
}

const INITIAL = '1';

const getData = (getters, arg) => {
  const result = getters.next(arg);
  if (!result.done) {
    result.value.then((data) => {
      console.log(data.id, data.title);
      getData(getters, (data.id += 1));
    });
  }
};

getData(gen(urls, INITIAL));

// https://youtu.be/edaYw9UhQ0M?list=PLqFwRPueWb5efKytz2W8SnR5hG8LQcEpo
// отправка запросов через async generator & for await 
