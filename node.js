export class FileNode {
    constructor(data, name, type, parent) {
        this.data = data;
        this.next = null;
        this.prev = null;
        this.name = name;
        this.type = type;
        this.parent = parent;
        this.childList = new LinkedList();
        this.createdDate = new Date();
        this.updatedDate = this.createdDate;
    }
    deepCopy() {
        let copyNode = new FileNode(this.data, this.name, this.type, this.parent);
        copyNode.childList = this.childList.deepCopy();
        return copyNode;
    }
}
export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    enqueueFront(node) {
        if (this.head == null) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
    }
    enqueueBack(node) {
        if (this.tail == null) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }
    dequeueFront() {
        if (this.head == null)
            return;
        this.head = this.head.next;
    }
    dequeueBack() {
        if (this.tail == null)
            return;
        this.tail = this.tail.prev;
    }
    deleteNode(key) {
        let iterator = this.head;
        while (iterator != null) {
            if (iterator.data == key)
                break;
            iterator = iterator.next;
        }
        if (iterator == null)
            return;
        else if (iterator == this.head)
            return this.dequeueFront();
        else if (iterator == this.tail)
            return this.dequeueBack();
        else {
            if (iterator.prev != null)
                iterator.prev.next = iterator.next;
            if (iterator.next != null)
                iterator.next.prev = iterator.prev;
        }
    }
    searchNode(key) {
        let iterator = this.head;
        while (iterator != null) {
            if (iterator.name == key)
                return iterator;
            iterator = iterator.next;
        }
        return null;
    }
    deepCopy() {
        let copyList = new LinkedList();
        let iterator = this.head;
        while (iterator != null) {
            copyList.enqueueBack(iterator);
            iterator = iterator.next;
        }
        return copyList;
    }
}
//# sourceMappingURL=node.js.map