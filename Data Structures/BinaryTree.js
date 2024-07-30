import promptSync from 'prompt-sync';

// Initializing the prompt-sync
const prompt = promptSync();

class TreeNode {
  constructor(value) {
    this.value = value; // The value of the node
    this.left = null;   // Reference to the left child
    this.right = null;  // Reference to the right child
  }
}

class BinaryTree {
  constructor() {
    this.root = null; // The root of the binary tree
  }

  // Method to insert a new value into the binary tree
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode; // If the tree is empty, set the root
    } else {
      this._insertNode(this.root, newNode); // Insert recursively
    }
  }

  // Helper method to insert a node in the tree
  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      // Insert in the left subtree
      if (!node.left) {
        node.left = newNode; // If left is empty, place the new node here
      } else {
        this._insertNode(node.left, newNode); // Recur down the left subtree
      }
    } else {
      // Insert in the right subtree
      if (!node.right) {
        node.right = newNode; // If right is empty, place the new node here
      } else {
        this._insertNode(node.right, newNode); // Recur down the right subtree
      }
    }
  }

  // Method for inorder traversal
  inorderTraversal(node) {
    if (node) {
      this.inorderTraversal(node.left); // Visit left subtree
      console.log(node.value);           // Visit node
      this.inorderTraversal(node.right); // Visit right subtree
    }
  }

  // Public method to start the inorder traversal
  displayInorder() {
    console.log("Inorder Traversal:");
    this.inorderTraversal(this.root);
  }
}

// Creating a new binary tree
const binaryTree = new BinaryTree();

// Function to prompt the user for input
const promptUser = () => {
  console.log("\nOptions:");
  console.log("1. Insert a value into the binary tree");
  console.log("2. Display inorder traversal of the tree");
  console.log("3. Exit");

  const option = prompt("Choose an option (1-3): ");

  switch (option) {
    case '1':
      const value = prompt("Enter a value to insert: ");
      binaryTree.insert(value);
      console.log(`Inserted ${value} into the binary tree.`);
      promptUser(); // Prompt again after inserting
      break;
    case '2':
      binaryTree.displayInorder();
      promptUser(); // Prompt again after displaying
      break;
    case '3':
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid option. Please choose again.");
      promptUser(); // Prompt again for invalid input
  }
};

// Start prompting the user
promptUser();
