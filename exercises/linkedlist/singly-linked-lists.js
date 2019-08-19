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
}
