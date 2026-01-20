function topologicalSort(tasks, dependencies) {
    // Шаг 1. Строим граф и подсчитываем степени входа
    const graph = {}; // Список смежности: graph[u] = [v1, v2, ...]
    const inDegree = {}; // inDegree[v] = число входящих рёбер в v

    // Инициализируем вершины
    tasks.forEach((task) => {
        graph[task] = [];
        inDegree[task] = 0;
    });

    // Добавляем дуги и обновляем степени входа
    dependencies.forEach(([from, to]) => {
        graph[from].push(to);
        inDegree[to]++;
    });

    const edges = Object.assign({}, inDegree);

    // Шаг 2. Находим все вершины со степенью входа 0 (источники)
    const queue = [];
    tasks.forEach((task) => {
        if (inDegree[task] === 0) {
            queue.push(task);
        }
    });

    // Шаг 3. Обрабатываем вершины по порядку
    const order = [];
    while (queue.length > 0) {
        const current = queue.shift(); // Берём первую вершину из очереди
        order.push(current);

        // Для каждого соседа уменьшаем степень входа
        graph[current].forEach((neighbor) => {
            inDegree[neighbor]--;
            // Если степень входа стала 0 — добавляем в очередь
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        });
    }

    // Шаг 4. Проверяем, что отсортировали все вершины (нет циклов)
    if (order.length !== tasks.length) {
        throw new Error(
            "Граф содержит цикл — топологическая сортировка невозможна.",
        );
    }

    return { order, graph, edges };
}

// --- Пример использования ---
const tasks = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const dependencies = [
    ["I", "J"], // I → J Проверить качество сборки
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
];

const { order, graph, edges } = topologicalSort(tasks, dependencies);
//console.log("Порядок выполнения:", order.join(" → "));
console.dir(order);
console.dir(graph);
console.dir(edges);
