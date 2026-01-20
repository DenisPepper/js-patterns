import { LevelBuilder } from "./dag/make-levels.js";

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

console.log(levels);
