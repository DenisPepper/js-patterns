import { Model } from './model.js';
import { Presenter } from './presenter.js';

const decBtn = document.querySelector('.dec-btn');
const incBtn = document.querySelector('.inc-btn');
const input = document.querySelector('.input');

const model = new Model();
const presenter = new Presenter(model, input);

if (decBtn) {
    decBtn.addEventListener('click', () => presenter.handleDecreaseCount('DEC msg'));
}

if (incBtn) {
    incBtn.addEventListener('click', () => presenter.handleIncreaseCount('INC msg'));
}