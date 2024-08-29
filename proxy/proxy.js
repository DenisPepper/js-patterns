// Делаем приватные поля для объекта

const target = {
  name: 'Denis',
  _password: '123456',
};

const throwError = (key) => {
  throw new Error(`Свойство ${key} не найдено!`);
};

const handler = {
  get(target, key) {
    if (!target[key]) return;

    if (key.startsWith('_')) throwError(key);

    const value = target[key];
    return typeof value === 'function' ? value.bind(target) : value;
  },

  set(target, key, value) {
    if (!target[key]) return;

    if (key.startsWith('_')) throwError(key);

    target[key] = value;
    return true;
  },

  deleteProperty(target, key) {
    if (!target[key]) return;

    if (key.startsWith('_')) throwError(key);

    delete target[key];
    return true;
  },

  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith('_'));
  },
};

const proxy = new Proxy(target, handler);

//console.log(proxy.name);
