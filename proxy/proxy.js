// Делаем приватные поля для объекта

const target = {
  name: 'Denis',
  _password: '123456',
};

const handler = {
  
};

const proxy = new Proxy(target, handler);

//console.log(proxy.name);
