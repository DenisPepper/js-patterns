export class Clss {
  constructor() {
     
    // список аргументов обычной функции
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
  }
}

const cls = new Clss(1, 'two', true);
