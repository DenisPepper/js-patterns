import { EventManager } from "./event-manager.js";

const NameStore = {
    greeting: "GREETING",
    parting: "PARTING",
};

export class Consumer {
    #eventManager = null;

    constructor() {
        this.#eventManager = new EventManager(NameStore);
    }

    addBeforeHandler(fn) {
        this.#eventManager.add(NameStore.greeting, fn);
    }

    addAfterHandler(fn) {
        this.#eventManager.add(NameStore.parting, fn);
    }

    greeting(args) {
        this.#eventManager.use(NameStore.greeting, args);
    }

    parting(args) {
        this.#eventManager.use(NameStore.parting, args);
    }
}

const consumer = new Consumer();
consumer.addBeforeHandler((user) => console.log(`Hello, ${user.name}!`));
consumer.addAfterHandler((user) => console.log(`Goodbye, ${user.name}!`));

const users = [{ name: "Denis" }, { name: "Nicole" }];
users.forEach((user) => {
    consumer.greeting(user);
    consumer.parting(user);
});
