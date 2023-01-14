class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  DFSpreOrder() {
    var data = [];
    var current = this.root;
    function travarse(node) {
      data.push(node.value);
      if (node.left) travarse(node.left);
      if (node.right) travarse(node.right);
    }
    travarse(current);
    return data;
  }

  DFSpostOrder() {
    var data = [];
    var current = this.root;
    function travarse(node) {
      if (node.left) {
        current = node.left;
        travarse(current);
      }

      if (node.right) {
        current = node.right;
        travarse(current);
      }

      data.push(node.value);
    }

    travarse(current);
    return data;
  }

  DFSinOrder() {
    var data = [];
    var current = this.root;
    function travarse(node) {
      if (node.left) {
        current = node.left;
        travarse(current);
      }
      data.push(node.value);
      if (node.right) {
        current = node.right;
        travarse(current);
      }
    }

    travarse(current);
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFSpreOrder()); // [ 10, 6, 3, 8, 15, 20 ]
console.log(tree.DFSpostOrder()); // [ 3, 8, 6, 20, 15, 10 ]
console.log(tree.DFSinOrder()); // [ 3, 6, 8, 10, 15, 20 ]
