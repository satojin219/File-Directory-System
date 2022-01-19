import { FileSystem } from "./file.js";
const fileSystem = new FileSystem();
console.log(fileSystem.touch("index.html"));
console.log(fileSystem.touch("index.html"));
console.log(fileSystem.mkdir("src"));
console.log(fileSystem.mkdir("src"));
console.log(fileSystem.mkdir("components"));
console.log(fileSystem.ls());
