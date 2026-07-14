import { EventManager } from "./event-manager.js";

export class Consumer {
    #eventManager = null;
    #jobs = {
        AFTER_USER_LOGIN: "AFTER_USER_LOGIN",
        AFTER_USER_LOGOUT: "AFTER_USER_LOGOUT",
    };

    constructor() {
        this.#eventManager = new EventManager(this.#jobs);
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
