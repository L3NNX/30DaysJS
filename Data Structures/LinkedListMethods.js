import readline from 'readline';


// Node class definition
class Node {
    constructor(value) {
      this.value = value;  // The value of the node
      this.next = null;    // Reference to the next node in the linked list
    }
  }
  
  // LinkedList class definition
  class LinkedList {
    constructor() {
      this.head = null;    // The first node in the linked list
      this.tail = null;    // The last node in the linked list
      this.size = 0;       // The number of nodes in the linked list
    }
  
    // Method to add a node to the end of the linked list
    add(value) {
      const newNode = new Node(value);
      if (!this.head) {
        // If the list is empty, set head and tail to the new node
        this.head = newNode;
        this.tail = newNode;
      } else {
        // Otherwise, link the new node to the end and update the tail
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    // Method to remove a node from the end of the linked list
    remove() {
      if (!this.head) {
        // If the list is empty, there's nothing to remove
        return null;
      }
  
      if (this.head === this.tail) {
        // If there's only one node, remove it and reset head and tail
        const removedNode = this.head;
        this.head = null;
        this.tail = null;
        this.size--;
        return removedNode.value;
      }
  
      // Traverse to the second last node
      let currentNode = this.head;
      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
  
      // Remove the last node and update the tail
      const removedNode = this.tail;
      this.tail = currentNode;
      this.tail.next = null;
      this.size--;
      return removedNode.value;
    }
  
    // Method to display all nodes in the linked list
    display() {
      let currentNode = this.head;
      const values = [];
      while (currentNode) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
      }
      console.log(values.join(' -> '));
    }
  }
  

  
  // Creating an interface for user input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Creating a new linked list
  const list = new LinkedList();
  
  // Function to prompt the user for input
  const promptUser = () => {
    console.log("\nOptions:");
    console.log("1. Add a node");
    console.log("2. Remove a node");
    console.log("3. Display the linked list");
    console.log("4. Exit");
  
    rl.question("Choose an option (1-4): ", (option) => {
      switch (option) {
        case '1':
          rl.question("Enter a value to add: ", (value) => {
            list.add(value);
            console.log(`Added ${value} to the linked list.`);
            promptUser(); // Prompt again after adding
          });
          break;
        case '2':
          const removedValue = list.remove();
          if (removedValue !== null) {
            console.log(`Removed value: ${removedValue}`);
          } else {
            console.log("The linked list is empty.");
          }
          promptUser(); // Prompt again after removing
          break;
        case '3':
          console.log("Current Linked List:");
          list.display();
          promptUser(); // Prompt again after displaying
          break;
        case '4':
          console.log("Exiting...");
          rl.close(); // Close the readline interface
          break;
        default:
          console.log("Invalid option. Please choose again.");
          promptUser(); // Prompt again for invalid input
      }
    });
  };
  
  // Start prompting the user
  promptUser();
  