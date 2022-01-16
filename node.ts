interface BaseNode {
  data: string,
  next?: BaseNode,
  prev?: BaseNode,
  name: string,
  type: string,
  createdDate?: Date,
  updatedDate?: Date,
  parent: BaseNode,
  children?: BaseNode,
  list?: LinkedList,
  deepCopy(): BaseNode
}

class FileNode implements BaseNode {
  public list?: LinkedList;
  public createdDate?: Date;
  public updatedDate?: Date;

  constructor(public data: string, public name: string, public type: string, public parent: BaseNode) {
    this.list = new LinkedList();
    this.createdDate = new Date();
    this.updatedDate = this.createdDate;
  }

  deepCopy(): BaseNode {
    let copyNode = new FileNode(this.data, this.name, this.type, this.parent);
    copyNode.list = this.list.deepCopy();
    return copyNode;
  }


}

class LinkedList {
  constructor(public head?: BaseNode, public tail?: BaseNode) {
    this.tail = this.head;
  }

  enqueueFront(){}
  enqueueBack(){}
  dequeueFront(){}
  dequeueBack(){}
  deleteNode(){}
  searchNode(){}
  deepCopy(){}

}