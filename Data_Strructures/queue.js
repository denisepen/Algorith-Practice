class Queue {
  constructor(){
    this.data = [];
  }

  add(record) {
    // add t othe front of the array
    this.data.unshift(record);
  }

  remove() {
    // pop from the end of the array
    return this.data.pop();
  }

  peek() {
    // console.log(this.data[this.data.length - 1]);
    // console.log(this.data);
    return this.data[this.data.length - 1];
  }
}

q = new Queue;

q.add(5);
q.add(6);
q.add(7);
q.peek();
