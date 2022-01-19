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
    let serchKeyNode = this.currentDir.childList.searchNode(fileName);
    if(serchKeyNode != null && serchKeyNode.type == "file"){
      this.currentDir.updatedDate = new Date();
      return `1 new file's updated: ${fileName}`
      
    }else{
      let newFile = new FileNode(null,fileName,"file",null);
      this.currentDir.childList.enqueueBack(newFile);
      return `1 new file added: ${fileName}`
    }
  }
  mkdir(dirName :string){
    let serchKeyNode = this.currentDir.childList.searchNode(dirName);
    if(serchKeyNode != null && serchKeyNode.type == "dir"){
      return `ERROR! file or directory already exists: ${dirName}`;
      
    }else{
      let newDirectory  = new FileNode(null,dirName,"dir",null);
      this.currentDir.childList.enqueueBack(newDirectory);
      return `1 new directory added: ${dirName}`;
    }
  }
  
  ls(optionOrFileOrDirName? :string){
    return this.currentDir.childList.toListString();
  }
  cd(optionOrdirName :string){}
  pwd(){}
  print(fileName :string){}
  setContent(fileName :string){}
  rm(fileOrDirName :string){}
  move(dirName :string){}

}