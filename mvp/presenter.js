export class Presenter {

    #model = null;

    #view = null;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;
        this.#init();
    }

    #init = () => {
        this.#model.addOnIncrementHandler(() => console.log(`the count was INcreased to ${this.#model.getCount()}`));
        this.#model.addOnIncrementHandler((message) => console.log(`INcrease message: ${message}`));
        this.#model.addOnIncrementHandler(this.#updateView)

        this.#model.addOnDecrementHandler(() => console.log(`the count was DEcreased to ${this.#model.getCount()}`));
        this.#model.addOnDecrementHandler((message) => console.log(`DEcrease message: ${message}`));
        this.#model.addOnDecrementHandler(this.#updateView);
    }

    #updateView = () => this.#view.value = this.#model.getCount()

    handleOnClickIncButton = (args) => this.#model.handleIncreaseCount(args);

    handleOnClickDecButton = (args) => this.#model.handleDecreaseCount(args);
}