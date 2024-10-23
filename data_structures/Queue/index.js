// class Queue {
//   constructor() {
//     this.queue = [];
//   }

//   enqueue(val) {
//     this.queue.push(val);
//   }

//   dequeue() {
//     return this.queue.shift();
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    if (this.first === this.last) {
      this.last = null;
    }

    const first = this.first;

    this.first = this.first.next;
    this.size--;

    return first.value;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue);

console.log(queue.dequeue());

console.log(queue);

console.log(queue.dequeue());

console.log(queue);
