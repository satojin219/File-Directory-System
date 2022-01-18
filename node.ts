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

  enqueueFront(node :BaseNode) :void{
    if(this.head == null){
      this.head = node;
      this.tail = this.head;
    }else{
      this.head.prev = node;
      node.next = this.head;
      this.head = node;

    }
  }
  enqueueBack(node :BaseNode) :void{
    if(this.tail == null){
      this.head = node;
      this.tail = this.head;
    }else{
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
  dequeueFront() :void{
    this.head = this.head.next;
    
  }
  dequeueBack() :void{
    this.tail = this.tail.prev;
  }
  deleteNode(key :string) :void{
    let iterator = this.head;
    while(iterator.data == key){
        iterator = iterator.next;
    }
    
    if(iterator == this.head)return this.dequeueFront();
    else if(iterator == this.tail) return this.dequeueBack();
    else{
      iterator.prev.next = iterator.next;
      iterator.next.prev = iterator.prev;
    }
  }
  searchNode(key :string) :BaseNode | null{
    let iterator = this.head;
    while(iterator != null){
      if(iterator.data == key) return iterator;
        iterator = iterator.next;
    }
    return null;
  } 
  deepCopy() :LinkedList{
    let copyList = new LinkedList();
    let iterator = this.head;
    while(iterator != null){
      copyList.enqueueBack(iterator);
      iterator = iterator.next;
    }
    return copyList;
  }

}