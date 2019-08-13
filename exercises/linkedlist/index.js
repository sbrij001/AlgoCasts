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
    let node = this.head
    if (!this.head) {
      return null
    }
    while (node) {
      if (!node.next) {
        node = node
      }
      node = node.next
    }
    return node
  }
}

module.exports = { Node, LinkedList };
