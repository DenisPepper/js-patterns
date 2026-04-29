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

const data = [
    { name: "J", prev: ["E", "F", "G", "I", "H"], next: [] },
    { name: "E", prev: ["A"], next: ["J"] },
    { name: "F", prev: ["A"], next: ["J"] },
    { name: "G", prev: ["A"], next: ["J"] },
    { name: "I", prev: ["A"], next: ["J"] },
    { name: "H", prev: ["A", "B", "C"], next: ["J"] },
    { name: "A", prev: ["D"], next: ["E", "F", "G", "I", "H"] },
    { name: "B", prev: [], next: ["H"] },
    { name: "C", prev: [], next: ["H"] },
    { name: "D", prev: [], next: ["A"] },
];

const levels = new LevelBuilder(data);

console.dir(levels);
