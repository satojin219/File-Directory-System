import { BaseNode } from "./node";
import { FileNode } from "./node";
import { LinkedList } from "./node";
export class FileSystem{
  root :BaseNode
  currentDir :BaseNode

  constructor(){
    this.root = new FileNode(null,"/","dir",null);
    this.currentDir = this.root;
  }
  touch(fileName :string) :string{
    if(this.currentDir.childList.searchNode(fileName) != null){
      this.currentDir.updatedDate = new Date();
      return `1 new file's updated: ${fileName}`
      
    }else{
      let newFile = new FileNode(null,fileName,"file",null);
      this.currentDir.childList.enqueueBack(newFile);
      return `1 new file added: ${fileName}`
    }
  }
  mkdir(dirName :string){}
  ls(optionOrFileOrDirName? :string){}
  cd(optionOrdirName :string){}
  pwd(){}
  print(fileName :string){}
  setContent(fileName :string){}
  rm(fileOrDirName :string){}
  move(dirName :string){}

}