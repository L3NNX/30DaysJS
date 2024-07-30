// Node class definition
class Node {
    constructor(value) {
      this.value = value;  // The value of the node
      this.next = null;    // Reference to the next node in the linked list
    }
  }
  
  // Creating nodes
  let node1 = new Node(10);
  let node2 = new Node(20);
  let node3 = new Node(30);
  
  // Linking nodes
  node1.next = node2;
  node2.next = node3;
  
  // Traversing the linked list
  let currentNode = node1;
  while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  