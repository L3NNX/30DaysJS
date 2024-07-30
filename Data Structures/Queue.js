// Importing the prompt-sync module for user input
import promptSync from 'prompt-sync';

// Initializing the prompt-sync
const prompt = promptSync();

// Queue class definition
class Queue {
  constructor() {
    this.items = []; // Array to hold the queue elements
  }

  // Method to add an element to the end of the queue
  enqueue(value) {
    this.items.push(value);
    console.log(`Enqueued ${value} into the queue.`);
  }

  // Method to remove and return the first element of the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty. Cannot dequeue.");
      return null;
    }
    const dequeuedValue = this.items.shift();
    console.log(`Dequeued ${dequeuedValue} from the queue.`);
    return dequeuedValue;
  }

  // Method to return the first element without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty. Nothing to peek.");
      return null;
    }
    const frontValue = this.items[0];
    console.log(`Front element is ${frontValue}.`);
    return frontValue;
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Method to return the number of elements in the queue
  size() {
    return this.items.length;
  }

  // Method to display all elements in the queue
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
    } else {
      console.log("Queue elements:", this.items.join(' <- '));
    }
  }
}

// Creating a new queue
const queue = new Queue();

// Function to prompt the user for input
const promptUser = () => {
  console.log("\nOptions:");
  console.log("1. Enqueue an element");
  console.log("2. Dequeue an element");
  console.log("3. Peek the front element");
  console.log("4. Check if the queue is empty");
  console.log("5. Get the size of the queue");
  console.log("6. Display the queue");
  console.log("7. Exit");

  const option = prompt("Choose an option (1-7): ");

  switch (option) {
    case '1':
      const value = prompt("Enter a value to enqueue: ");
      queue.enqueue(value);
      promptUser(); // Prompt again after enqueuing
      break;
    case '2':
      queue.dequeue();
      promptUser(); // Prompt again after dequeueing
      break;
    case '3':
      queue.peek();
      promptUser(); // Prompt again after peeking
      break;
    case '4':
      console.log(queue.isEmpty() ? "Queue is empty." : "Queue is not empty.");
      promptUser(); // Prompt again after checking isEmpty
      break;
    case '5':
      console.log(`Current queue size: ${queue.size()}`);
      promptUser(); // Prompt again after checking size
      break;
    case '6':
      queue.display();
      promptUser(); // Prompt again after displaying
      break;
    case '7':
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid option. Please choose again.");
      promptUser(); // Prompt again for invalid input
  }
};

// Start prompting the user
promptUser();
