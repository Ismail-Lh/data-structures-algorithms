class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }

  prepend(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  // Inserts a new node with the given value after the specified node value
  insertAfterAGivenNode(givenNodeVal, newNodeVal) {
    // Create a new node with the given value
    const newNode = new Node(newNodeVal);
    // Start at the head of the list
    let currNode = this.head;

    // Traverse the list to find the node at giveNodeVal
    while (currNode && currNode.value != givenNodeVal) {
      currNode = currNode.next;
    }

    // Check if the node with the given value is found
    if (currNode) {
      // Insert the new node into the list after the node with the given value
      newNode.next = currNode.next;
      currNode.next = newNode;

      this.length++;
    } else {
      // Node with given value not found, you may choose to handle this case accordingly
      console.log(`Node with value ${givenNodeVal} not found in the list.`);
    }
  }

  // Inserts a new node with the given value before the specified node value
  insertBeforeAGivenNode(givenNodeVal, newNodeVal) {
    // Create a new node with the given value
    const newNode = new Node(newNodeVal);
    // Start at the head of the list
    let currNode = this.head;
    let prevNode = null;

    // Traverse the list to find the node at index - 1
    while (currNode && currNode.value != givenNodeVal) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    // Check if the node with the given value is found
    if (currNode) {
      // Insert the new node into the list before the node with the given value
      newNode.next = currNode;

      if (prevNode) prevNode.next = newNode;
      // If there is no previous node, it means we are inserting at the beginning
      else this.head = newNode;

      this.length++;
    } else {
      // Node with given value not found, you may choose to handle this case accordingly
      console.log(`Node with value ${givenNodeVal} not found in the list.`);
    }
  }

  // Inserts a new node with the given value at the specified index in the list
  insertInAGivenIndex(index, newNodeVal) {
    // If the index is greater than or equal to the length, append the value to the end
    if (index >= this.length) {
      return this.append(newNodeVal);
    }

    // If the index is 0 or negative, prepend the value to the beginning
    if (index === 0 || index < 0) {
      return this.prepend(newNodeVal);
    }

    // Create a new node with the given value
    const newNode = new Node(newNodeVal);
    // Start at the head of the list
    let currNode = this.head;
    let i = 0;

    // Traverse the list to find the node at index - 1
    while (i < index - 1) {
      currNode = currNode.next;
      i++;
    }

    newNode.next = currNode.next;
    currNode.next = newNode;

    this.length++;
  }

  // Removes the node at the specified index in the list
  remove(index) {
    // If the index is greater than or equal to the length, remove the last node
    if (index >= this.length) {
      this.remove(this.length - 1);
      return;
    }

    // Start at the head of the list
    let currNode = this.head;
    let i = 0;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      // Traverse the list to find the node at index - 1
      while (i < index - 1) {
        currNode = currNode.next;
        i++;
      }

      // Identify the node to be deleted and update the next pointer of the previous node
      const deletedNode = currNode.next;
      currNode.next = deletedNode.next;
    }

    // Decrement the length of the list
    this.length--;
  }

  search(value) {
    let currNode = this.head;
    let i = 0;

    while (currNode.next) {
      if (currNode.value === value) {
        return i;
      }

      currNode = currNode.next;
      i++;
    }

    return -1;
  }

  printList() {
    const arr = [];
    let currNode = this.head;

    while (currNode) {
      arr.push(currNode.value);
      currNode = currNode.next;
    }

    return arr;
  }
}

// 6 -> 10 -> 5 -> 16
const linkedList = new LinkedList(10);

linkedList.append(5);
linkedList.append(16);
linkedList.prepend(6);

console.log(linkedList.printList());

linkedList.insertInAGivenIndex(124, 8);
linkedList.insertInAGivenIndex(0, 8);

// console.log(linkedList.search(20));
console.log(linkedList.printList());

linkedList.insertAfterAGivenNode(5, 7);
linkedList.insertBeforeAGivenNode(5, 7);
linkedList.insertAfterAGivenNode(16, 4);
linkedList.insertBeforeAGivenNode(4, 0);
console.log(linkedList.printList());

// linkedList.remove(0);
// console.log(linkedList);
// linkedList.remove(0);

// console.log("************************************");

// console.log(linkedList);

// console.log("************************************");

class LinkedListEmpty {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    let newNode = new Node(value);

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
    let newNode = new Node(value);

    if (this.head) {
      newNode.next = this.head;
    }

    this.head = newNode;
    this.length++;
  }
}

// const linkedListEmpty = new LinkedListEmpty();

// linkedListEmpty.append(10);
// linkedListEmpty.append(5);
// linkedListEmpty.append(16);
// linkedListEmpty.prepend(6);

// console.log(linkedListEmpty);
