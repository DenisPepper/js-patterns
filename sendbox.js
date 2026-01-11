class Graph {
    constructor(verticesCount) {
        this.verticesCount = verticesCount;
        this.adjacencyList = new Map();
        this.indegree = new Array(verticesCount).fill(0);
    }

    // Добавление вершины
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    // Добавление ребра u -> v
    addEdge(u, v) {
        this.adjacencyList.get(u).push(v);
        this.indegree[v]++;
    }

    // Топологическая сортировка (Алгоритм Кана)
    topologicalSort() {
        // Копируем массив входящих степеней, чтобы не менять исходный
        const indegree = [...this.indegree];
        const queue = [];
        const result = [];

        // Шаг 1: Добавляем все вершины с нулевой входящей степенью
        for (let i = 0; i < this.verticesCount; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        // Шаг 2: Обрабатываем очередь
        while (queue.length > 0) {
            const current = queue.shift();
            result.push(current);

            // Уменьшаем входящую степень соседей
            const neighbors = this.adjacencyList.get(current) || [];
            for (const neighbor of neighbors) {
                indegree[neighbor]--;
                if (indegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // Шаг 3: Проверяем наличие цикла
        if (result.length !== this.verticesCount) {
            console.log(
                "Граф содержит цикл! Топологическая сортировка невозможна.",
            );
            return [];
        }

        return result;
    }

    // Вспомогательная функция для красивого вывода
    topologicalSortWithNames(vertexNames) {
        const sortedIndices = this.topologicalSort();
        return sortedIndices.map((idx) => vertexNames[idx]);
    }
}

// Пример использования с вашим графом
const graph = new Graph(4);

// Добавляем вершины (их индексы)
for (let i = 0; i < 4; i++) {
    graph.addVertex(i);
}

// Добавляем рёбра (как в примере)
graph.addEdge(2, 0); // C -> A
graph.addEdge(0, 1); // A -> B
graph.addEdge(0, 3); // A -> D
graph.addEdge(3, 1); // D -> B

// Топологическая сортировка
const vertexNames = ["A", "B", "C", "D"];
const sortedVertices = graph.topologicalSortWithNames(vertexNames);

console.log("Топологическая сортировка графа:");
console.log(sortedVertices.join(" → "));

// Проверка результата
console.log("\nПроверка зависимостей:");
console.log(
    "C -> A:",
    sortedVertices.indexOf("C") < sortedVertices.indexOf("A"),
);
console.log(
    "A -> B:",
    sortedVertices.indexOf("A") < sortedVertices.indexOf("B"),
);
console.log(
    "A -> D:",
    sortedVertices.indexOf("A") < sortedVertices.indexOf("D"),
);
console.log(
    "D -> B:",
    sortedVertices.indexOf("D") < sortedVertices.indexOf("B"),
);
