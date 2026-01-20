export class LevelBuilder {
    #data = [];
    #level = 1;
    #result = new Map();

    constructor(data) {
        this.#data = data;
        this.#run();
        return this.#result;
    }

    #put(item) {
        if (this.#result.has(this.#level)) {
            const items = this.#result.get(this.#level);
            items.push(item);
        } else {
            this.#result.set(this.#level, [item]);
        }
    }

    #addLevel(items) {
        let nextItems = [];

        for (const item of items) {
            this.#put(item);
            const prev = item.prev ?? [];
            nextItems = [...nextItems, ...prev];
        }

        if (nextItems.length !== 0) {
            this.#level += 1;
            const next = this.#data.filter(({ name }) =>
                nextItems.includes(name)
            );
            this.#addLevel(next);
        }
    }

    #run() {
        const next = this.#data.filter((item) => item.next.length === 0);
        this.#addLevel(next);
    }
}
