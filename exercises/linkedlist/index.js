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
    // const node = new Node(data, this.head)
    // this.head = node;
    // can be simplified to
    // this.head = new Node(data, this.head)
    //refactored
    this.insertAt(data,0);
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
      return;
    }
    if(!this.head.next){
      this.head = null;
      return;

    }
    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    // once while loop finishes running
    // set previous.next to null to remove.
    previous.next = null;
  }

  insertLast(data){
    // let lastNode = this.getLast();
    //
    // if (last) {
    //   // there are some existing nodes in our chain.
    //   last.next = new Node(data);
    // }else {
    //   // the chain is empty
    //   this.head = new Node(data);
    // }
    return this.getAt(size() - 1)
  }

  // will return a node at the provided index.
  getAt(index){
    const node = this.head;
    const counter = 0;
    while (node) {
      if (counter === index) {
        return node
      }
      counter ++;
      node = node.next;
    }
    // the the case an index is requested that is outside of the linked list.
    return null;
  }

  removeAt(index){
    //edge case in case there are no links in the list
    if (!this.head) {
      return;
    }
    //edge case for index of 0
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    // get the previous element that needs to be removed
    let previous = this.getAt(index - 1)
    // edge case if there is no previous & if the index is out of bounds
    if (!previous || !previous.next) {
      return;
    }
    // removing the node requested by changing the list to the item after it.
    let previous.next = previous.next.next
  }

  insertAt(data, index){
    if(!this.head){
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      // new node second arg will set the next node
      new Node(data, this.head)
      return;
    }
    const previous = getAt(index - 1) || getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
}




































};

module.exports = { Node, LinkedList };
