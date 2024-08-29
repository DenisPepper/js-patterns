// Делаем приватные поля для объекта

const target = {
  name: 'Denis',
  _password: '123456',
};

const handler = {
  get(target, key) {
    if (!target[key]) return;

    if (key.startsWith('_')) throw new Error(`Свойство ${key} не найдено!`);

    const value = target[key];
    return typeof value === 'function' ? value.bind(target) : value;
  },
};

const proxy = new Proxy(target, handler);

//console.log(proxy.name);
