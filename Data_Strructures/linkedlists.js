class Node {
  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;

    /*
     Above can be condensed to:
     this.head = new Node(data, this.head)
    */
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if(!this.head) {
      return null;
    }

    let node = this.head;
    while(node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    // empties out the list
    this.head = null;
  }

  removeFirst() {
    if(!this.head) return;

    // this is my implementation
    // let node = this.head;
    // this.head = node.next;

    this.head = this.head.next;
  }

  removeLast() {
    if(!this.head) return;

    if(!this.head.next) {
      clear();
      // or this.head = null;
      // return;
    };

    let previous = this.head;
    let node = this.head.next;

    while(node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;




  }

}
