// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
    const node = new Node(data, this.head)
    this.head = node;
    // can be simplified to
    // this.head = new Node(data, this.head)
  }

  size(){
    let counter = 0;
    let node = this.head

    while(node){
      counter++;
      node = node.next
    }
    return counter;
  }

  getFirst(){
    return this.head
  }

  getLast(){
    let node = this.head;
    if (!this.head) {
      return null
    }

    while (node) {
      if (!node.next) {
        return node
      }
      node = node.next
    }
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    let node = this.head

    if (!this.head) {
      return null
    }
    this.head = this.head.next;
  }

  removeLast(){
    if (!this.head) {
      return null
    }
    if(!this.head.next){
      return this.head = null;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

};

module.exports = { Node, LinkedList };
