import { FileNode } from "./node.js";
export class FileSystem {
    constructor() {
        this.root = new FileNode(null, "/", "dir", null);
        this.currentDir = this.root;
    }
    touch(fileName) {
        if (this.currentDir.childList.searchNode(fileName) != null) {
            this.currentDir.updatedDate = new Date();
            return `1 new file's updated: ${fileName}`;
        }
        else {
            let newFile = new FileNode(null, fileName, "file", null);
            this.currentDir.childList.enqueueBack(newFile);
            return `1 new file added: ${fileName}`;
        }
    }
    mkdir(dirName) { }
    ls(optionOrFileOrDirName) { }
    cd(optionOrdirName) { }
    pwd() { }
    print(fileName) { }
    setContent(fileName) { }
    rm(fileOrDirName) { }
    move(dirName) { }
}
//# sourceMappingURL=file.js.map