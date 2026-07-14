export class Actor {
    #queue = [];
    #processing = false;
    #handler = null;
    #state = null;

    constructor(handler, state) {
        this.#handler = handler;
        this.#state = state;
    }

    async send(message) {
        this.#queue.push(message);
        await this.#process();
    }

    async #process() {
        if (this.#processing) return;
        this.#processing = true;

        while (this.#queue.length) {
            const message = this.#queue.shift();
            await this.#handler(message, this.#state);
        }

        this.#processing = false;
    }
}
