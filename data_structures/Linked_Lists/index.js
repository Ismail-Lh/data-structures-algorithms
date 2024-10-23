class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // insert a node a the end of the list
  append(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currNode = this.head;

      while (currNode.next !== null) {
        currNode = currNode.next;
      }

      currNode.next = newNode;
    }

    this.length++;
  }

  // insert a node at the beginning of the list
  prepend(val) {
    const newNode = new Node(val);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  // insert a node at a given index or position
  insertAt(val, index) {
    const newNode = new Node(val);
    let currNode = this.head;

    if (currNode === null) {
      currNode = newNode;
    } else if (index >= this.length) {
      this.append(val);
    } else {
      let position = 0;

      while (currNode && position < index - 1) {
        position++;
        currNode = currNode.next;
      }

      const oldNext = currNode.next;
      currNode.next = newNode;
      newNode.next = oldNext;
    }

    this.length++;
  }

  // remove a node with a given value
  remove(val) {
    let currNode = this.head;

    if (currNode.val === val) {
      this.head = this.head.next;
    } else {
      while (currNode.next !== null) {
        if (currNode.next.val === val) {
          const next = currNode.next.next;

          currNode.next = next;
          break;
        }
        currNode = currNode.next;
      }
    }

    this.length--;
  }

  // remove a node with a given index
  removeAt(index) {
    let currNode = this.head;

    if (index > -1 && index < this.length) {
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let position = 0;

        while (position < index - 1) {
          position++;
          currNode = currNode.next;
        }

        const next = currNode.next.next;

        currNode.next = next;
      }

      this.length--;
    }
  }

  // get the index of a specific node
  indexOf(val) {
    if (this.head.val === val) return 0;

    let currNode = this.head;

    let index = 0;
    while (currNode !== null) {
      if (currNode.val === val) return index;

      index++;
      currNode = currNode.next;
    }

    return -1;
  }

  isEmpty() {
    return this.length > 0;
  }

  print() {
    let currNode = this.head;

    while (currNode) {
      console.log(currNode.val);
      currNode = currNode.next;
    }
  }

  size() {
    return this.length;
  }

  // this works for sorted ans unsorted list
  removeDuplicates() {
    if (this.head.next === null) return this.head;

    const hashSet = new Set();
    let prev = null;
    let currNode = this.head;

    while (currNode !== null) {
      if (!hashSet.has(currNode.val)) {
        hashSet.add(currNode.val);
        prev = currNode;
      } else {
        prev.next = currNode.next;
      }

      currNode = currNode.next;
    }

    return this.head;
  }

  // this works only if a list is sorted
  removeDuplicatesFromSortedList() {
    if (this.head.next === null) return this.head;

    let currNode = this.head;

    while (currNode !== null) {
      while (currNode.next && currNode.val === currNode.next.val)
        currNode.next = currNode.next.next;

      currNode = currNode.next;
    }

    return this.head;
  }

  removeNthNodeFromEnd(n) {
    if (!this.head) return this.head;

    let current = this.head;
    let length = 1;

    while (current) {
      current = current.next;
      length++;
    }

    const nodePosition = length - n - 1;
    let position = 0;
    current = this.head;

    if (nodePosition === 0) this.head = this.head.next;

    while (current && position < nodePosition - 1) {
      position++;
      current = current.next;
    }

    if (current.next) current.next = current.next.next;
    else this.head = null;

    return this.head;
  }

  removeNthNodeFromEndBetter(n) {
    const tempHead = new Node(0);
    tempHead.next = this.head;

    let left = tempHead;
    let right = this.head;

    while (n > 0 && right) {
      right = right.next;
      n--;
    }

    while (right) {
      left = left.next;
      right = right.next;
    }

    left.next = left.next.next;

    return tempHead.next;
  }
}

const linkedList = new SinglyLinkedList();

// console.log(linkedList.size());

linkedList.append('1');
linkedList.append('2');
linkedList.append('3');
linkedList.append('4');
// linkedList.append('5');
// linkedList.append('6');
// linkedList.append('7');

linkedList.print();

console.log('***************************');

linkedList.removeNthNodeFromEndBetter(3);

linkedList.print();

// linkedList.insertAt('e', 2);
// linkedList.insertAt('g', 8);

// linkedList.prepend('z');
// linkedList.prepend('r');

// console.log('indexOf -> a = ', linkedList.indexOf('a'));
// console.log('indexOf -> b = ', linkedList.indexOf('b'));
// console.log('indexOf -> c = ', linkedList.indexOf('c'));
// console.log('indexOf -> d = ', linkedList.indexOf('d'));

// linkedList.prepend('z');

// console.log('indexOf -> z = ', linkedList.indexOf('z'));
// console.log('indexOf -> a = ', linkedList.indexOf('a'));
// linkedList.removeAt();
// linkedList.remove('d');
// linkedList.remove('z');

// linkedList.print();

// console.log(linkedList.size());

// a -> b -> c -> d -> null | remove(c)
// a -> b -> d -> null
