import { BaseNode } from "./node";
import { FileNode } from "./node";
import { LinkedList } from "./node";
import { FileSystem } from "./file";
const fileSystem = new FileSystem();
console.log(fileSystem.touch("index.html"));
console.log(fileSystem.touch("index.html"));
console.log(fileSystem.mkdir("src"));
console.log(fileSystem.mkdir("src"));
console.log(fileSystem.mkdir("components"));
console.log(fileSystem.ls())

