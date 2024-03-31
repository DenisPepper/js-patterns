import { EventManager } from './event-manager.js';

export class Model {

    #events = {
        ON_INCREMENT: 'ON_INCREMENT',
        ON_DECREMENT: 'ON_DECREMENT',
    }

    #count = 0

    #eventManager = null;

    constructor(eventManager = new EventManager()) {
        this.#eventManager = this.#assert(eventManager, EventManager);
    }

    #assert = (arg, type) => arg instanceof type ? arg : this.#throwTypeError(type);

    #throwTypeError = (type) => {
        throw new TypeError(`expected: ${type.name}`);
    };

    #dispatchEvents = (name, args) => this.#eventManager.dispatch(name, args);

    addOnIncrementHandler = (handler) => this.#eventManager.add(this.#events.ON_INCREMENT, handler);

    addOnDecrementHandler = (handler) => this.#eventManager.add(this.#events.ON_DECREMENT, handler);

    getCount = () => this.#count;

    #increaseCount = () => this.#count += 1;

    #decreaseCount = () => this.#count -= 1;

    handleIncreaseCount = (args) => {
        this.#increaseCount();
        this.#dispatchEvents(this.#events.ON_INCREMENT, args);
    }

    handleDecreaseCount = (args) => {
        this.#decreaseCount();
        this.#dispatchEvents(this.#events.ON_DECREMENT, args);
    }

}