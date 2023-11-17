class LinkedListEmpty {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    let newNode = { value, next: null };

    if (this.head === null) {
      this.head = newNode;
    } else {
      let lastNode = this.head;

      while (lastNode.next) {
        lastNode = lastNode.next;
      }

      lastNode.next = newNode;
    }

    this.length++;
  }

  prepend(value) {
    let newNode = { value, next: null };

    if (this.head) {
      newNode.next = this.head;
    }

    this.head = newNode;
    this.length++;
  }
}

class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = { value, next: null };

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }

  prepend(value) {
    let newNode = { value, next: null };

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }
}

// 6 -> 10 -> 5 -> 16
const linkedList = new LinkedList(10);

linkedList.append(5);
linkedList.append(16);
linkedList.prepend(6);

console.log(linkedList);
console.log("************************************");

const linkedListEmpty = new LinkedListEmpty();

linkedListEmpty.append(10);
linkedListEmpty.append(5);
linkedListEmpty.append(16);
linkedListEmpty.prepend(6);

console.log(linkedListEmpty);
