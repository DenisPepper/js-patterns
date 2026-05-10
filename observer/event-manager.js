const DefaultNameStore = {
    default: "DEFAULT",
};

// ✅ Класс-наблюдатель (управляет хуками)
export class EventManager {
    #nameStore = null;
    #eventNames = null;
    #events = null;

    constructor(nameStore) {
        this.#nameStore = nameStore ?? DefaultNameStore;
        Object.freeze(this.#nameStore);
        this.#eventNames = new Set(Object.values(this.#nameStore));
        this.#events = new Map();
    }

    getNames() {
        return this.#nameStore;
    }

    #check(eventName) {
        if (!this.#eventNames.has(eventName)) {
            throw new Error(`Wrong event name: ${eventName}!`);
        }
    }

    add(eventName, fn) {
        this.#check(eventName);
        if (!this.#events.has(eventName)) this.#events.set(eventName, []);
        const events = this.#events.get(eventName);
        events.push(fn);
    }

    use(eventName, args) {
        this.#check(eventName);
        const events = this.#events.get(eventName);
        events.forEach((fn) => fn(args));
    }
}

/*
// 👇 Использование
const manager = new EventManager();
const on = manager.getNames();

// usage
manager.add(on.default, (user) => console.log(`Email: ${user.name}`));
manager.add(on.default, (user) => console.log(`Entry: ${user.name}`));

// call hook
manager.use(on.default, { name: "Denis" });

// look at the name store
console.log(on);
*/
