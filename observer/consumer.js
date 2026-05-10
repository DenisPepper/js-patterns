import { EventManager } from "./event-manager.js";

const Jobs = {
    AFTER_USER_LOGIN: "AFTER_USER_LOGIN",
    AFTER_USER_LOGOUT: "AFTER_USER_LOGOUT",
};

export class Consumer {
    #eventManager = null;

    constructor() {
        this.#eventManager = new EventManager(Jobs);
    }

    jobs() {
        return this.#eventManager.getEventNames();
    }

    keep(key, fn) {
        this.#eventManager.add(key, fn);
    }

    call(key, args) {
        this.#eventManager.use(key, args);
    }
}
