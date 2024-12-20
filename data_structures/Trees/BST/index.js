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

  find(val, root = this.root) {
    if (!root) return false;

    if (root.value === val) return true;

    if (val < root.value) return this.find(val, root.left);
    return this.find(val, root.right);
  }

  PreorderDepthFirst() {
    if (!this.root) return [];

    const stack = [this.root];
    const values = [];

    while (stack.length > 0) {
      const current = stack.pop();
      values.push(current.value);

      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }

    return values;
  }

  PreorderDepthFirstRecursive(root = this.root) {
    if (!root) return [];

    const leftValues = this.PreorderDepthFirstRecursive(root.left);
    const rightValues = this.PreorderDepthFirstRecursive(root.right);

    return [root.value, ...leftValues, ...rightValues];
  }

  postOrderDepthFirst() {
    if (!this.root) return [];

    const stack = [this.root];
    const values = [];
    const result = [];

    while (stack.length) {
      const current = stack.pop();
      values.push(current.value);

      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }

    while (values.length) {
      result.push(values.pop());
    }

    return result;
  }

  postOrderDepthFirstRecursive() {
    if (!this.root) return [];

    const values = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      values.push(node.value);
    }

    traverse(this.root);

    return values;
  }

  inOrderDepthFirstRecursive() {
    if (!this.root) return [];

    const values = [];

    function traverse(node) {
      if (node.left) traverse(node.left);

      values.push(node.value);

      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return values;
  }

  inOrderDepthFirstIterative() {
    if (!this.root) return [];

    const stack = [];
    const values = [];
    let current = this.root;

    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      values.push(current.value);

      current = current.right;
    }

    return values;
  }

  breathFirstSearch() {
    if (!this.root) return [];

    const queue = [this.root];
    const values = [];

    while (queue.length > 0) {
      const current = queue.shift();
      values.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return values;
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

//          10
//         /  \
//        5    15
//      / \   / \
//    4   6  14 20
//   /
// 3

// [3,4,6,5,14,20,15,10]
console.log(`preOrder traverse -> ${tree.PreorderDepthFirst()}`);
console.log(`postOrder traverse -> ${tree.postOrderDepthFirst()}`);
console.log(
  'inOrder traverse (Recursive) ->',
  tree.inOrderDepthFirstRecursive()
);
console.log(
  'inOrder traverse (Iterative) ->',
  tree.inOrderDepthFirstIterative()
);

// console.log(tree.find(20));
// console.log(tree.find(5));
// console.log(tree.find(1));
// console.log(tree.find(2));
// console.log(tree.find(4));

// console.log(JSON.stringify(tree.root, null, 2));
