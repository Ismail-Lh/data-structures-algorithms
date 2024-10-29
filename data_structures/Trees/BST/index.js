class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // 1- create a newNode to insert
    const newNode = new Node(value);

    // 2- Check if the root node exist
    // 2.1- If the root node doesn't exist make the newNode as the root
    if (this.root === null) {
      this.root = newNode; // Set the new node as the root
      return this; // Return the tree instance
    }

    let current = this.root; // Start with the root node

    while (true) {
      if (value === current.value) {
        current.count++; // Increment the count if the value already exists
        return this; // Return the tree instance
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode; // Insert the new node to the left
          return this; // Return the tree instance
        }

        current = current.left; // Move to the left child
      } else {
        if (current.right === null) {
          current.right = newNode; // Insert the new node to the right
          return this; // Return the tree instance
        }

        current = current.right; // Move to the right child
      }
    }
  }

  search(val) {
    if (!this.root) {
      return false;
    }

    if (this.root.value === val) return true;

    let current = this.root;
    while (true) {
      if (val < current.value) {
        if (!current.left) {
          return false;
        }

        if (current.left.value === val) return true;

        current = current.left;
      } else if (val > current.value) {
        if (!current.right) {
          return false;
        }

        if (current.right.value === val) return true;

        current = current.right;
      }
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(4);
tree.insert(6);
tree.insert(3);
tree.insert(14);
tree.insert(20);
tree.insert(10);
tree.insert(3);

console.log(tree.search(21));

// console.log(JSON.stringify(tree.root, null, 2));
