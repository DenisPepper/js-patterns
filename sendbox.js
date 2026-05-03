class SimplePipeline {
    // ============ ПРИВАТНЫЕ ПОЛЯ ============
    #data = null;
    #outputFile = "result.txt";

    // ============ ПРИВАТНЫЕ МЕТОДЫ ============

    #getPath() {
        const path = prompt("Введите путь к файлу:");
        if (!path) throw new Error("Путь не указан");
        this.#data = path;
        return this;
    }

    #readFile() {
        this.#data = `Содержимое файла ${this.#data}`;
        return this;
    }

    #process() {
        this.#data = this.#data.toUpperCase();
        return this;
    }

    #save() {
        // Здесь должна быть реальная запись в файл
        // Например: await fs.writeFile(this.#outputFile, this.#data);
        return this;
    }

    // ============ ПУБЛИЧНЫЕ МЕТОДЫ ============

    setOutputFile(filename) {
        this.#outputFile = filename;
        return this;
    }

    async execute() {
        try {
            this.#getPath()
                .#readFile()
                .#process()
                .#save();

            return { success: true, data: this.#data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

// Использование
const pipeline = new SimplePipeline();
const result = await pipeline
    .setOutputFile("my_result.txt")
    .execute();

// Работа с результатом (без вывода в консоль)
if (result.success) {
    // Здесь можно использовать result.data по своему усмотрению
    // Например, отправить на сервер или сохранить в переменную
    const processedData = result.data;
} else {
    // Обработка ошибки
    const errorMessage = result.error;
}
