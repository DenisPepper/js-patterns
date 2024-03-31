class Store {
    #store = new Set();
    add = (callback) => this.#store.add(callback);
    remove = (callback) => this.#store.remove(callback);
    dispatch = (args) => this.#store.forEach((callback) => callback(args));
}

export class EventManager {
    #eventStores = new Map();

    #creatNewStore = (name) => {
        const store = new Store();
        this.#eventStores.set(name, store);
        return store;
    };

    #getStoreByName = (name) => {
        const store = this.#eventStores.get(name);
        if (store) {
            return store;
        }
        return this.#creatNewStore(name);
    };

    add = (name, callback) => {
        this.#getStoreByName(name).add(callback);
    };

    remove = (name, callback) => {
        this.#getStoreByName(name).remove(callback);
    };

    dispatch = (name, args) => {
        this.#getStoreByName(name).dispatch(args);
    };

}