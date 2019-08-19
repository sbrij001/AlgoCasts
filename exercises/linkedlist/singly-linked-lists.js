class Node {
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedLists {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // will create a new node and asign it to the end of the list
  // accept a val
  // create a new node using the val passed in
  // if there is no head set the head and tail to be the new node
  // if there is a head set the next prop on the list to be a new node
  // and set the tail prop on the list to be a newly created node.
  push(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    }
    this.length++;
    return this;
  }

  // pop will remove from the end of the linked lists
  // if there are no nodes in the list return undefined
  // loop thru the entire list until you reach the tail
  // set the next prop of the second to last node to be null
  // set the tail to be the second to last node
  // decrament the length of the list by 1
  // return the value of the node removed

  pop(){
    if(!this.head) return undefined;

    let current = this.head;
    let previous =  this.head;
    while(previous.next){
      previous = current;
      current = current.next
    }
    this.tail.next = null;
    this.tail = previous;
    this.length --;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // removes a node from the begining of a linked list
  // if there are no nodes return undefined
  // store the current head property in a variable
  // update the head property to be the current heads next property
  // decrament the length by 1
  // return the value of the node that was removed
  shift(){
    if(!this.head) return undefined;

    let currentHead = this.head;
    this.head = this.head.next;
    this.length--
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  // define a function that accepts a value
  // create a new node using the value passed to the function
  // if there is no head set the head to the newly created node
  // otherwise set the newly created node next property to be
  // the current head property on the list
  // set the head property on the list to be the newly created node.
  // increment the length of the list by 1
  // return the linked list

  unshift(value){
    let newNode = new Node(value);

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length ++;
    return this;
}
