export class Clss {
  static {
    // блок инициализации
    // будет аыполнен один раз
  }

  constructor() {
    // список аргументов обычной функции
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
  }
}

const cls = new Clss(1, 'two', true);

// кросплатформенный глобальный объект
globalThis;

// необязательная переменная error в catch
try {
} catch {}

// преобразование функции в строку и выполнение в другом контексте
function example(arg) {
  console.log(`Examle here with ${arg}`);
}
const ex = example.toString();
const exampleFromString = Function(`return ${ex}`)();
exampleFromString('once arg');

// короткий синтаксис логическиъ операторов
let a = 1;
a &&= 8; // a = a && 2

let b = null;
b ||= 2; // b = b || 2

let c = undefined;
c ??= 4; // c = c ?? 4

// возведение в степень
const pow = 2 ** 3; // 2^3
