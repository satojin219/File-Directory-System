import { FileNode } from "./node.js";
export class FileSystem {
    constructor() {
        this.root = new FileNode(null, "/", "dir", null);
        this.currentDir = this.root;
    }
    touch(fileName) {
        let serchKeyNode = this.currentDir.childList.searchNode(fileName);
        if (serchKeyNode != null && serchKeyNode.type == "file") {
            this.currentDir.updatedDate = new Date();
            return `1 new file's updated: ${fileName}`;
        }
        else {
            let newFile = new FileNode(null, fileName, "file", null);
            this.currentDir.childList.enqueueBack(newFile);
            return `1 new file added: ${fileName}`;
        }
    }
    mkdir(dirName) {
        let serchKeyNode = this.currentDir.childList.searchNode(dirName);
        if (serchKeyNode != null && serchKeyNode.type == "dir") {
            return `ERROR! file or directory already exists: ${dirName}`;
        }
        else {
            let newDirectory = new FileNode(null, dirName, "dir", null);
            this.currentDir.childList.enqueueBack(newDirectory);
            return `1 new directory added: ${dirName}`;
        }
    }
    ls(optionOrFileOrDirName) {
        return this.currentDir.childList.toListString();
    }
    cd(optionOrdirName) { }
    pwd() { }
    print(fileName) { }
    setContent(fileName) { }
    rm(fileOrDirName) { }
    move(dirName) { }
}
