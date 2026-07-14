// преобразователь двумерного массива работ в одномерный массив событий
// событие представляет собой элемент двусвязанного списка
// { name: "effect", prev: [], next: [] }

function create() {
    const effect = { prev: [], next: [] };
    return effect;
}

function add(job, store) {
    const [prevName, nextName] = job;

    // для начального эффекта нужно заполнить массив next
    if (store.has(prevName)) {
        const effect = store.get(prevName);
        effect.next.push(nextName);
    } else {
        const effect = create();
        effect.next.push(nextName);
        store.set(prevName, effect);
    }

    // для конечного эффекта нужно заполнить массив prev
    if (store.has(nextName)) {
        const effect = store.get(nextName);
        effect.prev.push(prevName);
    } else {
        const effect = create();
        effect.prev.push(prevName);
        store.set(nextName, effect);
    }
}

function transform(jobs) {
    // нужен store для хранения эффектов-объектов (событий/результатов)
    const store = new Map();

    // массив вида ["D", "A"] указывает на: "D" - начальный эффект, "A" - конечный эффект
    for (const job of jobs) {
        // создаем новые эффекты-объекты для начального и конечного имен эффектов
        add(job, store);
    }

    return Array.from(store, ([name, { prev, next }]) => {
        return { name, prev, next };
    });
}

const dependencies = [
    ["D", "A"], // D → A Собрать раму велосипеда
    ["A", "E"], // A → E Установить руль
    ["A", "F"], // A → F Установить сиденье
    ["A", "G"], // A → G Установить тормоза
    ["A", "I"], // A → I Установить трансмиссию
    ["B", "H"], // B → H Установить колёса на раму
    ["C", "H"], // C → H Установить колёса на раму
    ["A", "H"], // A → H Установить колёса на раму
    ["E", "J"], // E → J Проверить качество сборки
    ["F", "J"], // F → J Проверить качество сборки
    ["G", "J"], // G → J Проверить качество сборки
    ["H", "J"], // H → J Проверить качество сборки
    ["I", "J"], // I → J Проверить качество сборки
];

const data = transform(dependencies);
//console.dir(data, { depth: null });
console.log(JSON.stringify(data));
